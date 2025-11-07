@echo off
cd /d "%~dp0"

echo Clearing all caches and dependencies...
echo.

echo Stopping any running processes...
taskkill /f /im node.exe >nul 2>&1

echo Clearing Next.js cache...
if exist .next rmdir /s /q .next

echo Clearing node_modules cache...
if exist node_modules\.cache rmdir /s /q node_modules\.cache

echo Clearing npm cache...
call npm cache clean --force
if errorlevel 1 (
    echo npm cache clean failed, continuing anyway...
)

echo Reinstalling dependencies...
call npm install
if errorlevel 1 (
    echo npm install failed, continuing anyway...
)

echo.
echo Starting fresh development server...
echo.
echo Opening browser...
start http://localhost:3000

echo.
echo Development server starting... This window will stay open.
echo The server will run in a new window.
echo.

echo Starting dev server in new window...
start "Local Dev Server" cmd /k "npm run dev"
