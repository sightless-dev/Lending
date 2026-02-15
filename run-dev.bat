\
@echo off
setlocal
cd /d "%~dp0"

echo ===============================
echo Installing dependencies...
echo ===============================
npm install
if errorlevel 1 (
  echo npm install failed.
  pause
  exit /b 1
)

echo ===============================
echo Starting dev server...
echo ===============================
npm run dev
endlocal
