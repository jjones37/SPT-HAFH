#!/bin/bash
echo "Building SPT Launcher for Windows..."
GOOS=windows GOARCH=amd64 go build -ldflags="-s -w" -o SPT.Wrapper.exe main.go
echo "✓ Built SPT.Wrapper.exe"