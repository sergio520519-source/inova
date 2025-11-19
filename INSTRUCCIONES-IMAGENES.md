# 📸 Instrucciones para Agregar Imágenes del Catálogo

## 📁 Ubicación de las Imágenes

Las imágenes deben colocarse en la carpeta:
```
public/productos/
```

## 🖼️ Nombres de Archivos

Nombra las imágenes con los nombres de los productos para que se vinculen automáticamente:

1. **GRV15-EP.jpg** (o .png)
2. **GZO75-EPS.jpg**
3. **GZO10-D.jpg**
4. **GHBZO3-E.jpg**
5. **HIDRO-VT-GZO75-EPS.jpg**
6. **HIDRO-VT-GZO40-EPS.jpg**
7. **HIDRO-VT-84-522.jpg**
8. **HIDRO-V-84-315.jpg**
9. **GRZO120-EPSF.jpg**
10. **GR3000-EP.jpg**
11. **HIDRO-VT-GZO40-ES.jpg**
12. **G10-D.jpg**

## 📋 Pasos para Agregar las Imágenes

### Opción 1: Descargar desde Google Drive
1. Abre el enlace de Google Drive
2. Descarga todas las imágenes de los productos
3. Renombra cada imagen según el nombre del producto (ver lista arriba)
4. Copia las imágenes a la carpeta `public/productos/`

### Opción 2: Compartir Enlaces Públicos
Si las imágenes están en Google Drive como enlaces públicos, puedes:
1. Obtener el enlace directo de cada imagen (hacer clic derecho > "Obtener enlace")
2. Usar esos enlaces directamente en el código (actualizaré el archivo `src/data/productos.ts`)

## 📝 Actualizar Información

Si necesitas actualizar la información de los productos (especificaciones, descripciones, etc.), edita el archivo:
```
src/data/productos.ts
```

## ✅ Formato de Imagen Recomendado

- **Formato**: JPG o PNG
- **Tamaño**: Máximo 2000px de ancho (optimizado para web)
- **Peso**: Menor a 500KB por imagen (para carga rápida)
- **Resolución**: Mínimo 800px de ancho para buena calidad

## 🔗 Si Usas Enlaces de Google Drive

Si quieres usar enlaces directos de Google Drive, necesito que:
1. Compartas cada imagen como "Cualquiera con el enlace puede ver"
2. Obtengas el ID de cada imagen de Google Drive
3. El formato del enlace será: `https://drive.google.com/uc?export=view&id=ID_DE_LA_IMAGEN`

## 📞 Una Vez que Tengas las Imágenes

Una vez que coloques las imágenes en `public/productos/`, automáticamente se verán en el catálogo. El código ya está preparado para usar:
- Imágenes locales: `/productos/NOMBRE-IMAGEN.jpg`
- O mantener los enlaces actuales si prefieres

¡Avísame cuando tengas las imágenes listas y actualizaré el catálogo!

