// Utilidad para obtener la ruta de imagen del producto
// Mapea nombres de productos a nombres de archivo de imagen en public/

export function getProductImage(productName: string, fallbackImage?: string): string {
  // Mapeo de nombres de productos a nombres de archivo de imagen exactos
  // Las imágenes están en public/ con nombres completos
  const imageNameMap: Record<string, string> = {
    'GRV15-EP': 'GRV15-EP Generador de Ozono Industrial.jpeg',
    'GZO75-EPS': 'GZO75-EPS Generador de Ozono Profesional. V4(1).jpeg',
    'GZO10-D': 'GZO10-D Generador de Ozono Profesional. V1(1).png',
    'GHBZO3-E': 'GHBZO3-E Generador de Ozono Comercial. V2.jpeg',
    'HIDRO VT GZO75-EPS': 'HIDRO VT GZO75-EPS Planta de Ozono Profesional. V2.png',
    'HIDRO VT GZO40-EPS': 'HIDRO VT GZO40-EPS Planta de Ozono Profesional. V2.png',
    'HIDRO VT 84.522': 'HIDRO VT 84.522 Planta de recirculación para diluir ozono. V2.jpeg',
    'HIDRO V 84.315': 'HIDRO V 84.315 Planta de recirculación para diluir ozono. V2 (PENDIENTE).png',
    'GRZO120-EPSF': 'Generador de Ozono Industrial GRZO120-EPSF. V5.png',
    'GR3000-EP': 'GR3000-EP Generador de Ozono Industrial. V4.png',
    'HIDRO VT GZO40-ES': 'HIDRO VT GZO40-ES Planta de Ozono Profesional.jpeg',
    'G10-D': 'G10-D Generador de Ozono Profesional. V1(1).jpeg',
    'GR5000-EP': 'GR5000-EP Generador de Ozono Industrial. V4.png',
    'GR1000-EP-TONELLO': 'GR1000-EP-TONELLO Generador de Ozono Industrial, 1 virola. V5.png',
    'GRZO200-EPSF': 'GRZO200-EPSF Generador de Ozono Industrial. V4.png',
    'HIDRO V GZO12-EPS': 'HIDRO V GZO12-EPS Planta de Ozono Profesional. V2.jpeg',
    'HIDRO V GZO20-EPS': 'HIDRO V GZO20-EPS Planta de Ozono Profesional. V2.png',
    'HIDRO V GZO40-EPS': 'HIDRO V GZO40-EPS Planta de Ozono Profesional. V2.png',
    'HIDRO V GRZO120-EPSF': 'HIDRO V GRZO120-EPSF Planta de Ozono Industrial. V3.png',
    'HIDRO VT GZO20-EPS': 'HIDRO VT GZO20-EPS Planta de Ozono Profesional. V2.png',
    'HIDRO VT GRZO120-EPSF': 'HIDRO VT GRZO120-EPSF Planta de Ozono Industrial. V3.png',
    'HIDRO V 84.90': 'HIDRO V 84.90 Planta de recirculación para diluir ozono. V2.jpeg',
    'HIDRO V 84.522': 'HIDRO V 84.522 Planta de recirculación para diluir ozono. V2(1).png',
    'HIDRO V 84.530': 'HIDRO V 84.530 Planta de recirculación para diluir ozono. V2(1).jpeg',
    'HIDRO VT 84.90': 'HIDRO VT 84.90 Planta de recirculación para diluir ozono. V2.png',
    'HIDRO VT 84.530': 'HIDRO VT 84.530 Planta de recirculación para diluir ozono. V2.png',
    'GZO12-EPS': 'GZO12-EPS Generador de Ozono Profesional. V4.jpeg',
    'GZO20-D': 'GZO20-D Generador de Ozono Profesional. V1.jpeg',
    'GZO20-EPS': 'GZO20-EPS Generador de Ozono Profesional. V4(1).jpeg',
    'GZO40-D': 'GZO40-D Generador de Ozono Profesional para atomizador. V1(1).jpeg',
    'G12-E': 'G12-E Generador de Ozono Profesional. V1(1).png',
    'G20-E': 'G20-E Generador de Ozono Profesional. V1.png',
    'G40-D': 'G40-D Generador de Ozono Profesional. V1.jpeg',
    'G40-E': 'G40-E Generador de Ozono Profesional. V1.png',
    'G7-E': 'G7-E Generador de Ozono Profesional. V1.png',
    'GHBBZO10-E': 'GHBBZO10-E Generador de Ozono Profesional. V2.png',
    'GZ1-E': 'GZ1-E Generador de Ozono Comercial. V1.jpeg',
    'GZ3-E': 'GZ3-E Generador de Ozono Comercial. V1(1).jpeg',
    'GZ7-E': 'GZ7-E Generador de Ozono Comercial. V1.jpeg',
    'GHBB7': 'GHBB7 Generador de Ozono Comercial. V1.jpeg',
    'GX500-LB': 'GX500-LB Generador de Ozono Comercial.jpeg',
    'CRTL.PANEL OZONO DISUELTO 20 PPM': 'CRTL.PANEL OZONO DISUELTO 20 PPM. AMPERIMÉTRICO. V1.png',
    'PSA-O-15K': 'PSA-O-15K. Generador de oxígeno sin compresor.jpeg',
    // Productos portátiles (usar fallback por ahora)
    'OZONE-PORT-1': 'products/factory-hero.jpg',
    'OZONE-PORT-5': 'products/factory-hero.jpg',
  }

  const imageFileName = imageNameMap[productName]
  
  if (imageFileName) {
    // Si la imagen ya tiene una ruta completa o es una URL, la usa directamente
    if (imageFileName.startsWith('/') || imageFileName.startsWith('http')) {
      return imageFileName
    }
    
    // Para archivos en public/, Vite los sirve desde la raíz
    // Los espacios y caracteres especiales se manejan automáticamente por el navegador
    return `/${imageFileName}`
  }
  
  // Si no hay mapeo, usa el fallback
  if (fallbackImage) {
    return fallbackImage
  }
  // Intentar diferentes rutas posibles para la imagen por defecto
  return '/products/factory-hero.jpg'
}
