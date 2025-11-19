# 📱 Solución: No Abre en el Móvil

## ✅ Estado del Servidor:
- **Servidor:** ✅ Corriendo en puerto 3002
- **Configuración:** ✅ Escuchando en todas las interfaces (0.0.0.0)

## 🔍 IPs Detectadas:

Tu PC tiene varias IPs. Prueba estas URLs en tu móvil:

### URL Principal (Más Probable):
```
http://192.168.1.97:3002
```

### URL Alternativa 1:
```
http://10.2.0.2:3002
```

---

## 📋 Pasos para Solucionar:

### 1. Verificar que están en la misma WiFi
   - **PC:** Debe estar conectado a WiFi
   - **Móvil:** Debe estar en la MISMA red WiFi
   - ❌ No funcionará si el PC está por cable y el móvil por WiFi diferente

### 2. Probar URLs en el móvil (en este orden):

**Primero prueba:**
```
http://192.168.1.97:3002
```

**Si no funciona, prueba:**
```
http://10.2.0.2:3002
```

### 3. Verificar el Firewall

Ejecuta esto como Administrador en PowerShell:

```powershell
New-NetFirewallRule -DisplayName "Vite Dev Port 3002" -Direction Inbound -Protocol TCP -LocalPort 3002 -Action Allow
```

### 4. Verificar que el servidor esté corriendo

En la terminal del PC, deberías ver algo como:
```
VITE v5.0.5  ready in XXX ms

➜  Local:   http://localhost:3002/
➜  Network: http://0.0.0.0:3002/
```

### 5. Probar desde el PC primero

Abre en tu PC: `http://localhost:3002`
Si funciona en el PC, el servidor está bien.

---

## 🔧 Solución Rápida:

### Opción A: Reiniciar el servidor

1. Detén el servidor actual (Ctrl+C en la terminal)
2. Ejecuta de nuevo:
```bash
cd C:\Users\Luis888\Desktop\proyecto-raul
npm run dev
```

3. Espera a ver este mensaje:
```
Network: http://0.0.0.0:3002/
```

4. Prueba en el móvil: `http://192.168.1.97:3002`

### Opción B: Usar el nombre del PC

En lugar de IP, prueba:
```
http://nombre-de-tu-pc:3002
```

Para saber el nombre:
```powershell
$env:COMPUTERNAME
```

### Opción C: Permitir en Firewall manualmente

1. Windows + R
2. Escribe: `wf.msc`
3. Click "Reglas de entrada" → "Nueva regla"
4. Puerto → TCP → 3002
5. Permitir conexión → Aplicar a todos los perfiles
6. Nombre: "Vite Dev Server"

---

## ❓ Verificar Conexión:

### Desde tu móvil, prueba primero:
```
http://192.168.1.97
```

Si no carga nada, estás en la red incorrecta.

### Obtener IP actual:
```powershell
ipconfig | findstr "IPv4"
```

La IP que empiece con **192.168.** es la más probable para tu WiFi local.

---

## 💡 Alternativa: Usar ngrok (si nada funciona)

Si aún no funciona, puedes usar ngrok para crear un túnel público:

```bash
# Instalar ngrok
winget install ngrok

# Ejecutar túnel
ngrok http 3002
```

Esto te dará una URL pública tipo: `https://xxxx.ngrok.io`

---

## 🎯 Resumen Rápido:

1. ✅ Servidor está corriendo
2. 🔄 Prueba: `http://192.168.1.97:3002` en tu móvil
3. ✅ Asegúrate de la misma WiFi
4. 🔧 Si falla, reinicia el servidor

