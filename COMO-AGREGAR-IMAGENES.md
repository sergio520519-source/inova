# 📸 Cómo Agregar las Imágenes del Catálogo desde Google Drive

## ✅ Estructura Preparada

He preparado el código para que funcione con imágenes locales. Solo necesitas seguir estos pasos:

## 📁 Carpeta Creada

La carpeta `public/productos/` ya está creada y lista para recibir las imágenes.

## 🖼️ Nombres de Archivo Necesarios

Descarga las imágenes del Google Drive y renómbralas exactamente así:

1. `GRV15-EP.jpg` (o .png)
2. `GZO75-EPS.jpg`
3. `GZO10-D.jpg`
4. `GHBZO3-E.jpg`
5. `HIDRO-VT-GZO75-EPS.jpg`
6. `HIDRO-VT-GZO40-EPS.jpg`
7. `HIDRO-VT-84-522.jpg`
8. `HIDRO-V-84-315.jpg`
9. `GRZO120-EPSF.jpg`
10. `GR3000-EP.jpg`
11. `HIDRO-VT-GZO40-ES.jpg`
12. `G10-D.jpg`

## 📋 Pasos Detallados

### Paso 1: Descargar desde Google Drive

1. Abre el enlace: https://drive.google.com/drive/folders/1SvjKER6IEU_3FiNDsMoJuO937InPtWl8?usp=drive_link
2. Selecciona todas las imágenes de los productos
3. Click derecho > "Descargar" o usa Ctrl+S
4. Espera a que se descarguen

### Paso 2: Renombrar las Imágenes

1. Ve a tu carpeta de Descargas
2. Para cada imagen, identifica qué producto es (por el nombre visible en la imagen o por la información)
3. Renombra según la lista de nombres arriba

### Paso 3: Copiar a la Carpeta del Proyecto

1. Abre: `C:\Users\Luis888\Desktop\proyecto-raul\public\productos\`
2. Copia todas las imágenes renombradas a esta carpeta
3. ¡Listo! Las imágenes se verán automáticamente en el catálogo

## 🔄 Alternativa: Usar Enlaces Directos de Google Drive

Si prefieres mantener las imágenes en Google Drive, necesito que:

1. **Compartas cada imagen** como "Cualquiera con el enlace puede ver"
2. **Obtengas el ID** de cada imagen (está en la URL de Google Drive)
3. **Compárteme los enlaces** y actualizaré el código con los enlaces directos

### Formato de Enlace de Google Drive:
```
https://drive.google.com/uc?export=view&id=ID_DE_LA_IMAGEN
```

## 📝 Actualizar Información de Productos

Si en el Google Drive también hay información detallada (especificaciones, descripciones, etc.), puedes:

1. **Copia la información** de cada producto
2. **Compárteme la información** y actualizaré el archivo `src/data/productos.ts`

O si prefieres, puedes editar directamente el archivo `src/data/productos.ts` con la información correcta.

## ✅ Verificar que Funciona

Una vez que coloques las imágenes:

1. Inicia el servidor de desarrollo: `npm run dev`
2. Ve a la página del catálogo
3. Deberías ver las imágenes locales en lugar de los placeholders

## 🆘 Si las Imágenes No Se Ven

- Verifica que los nombres sean exactamente iguales (sin espacios extras)
- Verifica que las imágenes estén en `public/productos/`
- Verifica que los archivos tengan extensión `.jpg` o `.png`
- Revisa la consola del navegador (F12) para ver errores

---

**¿Necesitas ayuda?** Cuando tengas las imágenes listas o los enlaces, avísame y actualizaré todo automáticamente.

