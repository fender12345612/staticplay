@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo ========================================================
echo   StaticsPlay - ระบบสุ่มโจทย์สถิตยศาสตร์วิศวกรรม
echo ========================================================
python server.py
if %ERRORLEVEL% NEQ 0 (
    echo.
    start "" "http://localhost:8000"
    python -m http.server 8000
)
pause
