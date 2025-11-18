@echo off
echo ========================================
echo   Generando ZIP para compartir...
echo ========================================
echo.

cd /d "%~dp0"

REM Excluir node_modules si existe
if exist "node_modules" (
    echo Excluyendo node_modules...
)

REM Crear ZIP sin node_modules
powershell -Command "Get-ChildItem -Path . -Exclude node_modules,dist,*.log | Compress-Archive -DestinationPath ..\proyecto-raul-compartir.zip -Force -CompressionLevel Optimal"

echo.
echo ========================================
echo   ¡ZIP creado exitosamente!
echo ========================================
echo.
echo Archivo: %USERPROFILE%\Desktop\proyecto-raul-compartir.zip
echo.
echo Ahora puedes compartir este archivo ZIP por:
echo   - Email
echo   - Google Drive
echo   - OneDrive
echo   - Dropbox
echo   - USB
echo.
pause

