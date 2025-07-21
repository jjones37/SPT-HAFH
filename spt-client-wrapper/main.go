package main

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"os"
	"os/exec"
	"path/filepath"
	"strings"
	"time"
)

const (
	CONFIG_FILE = "spt-hosted.json"
	TIMEOUT     = 10 * time.Second
)

type Config struct {
	LambdaURL           string `json:"lambda_url"`
	UpdateURL           string `json:"update_url,omitempty"`
	ServerHealthcheckMs int    `json:"server_healthcheck_ms,omitempty"`
	LauncherPath        string `json:"launcher_path,omitempty"`
}

type ServerResponse struct {
	Status   string `json:"status"`
	Message  string `json:"message"`
	ServerIP string `json:"server_ip,omitempty"`
}

func main() {
	fmt.Println("=============================================")
	fmt.Println("       SPT Server Status & Launcher")
	fmt.Println("=============================================")
	fmt.Println()

	// Load configuration
	config, err := loadConfig()
	if err != nil {
		fmt.Printf("ERROR: Failed to load configuration from %s\n", CONFIG_FILE)
		fmt.Printf("Error details: %v\n", err)
		fmt.Println()
		fmt.Println("Please make sure spt-hosted.json exists in the same directory.")
		pauseAndExit()
		return
	}

	// Get current directory
	currentDir, _ := os.Getwd()

	fmt.Println("Checking server status...")
	fmt.Println()

	// Keep checking until server is ready
	for {
		// Check server status
		status, err := checkServerStatus(config.LambdaURL)
		if err != nil {
			fmt.Printf("ERROR: Failed to contact server status API.\n")
			fmt.Printf("Error details: %v\n", err)
			fmt.Println("Retrying in a few seconds...")
			time.Sleep(time.Duration(config.ServerHealthcheckMs) * time.Millisecond)
			continue
		}

		fmt.Printf("Current Server Status: %s\n", status.Status)

		// Handle different status cases
		switch strings.ToLower(status.Status) {
		case "running":
			fmt.Println("✓ Server is READY! Starting SPT Launcher...")
			fmt.Println()

			// Check if launcher exists (use config path or relative path)
			var launcherPath string
			if filepath.IsAbs(config.LauncherPath) {
				launcherPath = config.LauncherPath
			} else {
				launcherPath = filepath.Join(currentDir, config.LauncherPath)
			}

			if fileExists(launcherPath) {
				fmt.Printf("Starting %s...\n", config.LauncherPath)
				err := startLauncher(launcherPath)
				if err != nil {
					fmt.Printf("ERROR: Failed to start launcher: %v\n", err)
				} else {
					fmt.Println()
					fmt.Println("SPT Launcher started! You can close this window.")
				}
			} else {
				fmt.Printf("ERROR: %s not found.\n", config.LauncherPath)
				if !filepath.IsAbs(config.LauncherPath) {
					fmt.Printf("Looking in directory: %s\n", currentDir)
				}
				fmt.Println("Please check the launcher_path in spt-hosted.json")
			}

			// Exit the loop when server is running and launcher is started
			break

		case "starting":
			fmt.Println("⏳ Server is starting up...")
			fmt.Println("The server is booting or the game server is still loading.")
			fmt.Printf("Checking again in %d seconds...\n", config.ServerHealthcheckMs/1000)

		case "offline":
			fmt.Println("🔄 Server was offline and has been started.")
			fmt.Printf("Waiting for server to boot up... Checking again in %d seconds.\n", config.ServerHealthcheckMs/1000)

		default:
			fmt.Printf("❓ Unknown status: %s\n", status.Status)
			fmt.Printf("Checking again in %d seconds...\n", config.ServerHealthcheckMs/1000)
		}

		// If server is running, break out of the loop
		if strings.ToLower(status.Status) == "running" {
			break
		}

		// Wait before checking again
		fmt.Println()
		time.Sleep(time.Duration(config.ServerHealthcheckMs) * time.Millisecond)
	}

	fmt.Println()
	fmt.Println("Press Enter to exit...")
	fmt.Scanln()
}

func loadConfig() (*Config, error) {
	// Check if config file exists
	if !fileExists(CONFIG_FILE) {
		// Create default config file
		defaultConfig := &Config{
			LambdaURL:           "",
			UpdateURL:           "",
			ServerHealthcheckMs: 15000,
			LauncherPath:        "../SPT.Launcher.exe",
		}

		err := saveConfig(defaultConfig)
		if err != nil {
			return nil, fmt.Errorf("failed to create default config: %w", err)
		}

		fmt.Printf("Created default %s file. You can edit it to customize settings.\n", CONFIG_FILE)
		return defaultConfig, nil
	}

	// Read existing config file
	data, err := os.ReadFile(CONFIG_FILE)
	if err != nil {
		return nil, fmt.Errorf("failed to read config file: %w", err)
	}

	// Parse JSON
	var config Config
	err = json.Unmarshal(data, &config)
	if err != nil {
		return nil, fmt.Errorf("failed to parse config JSON: %w", err)
	}

	// Validate required fields
	if config.LambdaURL == "" {
		return nil, fmt.Errorf("lambda_url is required in config file")
	}

	// Set default healthcheck interval if not specified
	if config.ServerHealthcheckMs <= 0 {
		config.ServerHealthcheckMs = 15000
	}

	// Set default launcher path if not specified
	if config.LauncherPath == "" {
		config.LauncherPath = "SPT.Launcher.exe"
	}

	return &config, nil
}

func saveConfig(config *Config) error {
	data, err := json.MarshalIndent(config, "", "  ")
	if err != nil {
		return fmt.Errorf("failed to marshal config: %w", err)
	}

	err = os.WriteFile(CONFIG_FILE, data, 0644)
	if err != nil {
		return fmt.Errorf("failed to write config file: %w", err)
	}

	return nil
}

func checkServerStatus(lambdaURL string) (*ServerResponse, error) {
	fmt.Println("Contacting server...")

	// Create HTTP client with timeout
	client := &http.Client{
		Timeout: TIMEOUT,
	}

	// Make HTTP request
	resp, err := client.Get(lambdaURL)
	if err != nil {
		return nil, fmt.Errorf("failed to contact server: %w", err)
	}
	defer resp.Body.Close()

	// Check HTTP status code
	if resp.StatusCode != http.StatusOK {
		return nil, fmt.Errorf("server returned status code: %d", resp.StatusCode)
	}

	// Read response body
	body, err := io.ReadAll(resp.Body)
	if err != nil {
		return nil, fmt.Errorf("failed to read response: %w", err)
	}

	// Parse JSON response
	var serverResp ServerResponse
	err = json.Unmarshal(body, &serverResp)
	if err != nil {
		return nil, fmt.Errorf("failed to parse JSON response: %w", err)
	}

	return &serverResp, nil
}

func fileExists(filename string) bool {
	_, err := os.Stat(filename)
	return !os.IsNotExist(err)
}

func startLauncher(path string) error {
	cmd := exec.Command(path)

	// Start the process without waiting for it to complete
	err := cmd.Start()
	if err != nil {
		return fmt.Errorf("failed to start launcher: %w", err)
	}

	return nil
}

func pauseAndExit() {
	fmt.Println()
	fmt.Println("Press Enter to exit...")
	fmt.Scanln()
	os.Exit(1)
}
