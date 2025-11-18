# 🚀 Subir Proyecto a GitHub - Guía Paso a Paso

## ✅ Paso 1: Crear Repositorio en GitHub (IMPORTANTE)

### Opción A: Desde el navegador (Recomendado)
1. Ve a: **https://github.com/new**
2. **Repository name:** `ntginnova-website` (o el nombre que prefieras)
3. **Description:** `Sitio web premium para NTG INNOVA - Soluciones de Ozono y Control Ambiental`
4. Selecciona **Public** o **Private** (tú decides)
5. **⚠️ IMPORTANTE:** NO marques ninguna opción:
   - ❌ NO "Add a README file"
   - ❌ NO "Add .gitignore"
   - ❌ NO "Choose a license"
6. Click en **Create repository**

### Opción B: Desde GitHub CLI (si lo tienes instalado)
```bash
gh repo create ntginnova-website --public --description "Sitio web premium para NTG INNOVA"
```

---

## ✅ Paso 2: Conectar y Subir Código

**Ya hemos hecho el commit local, ahora solo falta conectar con GitHub:**

### Ejecuta estos comandos en PowerShell:

```powershell
cd C:\Users\Luis888\Desktop\proyecto-raul

# Reemplaza TU_USUARIO con tu usuario de GitHub
git remote add origin https://github.com/TU_USUARIO/ntginnova-website.git

# Cambiar a branch main
git branch -M main

# Subir código
git push -u origin main
```

---

## 🔐 Si GitHub te pide autenticación:

### Opción 1: Usar GitHub CLI (más fácil)
```bash
# Instalar GitHub CLI
winget install GitHub.cli

# Autenticarse
gh auth login

# Luego hacer push
git push -u origin main
```

### Opción 2: Personal Access Token
1. Ve a: **https://github.com/settings/tokens**
2. Click **Generate new token (classic)**
3. Nombre: `proyecto-raul`
4. Selecciona permisos: `repo`
5. Click **Generate token**
6. Copia el token (solo se muestra una vez)
7. Cuando hagas `git push`, usa el token como contraseña

### Opción 3: GitHub Desktop (GUI)
1. Descarga: **https://desktop.github.com/**
2. Instala y conecta tu cuenta
3. Abre el proyecto desde GitHub Desktop
4. Click **Publish repository**

---

## ✅ Paso 3: Verificar que se subió

1. Ve a: `https://github.com/TU_USUARIO/ntginnova-website`
2. Deberías ver todos tus archivos
3. ¡Listo! Puedes compartir este link

---

## 📝 Comandos Rápidos (Copia y Pega)

```powershell
# Ir al proyecto
cd C:\Users\Luis888\Desktop\proyecto-raul

# Reemplaza TU_USUARIO con tu usuario real
git remote add origin https://github.com/TU_USUARIO/ntginnova-website.git

# Cambiar a main
git branch -M main

# Subir
git push -u origin main
```

---

## 🆘 Problemas Comunes

### Error: "remote origin already exists"
```powershell
git remote remove origin
git remote add origin https://github.com/TU_USUARIO/ntginnova-website.git
```

### Error: "authentication failed"
- Usa Personal Access Token en lugar de contraseña
- O instala GitHub CLI: `winget install GitHub.cli`

### Error: "repository not found"
- Verifica que el repositorio existe en GitHub
- Verifica que el nombre del usuario es correcto
- Verifica que tienes permisos en el repositorio

---

## 🎯 Siguiente Paso: Deploy

Una vez subido a GitHub, puedes hacer deploy automático:

### Vercel (Recomendado)
1. Ve a: **https://vercel.com/**
2. Importa tu repositorio de GitHub
3. Deploy automático en 2 minutos

### Netlify
1. Ve a: **https://netlify.com/**
2. Conecta con GitHub
3. Selecciona el repositorio
4. Deploy automático

---

## ✅ Estado Actual

- ✅ Git inicializado
- ✅ Archivos agregados
- ✅ Commit creado
- ⏳ Falta: Crear repo en GitHub y hacer push

¡Sigue los pasos de arriba para completar!

