@echo off
title SPT Server Status and Launcher
color 0A

echo =============================================
echo       SPT Server Status and Launcher  
echo =============================================
echo.

echo Checking server status...
echo.

:: Check if curl is available (Windows 10+)
curl --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: curl is not available on this system.
    echo Please install curl or use Windows 10/11.
    pause
    exit /b 1
)

:: Call the Lambda function
echo Contacting server...
curl -s "https://sowl6y94xb.execute-api.us-east-1.amazonaws.com/default/SPT-Status" > temp_status.json

:: Check if the request was successful
if %errorlevel% neq 0 (
    echo ERROR: Failed to contact server status API.
    echo Please check your internet connection.
    pause
    del temp_status.json 2>nul
    exit /b 1
)

:: Parse the JSON response (improved approach)
for /f "delims=" %%a in (temp_status.json) do set "json_line=%%a"

:: Extract status value more carefully
echo %json_line% | findstr /i "Running" >nul
if %errorlevel%==0 set "status=Running"

echo %json_line% | findstr /i "Starting" >nul  
if %errorlevel%==0 set "status=Starting"

echo %json_line% | findstr /i "Offline" >nul
if %errorlevel%==0 set "status=Offline"

:: If no status found, set unknown
if not defined status set "status=Unknown"

:: Display status
echo.
echo Current Server Status: %status%
echo.

:: Handle different status cases
if /i "%status%"=="Running" (
    echo ✓ Server is READY! Starting SPT Launcher...
    echo.
    
    :: Check if SPT.Launcher.exe exists
    if exist "SPT.Launcher.exe" (
        echo Starting SPT.Launcher.exe...
        start "" "SPT.Launcher.exe"
        echo.
        echo SPT Launcher started! You can close this window.
    ) else (
        echo ERROR: SPT.Launcher.exe not found in current directory.
        echo Please make sure this script is in your SPT folder.
        echo Current directory: %CD%
    )
) else if /i "%status%"=="Starting" (
    echo ⏳ Server is starting up...
    echo The server is booting or the game server is still loading.
    echo Please wait a few minutes and try again.
) else if /i "%status%"=="Offline" (
    echo 🔄 Server was offline and has been started.
    echo Please wait 2-3 minutes for it to boot up, then run this script again.
) else (
    echo ❓ Unknown status: %status%
    echo Please check the server manually or try again later.
)

:: Cleanup
del temp_status.json 2>nul

echo.
echo Press any key to exit...
pause >nul