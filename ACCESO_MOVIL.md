# 📱 Acceder desde tu Móvil

## ✅ Tu IP Local: **10.2.0.2**

## 📋 Pasos para acceder desde el móvil:

### 1. Conecta tu móvil a la misma red WiFi
   - Tu PC y tu móvil deben estar en la misma red WiFi

### 2. Abre el navegador en tu móvil
   - Chrome, Safari, Firefox, etc.

### 3. Escribe esta URL:
   ```
   http://10.2.0.2:3002
   ```

### 4. ¡Listo! Deberías ver el sitio NTG INNOVA

---

## 🔧 Si no funciona:

### Verificar que el servidor esté corriendo:
```bash
cd C:\Users\Luis888\Desktop\proyecto-raul
npm run dev
```

### Verificar que escuche en todas las interfaces:
El servidor debe estar configurado para escuchar en `0.0.0.0` (ya está configurado en vite.config.ts)

### Desactivar Firewall temporalmente (si bloquea):
1. Windows + R
2. Escribe: `wf.msc`
3. Click en "Reglas de entrada"
4. Busca "Node.js" o "Vite"
5. Habilitar si está deshabilitado

O crear regla temporal:
```powershell
New-NetFirewallRule -DisplayName "Vite Dev Server" -Direction Inbound -Protocol TCP -LocalPort 3002 -Action Allow
```

---

## 🌐 URL de Acceso:

### Desde tu PC:
```
http://localhost:3002
```

### Desde tu móvil (misma WiFi):
```
http://10.2.0.2:3002
```

---

## 💡 Tip:
Si cambias de red WiFi, tu IP puede cambiar. Ejecuta esto para obtener tu nueva IP:
```powershell
ipconfig | Select-String -Pattern "IPv4"
```

