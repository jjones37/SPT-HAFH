#!/usr/bin/env python3
"""
SPT Auto-Shutdown Monitor
Simple script to shutdown EC2 when no players are connected
"""

import time
import subprocess
import socket
from datetime import datetime

# Configuration
FIKA_PORT = 6969
IDLE_MINUTES = 5
CHECK_INTERVAL = 30  # seconds
TEST_MODE = False  # Set to True to prevent actual shutdown (testing only)

def log_message(message):
    """Log message with timestamp"""
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    log_entry = f"[{timestamp}] {message}"
    print(log_entry)
    
    # Also write to log file
    try:
        with open("C:/SPT/auto-shutdown.log", "a") as f:
            f.write(log_entry + "\n")
    except:
        pass  # If we can't write to log file, just continue

def check_connections():
    """Check if there are active connections on the Fika port"""
    try:
        # Use netstat to check for established connections
        result = subprocess.run(
            ["netstat", "-an"], 
            capture_output=True, 
            text=True
        )
        
        # Look for ESTABLISHED connections on our port
        lines = result.stdout.split('\n')
        for line in lines:
            if f":{FIKA_PORT}" in line and "ESTABLISHED" in line:
                return True
        return False
        
    except Exception as e:
        log_message(f"Error checking connections: {e}")
        return True  # If we can't check, assume someone is connected (safer)

def shutdown_server():
    """Shutdown the EC2 instance"""
    if TEST_MODE:
        log_message("TEST MODE: Would have shut down server (no actual shutdown)")
        return
    
    log_message("SHUTTING DOWN - No connections detected")
    
    # Execute shutdown command
    subprocess.run([
        "shutdown", "/s", "/t", "10", 
        "/c", f"SPT Server: No players detected for {IDLE_MINUTES} minutes"
    ])

def main():
    log_message("=" * 60)
    log_message("SPT Auto-Shutdown Monitor Started")
    log_message(f"Port: {FIKA_PORT}")
    log_message(f"Idle timeout: {IDLE_MINUTES} minutes")
    log_message(f"Check interval: {CHECK_INTERVAL} seconds")
    log_message(f"Test mode: {'ENABLED (no actual shutdown)' if TEST_MODE else 'DISABLED (will shutdown)'}")
    log_message("=" * 60)
    
    idle_count = 0
    max_checks = (IDLE_MINUTES * 60) // CHECK_INTERVAL
    
    try:
        while True:
            players_connected = check_connections()
            
            if players_connected:
                # Players connected - reset counter
                idle_count = 0
                log_message("Players connected - server active")
            else:
                # No connections - increment counter
                idle_count += 1
                minutes_idle = (idle_count * CHECK_INTERVAL) // 60
                log_message(f"No players connected - idle for {minutes_idle} minutes ({idle_count}/{max_checks} checks)")
                
                # Check if we should shutdown
                if idle_count >= max_checks:
                    log_message(f"Idle timeout reached ({IDLE_MINUTES} minutes) - initiating shutdown")
                    shutdown_server()
                    if not TEST_MODE:
                        break
                    else:
                        # Reset counter in test mode to continue monitoring
                        idle_count = 0
            
            # Wait before next check
            time.sleep(CHECK_INTERVAL)
            
    except KeyboardInterrupt:
        log_message("Auto-shutdown monitor stopped by user")

if __name__ == "__main__":
    main()
