// Utilidad para obtener la ruta de imagen del producto
// Prioriza imágenes locales, si no existen usa placeholder

export function getProductImage(productName: string, fallbackImage?: string): string {
  // Nombres de archivo normalizados (sin espacios, sin caracteres especiales problemáticos)
  const imageNameMap: Record<string, string> = {
    'GRV15-EP': 'GRV15-EP',
    'GZO75-EPS': 'GZO75-EPS',
    'GZO10-D': 'GZO10-D',
    'GHBZO3-E': 'GHBZO3-E',
    'HIDRO VT GZO75-EPS': 'HIDRO-VT-GZO75-EPS',
    'HIDRO VT GZO40-EPS': 'HIDRO-VT-GZO40-EPS',
    'HIDRO VT 84.522': 'HIDRO-VT-84-522',
    'HIDRO V 84.315': 'HIDRO-V-84-315',
    'GRZO120-EPSF': 'GRZO120-EPSF',
    'GR3000-EP': 'GR3000-EP',
    'HIDRO VT GZO40-ES': 'HIDRO-VT-GZO40-ES',
    'G10-D': 'G10-D',
  }

  const imageName = imageNameMap[productName] || productName.replace(/\s+/g, '-').replace(/\./g, '-')
  
  // Intenta usar imagen local primero
  const localImagePath = `/productos/${imageName}.jpg`
  
  // Retorna la ruta local - el componente manejará el fallback si la imagen no existe
  return localImagePath
}

// Lista de nombres de imágenes esperadas para referencia
export const expectedImageNames = [
  'GRV15-EP.jpg',
  'GZO75-EPS.jpg',
  'GZO10-D.jpg',
  'GHBZO3-E.jpg',
  'HIDRO-VT-GZO75-EPS.jpg',
  'HIDRO-VT-GZO40-EPS.jpg',
  'HIDRO-VT-84-522.jpg',
  'HIDRO-V-84-315.jpg',
  'GRZO120-EPSF.jpg',
  'GR3000-EP.jpg',
  'HIDRO-VT-GZO40-ES.jpg',
  'G10-D.jpg',
]

