@echo off
echo ========================================
echo   Solucion: Abrir en Movil
echo ========================================
echo.

echo Tu servidor esta corriendo en puerto 3002
echo.

echo IMPORTANTE: Tu movil debe estar en la MISMA WiFi
echo.

echo Prueba estas URLs en tu movil:
echo.
echo 1. http://192.168.1.97:3002
echo 2. http://10.2.0.2:3002
echo.

echo Si no funciona, verifica:
echo - Mismo WiFi en PC y movil
echo - Firewall no esta bloqueando
echo - Servidor esta corriendo
echo.

echo Para abrir el puerto en firewall (ejecuta como Admin):
echo   powershell -Command "New-NetFirewallRule -DisplayName 'Vite Port 3002' -Direction Inbound -Protocol TCP -LocalPort 3002 -Action Allow"
echo.

pause

