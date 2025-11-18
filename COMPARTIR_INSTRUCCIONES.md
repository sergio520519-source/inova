# 📤 Cómo Compartir el Proyecto NTG INNOVA

## ✅ Opción 1: Crear ZIP Automático (MÁS FÁCIL)

### Método A: Usar el script automático
1. Haz doble clic en **`compartir.bat`**
2. Se creará automáticamente: `C:\Users\Luis888\Desktop\proyecto-raul-compartir.zip`
3. ¡Listo para compartir!

### Método B: Manual
1. Ve a `C:\Users\Luis888\Desktop\proyecto-raul`
2. Selecciona todos los archivos EXCEPTO:
   - `node_modules` (si existe)
   - `dist` (si existe)
3. Click derecho → **Enviar a** → **Carpeta comprimida (en zip)**
4. Renombra el ZIP a `proyecto-raul-compartir.zip`

---

## 🌐 Opción 2: Subir a GitHub (Para Desarrolladores)

### Paso 1: Inicializar Git
```bash
cd C:\Users\Luis888\Desktop\proyecto-raul
git init
git add .
git commit -m "NTG INNOVA - Sitio Web Premium"
```

### Paso 2: Crear repositorio en GitHub.com
1. Ve a https://github.com/new
2. Nombre: `ntginnova-website`
3. Público o Privado (tú decides)
4. **NO** marques "Add README"
5. Click **Create repository**

### Paso 3: Subir código
```bash
git remote add origin https://github.com/TU_USUARIO/ntginnova-website.git
git branch -M main
git push -u origin main
```

### Compartir: `https://github.com/TU_USUARIO/ntginnova-website`

---

## ☁️ Opción 3: Deploy en Vercel (Hosting Gratuito - RECOMENDADO)

### Paso 1: Instalar Vercel CLI
```bash
npm install -g vercel
```

### Paso 2: Build y Deploy
```bash
cd C:\Users\Luis888\Desktop\proyecto-raul
npm install
npm run build
vercel
```

### Paso 3: Seguir instrucciones en pantalla
- Te pedirá crear cuenta (gratis)
- URL será: `https://ntginnova-xxxxx.vercel.app`
- **Comparte esta URL con quien quieras**

---

## 🔗 Opción 4: Deploy en Netlify (Alternativa)

### Desde el navegador:
1. Ve a https://app.netlify.com/drop
2. **Arrastra** la carpeta `dist` (después de `npm run build`)
3. O conectar con GitHub si usaste la Opción 2
4. URL: `https://tu-sitio.netlify.app`

---

## 📧 Opción 5: Compartir por Email/Drive

### Para mostrar el diseño:
1. Abre `demo.html` en tu navegador
2. Toma capturas de pantalla
3. Adjunta en el email

### Para compartir código:
1. Usa el ZIP de la Opción 1
2. Sube a Google Drive / OneDrive / Dropbox
3. Comparte el link

---

## 🎯 Resumen Rápido

| Método | Tiempo | Mejor para |
|--------|--------|------------|
| **ZIP** | 1 min | Compartir código completo |
| **GitHub** | 5 min | Desarrolladores/Colaboración |
| **Vercel** | 10 min | Sitio en vivo funcionando |
| **Netlify** | 10 min | Sitio en vivo (alternativa) |
| **demo.html** | Instant | Solo mostrar diseño |

---

## 🚀 Recomendación

**Para compartir rápidamente:**
1. ✅ Ejecuta `compartir.bat`
2. ✅ Comparte el ZIP por email/Drive

**Para sitio en vivo:**
1. ✅ Deploy en Vercel (más fácil)
2. ✅ Comparte la URL pública

---

## ⚠️ Antes de Compartir

Asegúrate de que el receptor tenga:
- Node.js instalado (si compartes código)
- O solo abre `demo.html` si solo quiere ver el diseño

---

## 📞 ¿Necesitas ayuda?

Lee `GUIA_COMPARTIR.md` para instrucciones más detalladas.

