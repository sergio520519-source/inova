# 🚀 Deploy en Vercel - Instrucciones Paso a Paso

## ✅ Estás en Vercel - Sigue estos pasos:

### PASO 1: Importar el Repositorio
1. En la columna derecha, busca la opción **"Import Project"**
   - Tiene un icono de "+" en un círculo
   - Descripción: "Add a repo from your git provider"
   - Click en el botón **"Import"** (a la derecha)

### PASO 2: Conectar con GitHub
1. Te pedirá autenticarte con GitHub
2. Click en **"Continue with GitHub"** o **"Sign in with GitHub"**
3. Autoriza Vercel para acceder a tus repositorios

### PASO 3: Seleccionar el Repositorio
1. Busca en la lista: **"sergio520519-source/inova"**
2. Click en el repositorio para seleccionarlo
3. Click en **"Import"**

### PASO 4: Configuración (Automática)
Vercel detectará automáticamente:
- ✅ **Framework Preset:** Vite (detectado)
- ✅ **Build Command:** `npm run build` (automático)
- ✅ **Output Directory:** `dist` (automático)
- ✅ **Install Command:** `npm install` (automático)

**NO CAMBIES NADA**, solo verifica que todo esté bien.

### PASO 5: Deploy
1. Click en el botón **"Deploy"** (botón negro grande)
2. Espera 2-3 minutos mientras construye y despliega
3. ✅ **¡Listo!** Obtendrás una URL pública tipo:
   ```
   https://inova-xxxxx.vercel.app
   ```

---

## 🎯 Resumen Rápido:

1. **Click "Import Project"** → Botón "Import"
2. **Conecta con GitHub** → Autoriza Vercel
3. **Selecciona:** `sergio520519-source/inova`
4. **Click "Deploy"** (deja todo automático)
5. **Espera 2-3 minutos**
6. **¡Obtén tu URL pública!**

---

## ✅ Una vez deployado:

- ✅ Tu sitio estará disponible públicamente
- ✅ Cualquiera en Colombia podrá verlo
- ✅ URL tipo: `https://inova-xxxxx.vercel.app`
- ✅ Deploy automático en cada push a GitHub

---

## 🔄 Si tienes problemas:

### Si no aparece el repositorio:
1. Verifica que esté en: https://github.com/sergio520519-source/inova
2. Verifica que Vercel tenga acceso a GitHub
3. Recarga la página

### Si el deploy falla:
1. Verifica que `package.json` esté correcto
2. Verifica que `vite.config.ts` esté correcto
3. Revisa los logs de error en Vercel

---

## 💡 Nota:

La URL será pública y podrás compartirla con cualquiera en Colombia o el mundo.

