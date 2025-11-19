# 📋 Cómo Actualizar Información de Productos

## 📄 Archivo Principal

Toda la información de los productos está en:
```
src/data/productos.ts
```

## 📝 Información Actualizable

Para cada producto puedes actualizar:

1. **`description`** - Descripción del producto
2. **`specs`** - Especificaciones técnicas:
   - `capacidad` - Capacidad de generación (ej: "15 g/h")
   - `potencia` - Potencia en watts (ej: "500W")
   - `dimensiones` - Dimensiones (ej: "600 x 400 x 800 mm")
   - `peso` - Peso del equipo (ej: "45 kg")
   - `consumo` - Consumo energético
   - `aplicaciones` - Array de aplicaciones
3. **`beneficios`** - Array de beneficios principales
4. **`aplicaciones`** - Array de aplicaciones específicas
5. **`certificaciones`** - Array de certificaciones

## 🔄 Si Tienes la Información del Google Drive

Si en el Google Drive hay información más detallada (especificaciones reales, descripciones exactas, etc.):

1. **Opción A:** Cópiala y compártemela aquí, y actualizaré el archivo automáticamente
2. **Opción B:** Edita directamente `src/data/productos.ts` con la información correcta

## 📸 Actualizar Imágenes

Las imágenes se actualizan automáticamente cuando las coloques en:
```
public/productos/
```

Solo necesitas renombrarlas según los nombres especificados en `COMO-AGREGAR-IMAGENES.md`

## ✨ Estructura del Producto

Cada producto tiene esta estructura:

```typescript
{
  id: 1,
  name: 'GRV15-EP',                    // Nombre del modelo
  title: 'Generador de Ozono Industrial', // Título descriptivo
  category: 'Industrial',               // Categoría
  description: 'Descripción detallada...',
  image: '/productos/GRV15-EP.jpg',     // Ruta de imagen
  specs: {
    capacidad: '15 g/h',
    potencia: '500W',
    dimensiones: '600 x 400 x 800 mm',
    peso: '45 kg',
    consumo: 'Bajo consumo energético',
    aplicaciones: ['Aplicación 1', 'Aplicación 2']
  },
  beneficios: [
    'Beneficio 1',
    'Beneficio 2'
  ],
  aplicaciones: [
    'Aplicación específica 1',
    'Aplicación específica 2'
  ],
  certificaciones: ['CE', 'ISO 9001']
}
```

---

**¿Listo para actualizar?** Solo necesitas proporcionar la información y actualizaré todo automáticamente.

