@echo off
echo ========================================
echo   Probar Proyecto Localmente
echo ========================================
echo.

cd /d "%~dp0"

if not exist "node_modules" (
    echo Instalando dependencias...
    echo.
    call npm install
    echo.
)

echo Iniciando servidor de desarrollo...
echo.
echo El sitio estara disponible en:
echo   http://localhost:3002
echo.
echo Presiona Ctrl+C para detener el servidor
echo.

call npm run dev

pause

