# 🚀 Guía para Compartir el Proyecto NTG INNOVA

## 📦 Opción 1: Crear un archivo ZIP (Más Fácil)

### En Windows:
1. Ve a la carpeta del proyecto: `C:\Users\Luis888\Desktop\proyecto-raul`
2. Click derecho en la carpeta → **Enviar a** → **Carpeta comprimida (en zip)**
3. El archivo ZIP estará listo para compartir por email, Google Drive, etc.

### O desde PowerShell:
```powershell
cd C:\Users\Luis888\Desktop
Compress-Archive -Path proyecto-raul -DestinationPath proyecto-raul.zip -Force
```

---

## 🌐 Opción 2: Subir a GitHub (Recomendado para desarrollo)

### Paso 1: Inicializar Git
```bash
cd C:\Users\Luis888\Desktop\proyecto-raul
git init
git add .
git commit -m "Initial commit - NTG INNOVA Website"
```

### Paso 2: Crear repositorio en GitHub
1. Ve a [github.com](https://github.com)
2. Click en **New repository**
3. Nombre: `ntginnova-website`
4. Selecciona **Public** o **Private**
5. **NO** marques "Initialize with README"
6. Click **Create repository**

### Paso 3: Conectar y subir
```bash
git remote add origin https://github.com/TU_USUARIO/ntginnova-website.git
git branch -M main
git push -u origin main
```

### Compartir el link:
```
https://github.com/TU_USUARIO/ntginnova-website
```

---

## ☁️ Opción 3: Deploy en Vercel (Hosting Gratuito)

### Paso 1: Instalar Vercel CLI
```bash
npm install -g vercel
```

### Paso 2: Deploy
```bash
cd C:\Users\Luis888\Desktop\proyecto-raul
npm run build
vercel
```

### Paso 3: Compartir URL
Vercel te dará una URL tipo: `https://ntginnova-xxxxx.vercel.app`

---

## 🔗 Opción 4: Deploy en Netlify (Hosting Gratuito)

### Opción A: Desde el sitio web
1. Ve a [netlify.com](https://netlify.com)
2. Arrastra la carpeta `proyecto-raul` (después de hacer `npm run build`)
3. Compartir URL: `https://tu-sitio.netlify.app`

### Opción B: Desde CLI
```bash
npm install -g netlify-cli
cd C:\Users\Luis888\Desktop\proyecto-raul
npm run build
netlify deploy --prod
```

---

## 📧 Opción 5: Compartir por Email/Drive

### Para compartir con alguien que NO es desarrollador:
1. Abre `demo.html` en tu navegador
2. Puedes hacer capturas de pantalla o compartir el archivo HTML
3. O crea un ZIP como en la Opción 1

### Para compartir con desarrolladores:
1. Crea un ZIP excluyendo `node_modules`
2. Instrucciones incluidas en el README.md

---

## 🎯 Opción 6: Deploy en Render (Hosting Gratuito)

1. Ve a [render.com](https://render.com)
2. Connect your GitHub repository
3. O sube el proyecto manualmente
4. Render te dará una URL pública

---

## 📝 Recomendaciones

### Para compartir el código completo:
- ✅ **GitHub** - Mejor para desarrolladores
- ✅ **ZIP** - Más fácil, funciona para todos

### Para compartir el sitio funcionando:
- ✅ **Vercel** - Rápido y fácil (recomendado)
- ✅ **Netlify** - También muy bueno
- ✅ **Render** - Alternativa sólida

### Para demostrar sin deploy:
- ✅ Abre `demo.html` directamente en el navegador

---

## 🔐 Antes de compartir

Asegúrate de:
- [ ] No incluir `node_modules` (está en .gitignore)
- [ ] No incluir archivos sensibles como `.env`
- [ ] Tener el README.md actualizado
- [ ] Probar que `npm install` y `npm run dev` funcionen

---

## 💡 Compartir solo el Demo HTML

Si solo quieres mostrar cómo se ve:
1. Abre `demo.html` en tu navegador
2. Toma capturas de pantalla
3. O comparte el archivo `demo.html` directamente
4. El receptor solo necesita abrir el archivo en su navegador

