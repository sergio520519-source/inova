// Información detallada de productos con imágenes de alta calidad
import { getProductImage } from '../utils/imageUtils'

export interface Producto {
  id: number
  name: string
  title: string
  category: 'Industriales' | 'Plantas Hidro' | 'Profesionales' | 'Comerciales' | 'Portátiles' | 'Accesorios'
  description: string
  image: string
  fallbackImage?: string
  specs: {
    capacidad?: string
    potencia?: string
    dimensiones?: string
    peso?: string
    consumo?: string
    aplicaciones?: string[]
  }
  beneficios: string[]
  aplicaciones: string[]
  certificaciones?: string[]
}

export const productos: Producto[] = [
  {
    id: 1,
    name: 'GRV15-EP',
    title: 'Generador de Ozono Industrial',
    category: 'Industriales',
    description: 'Generador de ozono industrial de alta capacidad diseñado para tratamiento de aguas residuales, potables y de proceso industrial. Tecnología europea certificada con máxima eficiencia energética.',
    image: getProductImage('GRV15-EP', 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=90&auto=format&fit=crop'),
    fallbackImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=90&auto=format&fit=crop',
    specs: {
      capacidad: '15 g/h',
      potencia: '500W',
      dimensiones: '600 x 400 x 800 mm',
      peso: '45 kg',
      consumo: 'Bajo consumo energético',
      aplicaciones: ['Tratamiento aguas residuales', 'Procesos industriales', 'Desinfección a gran escala']
    },
    beneficios: [
      'Eliminación del 99.9% de microorganismos',
      'Reducción del 30% en consumo energético',
      'Sin residuos químicos',
      'Control automático y monitoreo en tiempo real'
    ],
    aplicaciones: [
      'Plantas de tratamiento de aguas residuales',
      'Industria alimentaria',
      'Piscinas y spa industriales',
      'Hospitals y centros de salud',
      'Industria farmacéutica'
    ],
    certificaciones: ['CE', 'ISO 9001', 'Certificado Europeo']
  },
  {
    id: 2,
    name: 'GZO75-EPS',
    title: 'Generador de Ozono Profesional V4',
    category: 'Profesionales',
    description: 'Generador de ozono profesional de última generación (V4) con tecnología avanzada para aplicaciones profesionales. Diseño compacto con máximo rendimiento y control inteligente.',
    image: getProductImage('GZO75-EPS', 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=90&auto=format&fit=crop'),
    fallbackImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=90&auto=format&fit=crop',
    specs: {
      capacidad: '75 g/h',
      potencia: '800W',
      dimensiones: '500 x 350 x 700 mm',
      peso: '35 kg',
      consumo: 'Optimizado para eficiencia energética',
      aplicaciones: ['Hoteles y resorts', 'Centros comerciales', 'Oficinas corporativas']
    },
    beneficios: [
      'Tecnología V4 de última generación',
      'Control remoto y monitoreo IoT',
      'Diseño silencioso y compacto',
      'Mantenimiento mínimo'
    ],
    aplicaciones: [
      'Hoteles y establecimientos turísticos',
      'Centros comerciales y retail',
      'Oficinas corporativas',
      'Gimnasios y centros deportivos',
      'Salones de belleza y spa'
    ],
    certificaciones: ['CE', 'ISO 14001', 'Certificado Profesional']
  },
  {
    id: 3,
    name: 'GZO10-D',
    title: 'Generador de Ozono Profesional V1',
    category: 'Profesionales',
    description: 'Versión compacta y eficiente para espacios reducidos. Perfecto para aplicaciones profesionales de mediana escala con excelente relación calidad-precio.',
    image: getProductImage('GZO10-D', 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=1200&q=90&auto=format&fit=crop'),
    fallbackImage: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=1200&q=90&auto=format&fit=crop',
    specs: {
      capacidad: '10 g/h',
      potencia: '250W',
      dimensiones: '400 x 300 x 600 mm',
      peso: '22 kg',
      consumo: 'Muy bajo consumo',
      aplicaciones: ['Espacios comerciales medianos', 'Restaurantes', 'Clínicas']
    },
    beneficios: [
      'Tamaño compacto ideal para espacios reducidos',
      'Excelente rendimiento',
      'Fácil instalación y mantenimiento',
      'Precio competitivo'
    ],
    aplicaciones: [
      'Restaurantes y cocinas comerciales',
      'Clínicas dentales',
      'Oficinas medianas',
      'Salones comerciales',
      'Comercios y tiendas'
    ],
    certificaciones: ['CE', 'Certificado Profesional']
  },
  {
    id: 4,
    name: 'GHBZO3-E',
    title: 'Generador de Ozono Comercial V2',
    category: 'Comerciales',
    description: 'Ideal para establecimientos comerciales y pequeños negocios. Solución económica y eficaz para purificación de aire y agua en espacios comerciales.',
    image: getProductImage('GHBZO3-E', 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=90&auto=format&fit=crop'),
    fallbackImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=90&auto=format&fit=crop',
    specs: {
      capacidad: '3 g/h',
      potencia: '120W',
      dimensiones: '350 x 250 x 500 mm',
      peso: '15 kg',
      consumo: 'Ultra bajo consumo',
      aplicaciones: ['Pequeños negocios', 'Oficinas pequeñas', 'Hogares']
    },
    beneficios: [
      'Precio accesible',
      'Consumo energético mínimo',
      'Fácil de usar',
      'Mantenimiento sencillo'
    ],
    aplicaciones: [
      'Pequeños comercios',
      'Oficinas pequeñas',
      'Consultorios médicos',
      'Salones de belleza',
      'Viviendas residenciales'
    ],
    certificaciones: ['CE']
  },
  {
    id: 5,
    name: 'HIDRO VT GZO75-EPS',
    title: 'Planta de Ozono Profesional V2',
    category: 'Plantas Hidro',
    description: 'Planta completa de tratamiento de ozono para aplicaciones profesionales. Sistema integrado con todos los componentes necesarios para tratamiento profesional de aguas.',
    image: getProductImage('HIDRO VT GZO75-EPS', 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1200&q=90&auto=format&fit=crop'),
    fallbackImage: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1200&q=90&auto=format&fit=crop',
    specs: {
      capacidad: '75 g/h (planta completa)',
      potencia: '1000W',
      dimensiones: '1200 x 800 x 1800 mm',
      peso: '180 kg',
      consumo: 'Optimizado para plantas',
      aplicaciones: ['Plantas de tratamiento', 'Sistemas centralizados', 'Proyectos profesionales']
    },
    beneficios: [
      'Sistema completo e integrado',
      'Alta capacidad de tratamiento',
      'Control centralizado',
      'Diseño modular'
    ],
    aplicaciones: [
      'Plantas de tratamiento de agua',
      'Sistemas centralizados de hoteles',
      'Centros comerciales',
      'Edificios corporativos',
      'Complejos residenciales'
    ],
    certificaciones: ['CE', 'ISO 9001', 'Certificado Profesional']
  },
  {
    id: 6,
    name: 'HIDRO VT GZO40-EPS',
    title: 'Planta de Ozono Profesional V2',
    category: 'Plantas Hidro',
    description: 'Planta de ozono profesional de mediana capacidad. Solución ideal para proyectos profesionales que requieren tratamiento eficiente y confiable.',
    image: getProductImage('HIDRO VT GZO40-EPS', 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1200&q=90&auto=format&fit=crop'),
    fallbackImage: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1200&q=90&auto=format&fit=crop',
    specs: {
      capacidad: '40 g/h',
      potencia: '600W',
      dimensiones: '1000 x 700 x 1600 mm',
      peso: '120 kg',
      consumo: 'Eficiente para mediana escala',
      aplicaciones: ['Hoteles medianos', 'Centros comerciales', 'Complejos']
    },
    beneficios: [
      'Capacidad optimizada',
      'Diseño compacto',
      'Fácil operación',
      'Mantenimiento programado'
    ],
    aplicaciones: [
      'Hoteles y moteles',
      'Centros comerciales medianos',
      'Complejos deportivos',
      'Edificios de oficinas',
      'Centros educativos'
    ],
    certificaciones: ['CE', 'Certificado Profesional']
  },
  {
    id: 7,
    name: 'HIDRO VT 84.522',
    title: 'Planta de Recirculación para Diluir Ozono V2',
    category: 'Plantas Hidro',
    description: 'Sistema de recirculación avanzado para dilución controlada de ozono. Ideal para aplicaciones industriales que requieren control preciso de concentración.',
    image: getProductImage('HIDRO VT 84.522', 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1200&q=90&auto=format&fit=crop'),
    fallbackImage: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1200&q=90&auto=format&fit=crop',
    specs: {
      capacidad: 'Dilución controlada',
      potencia: '400W',
      dimensiones: '800 x 600 x 1400 mm',
      peso: '95 kg',
      consumo: 'Bajo consumo',
      aplicaciones: ['Control de concentración', 'Seguridad industrial', 'Procesos especializados']
    },
    beneficios: [
      'Control preciso de concentración',
      'Seguridad mejorada',
      'Recirculación eficiente',
      'Monitoreo continuo'
    ],
    aplicaciones: [
      'Industria química',
      'Procesos especializados',
      'Aplicaciones que requieren control preciso',
      'Sistemas de seguridad',
      'Plantas industriales'
    ],
    certificaciones: ['CE', 'ISO 9001', 'Seguridad Industrial']
  },
  {
    id: 8,
    name: 'HIDRO V 84.315',
    title: 'Planta de Recirculación para Diluir Ozono V2',
    category: 'Plantas Hidro',
    description: 'Planta de recirculación de alta eficiencia para dilución de ozono en aplicaciones industriales. Diseñada para máxima seguridad y eficiencia operativa.',
    image: getProductImage('HIDRO V 84.315', 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1200&q=90&auto=format&fit=crop'),
    fallbackImage: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1200&q=90&auto=format&fit=crop',
    specs: {
      capacidad: 'Alta eficiencia de dilución',
      potencia: '350W',
      dimensiones: '700 x 550 x 1300 mm',
      peso: '80 kg',
      consumo: 'Muy eficiente',
      aplicaciones: ['Recirculación industrial', 'Seguridad', 'Eficiencia operativa']
    },
    beneficios: [
      'Alta eficiencia energética',
      'Diseño robusto industrial',
      'Control avanzado',
      'Mantenimiento reducido'
    ],
    aplicaciones: [
      'Plantas industriales',
      'Sistemas de tratamiento avanzado',
      'Aplicaciones de seguridad',
      'Procesos continuos',
      'Instalaciones de gran escala'
    ],
    certificaciones: ['CE', 'ISO 9001']
  },
  {
    id: 9,
    name: 'GRZO120-EPSF',
    title: 'Generador de Ozono Industrial V5',
    category: 'Industriales',
    description: 'Generador de ozono industrial de máxima capacidad (V5). La solución más potente para grandes instalaciones industriales que requieren tratamiento a gran escala.',
    image: getProductImage('GRZO120-EPSF', 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=90&auto=format&fit=crop'),
    fallbackImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=90&auto=format&fit=crop',
    specs: {
      capacidad: '120 g/h',
      potencia: '1500W',
      dimensiones: '800 x 600 x 1200 mm',
      peso: '95 kg',
      consumo: 'Optimizado para máxima capacidad',
      aplicaciones: ['Plantas industriales grandes', 'Tratamiento masivo', 'Sistemas centralizados']
    },
    beneficios: [
      'Máxima capacidad del mercado',
      'Tecnología V5 avanzada',
      'Eficiencia energética optimizada',
      'Control y monitoreo avanzado'
    ],
    aplicaciones: [
      'Plantas industriales de gran escala',
      'Sistemas municipales de tratamiento',
      'Complejos industriales',
      'Plantas de producción masiva',
      'Infraestructura crítica'
    ],
    certificaciones: ['CE', 'ISO 9001', 'ISO 14001', 'Certificado Industrial V5']
  },
  {
    id: 10,
    name: 'GR3000-EP',
    title: 'Generador de Ozono Industrial V4',
    category: 'Industriales',
    description: 'Generador de ozono industrial de gran escala para plantas industriales. Solución robusta y confiable para aplicaciones industriales exigentes.',
    image: getProductImage('GR3000-EP', 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=90&auto=format&fit=crop'),
    fallbackImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=90&auto=format&fit=crop',
    specs: {
      capacidad: '3000 g/h',
      potencia: '5000W',
      dimensiones: '1500 x 1000 x 2000 mm',
      peso: '450 kg',
      consumo: 'Optimizado para gran escala',
      aplicaciones: ['Plantas industriales masivas', 'Sistemas municipales', 'Infraestructura grande']
    },
    beneficios: [
      'Capacidad industrial masiva',
      'Diseño robusto y duradero',
      'Alta confiabilidad',
      'Control industrial avanzado'
    ],
    aplicaciones: [
      'Plantas de tratamiento municipales',
      'Complejos industriales masivos',
      'Infraestructura pública',
      'Plantas de producción a gran escala',
      'Sistemas de tratamiento críticos'
    ],
    certificaciones: ['CE', 'ISO 9001', 'ISO 14001', 'Certificado Industrial']
  },
  {
    id: 11,
    name: 'HIDRO VT GZO40-ES',
    title: 'Planta de Ozono Profesional',
    category: 'Plantas Hidro',
    description: 'Planta de ozono profesional versión estándar. Solución equilibrada entre capacidad y costo para aplicaciones profesionales diversas.',
    image: getProductImage('HIDRO VT GZO40-ES', 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1200&q=90&auto=format&fit=crop'),
    fallbackImage: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1200&q=90&auto=format&fit=crop',
    specs: {
      capacidad: '40 g/h',
      potencia: '600W',
      dimensiones: '900 x 650 x 1500 mm',
      peso: '110 kg',
      consumo: 'Eficiente estándar',
      aplicaciones: ['Aplicaciones profesionales estándar', 'Hoteles', 'Centros']
    },
    beneficios: [
      'Rendimiento equilibrado',
      'Precio competitivo',
      'Fácil instalación',
      'Mantenimiento estándar'
    ],
    aplicaciones: [
      'Hoteles y hospedajes',
      'Centros comerciales',
      'Edificios comerciales',
      'Centros médicos',
      'Instalaciones deportivas'
    ],
    certificaciones: ['CE', 'Certificado Profesional']
  },
  {
    id: 12,
    name: 'G10-D',
    title: 'Generador de Ozono Profesional V1',
    category: 'Profesionales',
    description: 'Generador profesional de entrada con tecnología certificada europea. Ideal para proyectos profesionales que inician con tratamiento de ozono.',
    image: getProductImage('G10-D', 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=1200&q=90&auto=format&fit=crop'),
    fallbackImage: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=1200&q=90&auto=format&fit=crop',
    specs: {
      capacidad: '10 g/h',
      potencia: '250W',
      dimensiones: '400 x 300 x 600 mm',
      peso: '22 kg',
      consumo: 'Muy eficiente',
      aplicaciones: ['Inicio profesional', 'Pequeñas instalaciones', 'Pruebas']
    },
    beneficios: [
      'Punto de entrada profesional',
      'Tecnología certificada',
      'Precio accesible',
      'Fácil implementación'
    ],
    aplicaciones: [
      'Proyectos profesionales iniciales',
      'Pequeñas instalaciones comerciales',
      'Pruebas y pilotos',
      'Oficinas pequeñas',
      'Consultorios'
    ],
    certificaciones: ['CE', 'Certificado Profesional']
  },
  // Más productos Industriales
  {
    id: 13,
    name: 'GR5000-EP',
    title: 'Generador de Ozono Industrial V4',
    category: 'Industriales',
    description: 'Generador de ozono industrial de ultra alta capacidad para plantas industriales masivas. Solución robusta para infraestructura crítica.',
    image: getProductImage('GR5000-EP', 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=90&auto=format&fit=crop'),
    fallbackImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=90&auto=format&fit=crop',
    specs: {
      capacidad: '5000 g/h',
      potencia: '8000W',
      dimensiones: '2000 x 1200 x 2500 mm',
      peso: '850 kg',
      consumo: 'Optimizado para ultra gran escala',
      aplicaciones: ['Plantas industriales masivas', 'Sistemas municipales grandes', 'Infraestructura crítica']
    },
    beneficios: [
      'Capacidad industrial ultra alta',
      'Diseño robusto y duradero',
      'Alta confiabilidad',
      'Control industrial avanzado'
    ],
    aplicaciones: [
      'Plantas de tratamiento municipales grandes',
      'Complejos industriales masivos',
      'Infraestructura pública crítica',
      'Plantas de producción ultra gran escala'
    ],
    certificaciones: ['CE', 'ISO 9001', 'ISO 14001', 'Certificado Industrial']
  },
  {
    id: 14,
    name: 'GR1000-EP-TONELLO',
    title: 'Generador de Ozono Industrial, 1 virola V5',
    category: 'Industriales',
    description: 'Generador de ozono industrial con diseño de virola única. Tecnología avanzada V5 para aplicaciones industriales especializadas.',
    image: getProductImage('GR1000-EP-TONELLO', 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=90&auto=format&fit=crop'),
    fallbackImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=90&auto=format&fit=crop',
    specs: {
      capacidad: '1000 g/h',
      potencia: '2500W',
      dimensiones: '1200 x 800 x 1800 mm',
      peso: '320 kg',
      consumo: 'Optimizado para alta capacidad',
      aplicaciones: ['Aplicaciones industriales especializadas', 'Procesos continuos', 'Sistemas centralizados']
    },
    beneficios: [
      'Diseño de virola única',
      'Tecnología V5 avanzada',
      'Alta eficiencia energética',
      'Control y monitoreo avanzado'
    ],
    aplicaciones: [
      'Plantas industriales especializadas',
      'Procesos continuos industriales',
      'Sistemas centralizados grandes',
      'Aplicaciones que requieren alta capacidad'
    ],
    certificaciones: ['CE', 'ISO 9001', 'Certificado Industrial V5']
  },
  {
    id: 15,
    name: 'GRZO200-EPSF',
    title: 'Generador de Ozono Industrial V4',
    category: 'Industriales',
    description: 'Generador de ozono industrial de muy alta capacidad. Solución ideal para grandes instalaciones industriales.',
    image: getProductImage('GRZO200-EPSF', 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=90&auto=format&fit=crop'),
    fallbackImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=90&auto=format&fit=crop',
    specs: {
      capacidad: '200 g/h',
      potencia: '2500W',
      dimensiones: '1000 x 700 x 1600 mm',
      peso: '180 kg',
      consumo: 'Optimizado para alta capacidad',
      aplicaciones: ['Plantas industriales grandes', 'Tratamiento masivo', 'Sistemas centralizados']
    },
    beneficios: [
      'Muy alta capacidad',
      'Tecnología V4 avanzada',
      'Eficiencia energética optimizada',
      'Control y monitoreo avanzado'
    ],
    aplicaciones: [
      'Plantas industriales de gran escala',
      'Sistemas municipales de tratamiento',
      'Complejos industriales',
      'Plantas de producción masiva'
    ],
    certificaciones: ['CE', 'ISO 9001', 'ISO 14001', 'Certificado Industrial']
  },
  // Más Plantas Hidro
  {
    id: 16,
    name: 'HIDRO V GZO12-EPS',
    title: 'Planta de Ozono Profesional V2',
    category: 'Plantas Hidro',
    description: 'Planta de ozono profesional compacta. Sistema integrado para aplicaciones profesionales de mediana escala.',
    image: getProductImage('HIDRO V GZO12-EPS', 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1200&q=90&auto=format&fit=crop'),
    fallbackImage: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1200&q=90&auto=format&fit=crop',
    specs: {
      capacidad: '12 g/h (planta completa)',
      potencia: '350W',
      dimensiones: '800 x 600 x 1400 mm',
      peso: '95 kg',
      consumo: 'Optimizado para plantas',
      aplicaciones: ['Plantas de tratamiento', 'Sistemas centralizados', 'Proyectos profesionales']
    },
    beneficios: [
      'Sistema completo e integrado',
      'Capacidad optimizada',
      'Control centralizado',
      'Diseño modular'
    ],
    aplicaciones: [
      'Plantas de tratamiento de agua',
      'Sistemas centralizados de hoteles',
      'Centros comerciales',
      'Edificios corporativos'
    ],
    certificaciones: ['CE', 'ISO 9001', 'Certificado Profesional']
  },
  {
    id: 17,
    name: 'HIDRO V GZO20-EPS',
    title: 'Planta de Ozono Profesional V2',
    category: 'Plantas Hidro',
    description: 'Planta de ozono profesional de mediana capacidad. Solución ideal para proyectos profesionales.',
    image: getProductImage('HIDRO V GZO20-EPS', 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1200&q=90&auto=format&fit=crop'),
    fallbackImage: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1200&q=90&auto=format&fit=crop',
    specs: {
      capacidad: '20 g/h',
      potencia: '450W',
      dimensiones: '900 x 650 x 1500 mm',
      peso: '110 kg',
      consumo: 'Eficiente para mediana escala',
      aplicaciones: ['Hoteles medianos', 'Centros comerciales', 'Complejos']
    },
    beneficios: [
      'Capacidad optimizada',
      'Diseño compacto',
      'Fácil operación',
      'Mantenimiento programado'
    ],
    aplicaciones: [
      'Hoteles y moteles',
      'Centros comerciales medianos',
      'Complejos deportivos',
      'Edificios de oficinas'
    ],
    certificaciones: ['CE', 'Certificado Profesional']
  },
  {
    id: 18,
    name: 'HIDRO V GZO40-EPS',
    title: 'Planta de Ozono Profesional V2',
    category: 'Plantas Hidro',
    description: 'Planta de ozono profesional de alta capacidad. Sistema integrado con todos los componentes necesarios.',
    image: getProductImage('HIDRO V GZO40-EPS', 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1200&q=90&auto=format&fit=crop'),
    fallbackImage: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1200&q=90&auto=format&fit=crop',
    specs: {
      capacidad: '40 g/h',
      potencia: '600W',
      dimensiones: '1000 x 700 x 1600 mm',
      peso: '120 kg',
      consumo: 'Optimizado para plantas',
      aplicaciones: ['Plantas de tratamiento', 'Sistemas centralizados', 'Proyectos profesionales']
    },
    beneficios: [
      'Sistema completo e integrado',
      'Alta capacidad de tratamiento',
      'Control centralizado',
      'Diseño modular'
    ],
    aplicaciones: [
      'Plantas de tratamiento de agua',
      'Sistemas centralizados de hoteles',
      'Centros comerciales',
      'Edificios corporativos'
    ],
    certificaciones: ['CE', 'ISO 9001', 'Certificado Profesional']
  },
  {
    id: 19,
    name: 'HIDRO V GRZO120-EPSF',
    title: 'Planta de Ozono Industrial V3',
    category: 'Plantas Hidro',
    description: 'Planta de ozono industrial de máxima capacidad. Sistema completo para grandes instalaciones industriales.',
    image: getProductImage('HIDRO V GRZO120-EPSF', 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1200&q=90&auto=format&fit=crop'),
    fallbackImage: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1200&q=90&auto=format&fit=crop',
    specs: {
      capacidad: '120 g/h (planta completa)',
      potencia: '1500W',
      dimensiones: '1400 x 900 x 2000 mm',
      peso: '220 kg',
      consumo: 'Optimizado para plantas industriales',
      aplicaciones: ['Plantas industriales', 'Sistemas centralizados grandes', 'Proyectos industriales']
    },
    beneficios: [
      'Sistema completo industrial',
      'Máxima capacidad',
      'Control centralizado avanzado',
      'Diseño modular robusto'
    ],
    aplicaciones: [
      'Plantas industriales de gran escala',
      'Sistemas municipales de tratamiento',
      'Complejos industriales',
      'Infraestructura crítica'
    ],
    certificaciones: ['CE', 'ISO 9001', 'ISO 14001', 'Certificado Industrial']
  },
  {
    id: 20,
    name: 'HIDRO VT GZO20-EPS',
    title: 'Planta de Ozono Profesional V2',
    category: 'Plantas Hidro',
    description: 'Planta de ozono profesional versión VT. Solución equilibrada para aplicaciones profesionales.',
    image: getProductImage('HIDRO VT GZO20-EPS', 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1200&q=90&auto=format&fit=crop'),
    fallbackImage: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1200&q=90&auto=format&fit=crop',
    specs: {
      capacidad: '20 g/h',
      potencia: '450W',
      dimensiones: '900 x 650 x 1500 mm',
      peso: '110 kg',
      consumo: 'Eficiente estándar',
      aplicaciones: ['Aplicaciones profesionales estándar', 'Hoteles', 'Centros']
    },
    beneficios: [
      'Rendimiento equilibrado',
      'Precio competitivo',
      'Fácil instalación',
      'Mantenimiento estándar'
    ],
    aplicaciones: [
      'Hoteles y hospedajes',
      'Centros comerciales',
      'Edificios comerciales',
      'Centros médicos'
    ],
    certificaciones: ['CE', 'Certificado Profesional']
  },
  {
    id: 21,
    name: 'HIDRO VT GRZO120-EPSF',
    title: 'Planta de Ozono Industrial V3',
    category: 'Plantas Hidro',
    description: 'Planta de ozono industrial versión VT de máxima capacidad. Sistema completo para grandes instalaciones.',
    image: getProductImage('HIDRO VT GRZO120-EPSF', 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1200&q=90&auto=format&fit=crop'),
    fallbackImage: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1200&q=90&auto=format&fit=crop',
    specs: {
      capacidad: '120 g/h (planta completa)',
      potencia: '1500W',
      dimensiones: '1400 x 900 x 2000 mm',
      peso: '220 kg',
      consumo: 'Optimizado para plantas industriales',
      aplicaciones: ['Plantas industriales', 'Sistemas centralizados grandes', 'Proyectos industriales']
    },
    beneficios: [
      'Sistema completo industrial VT',
      'Máxima capacidad',
      'Control centralizado avanzado',
      'Diseño modular robusto'
    ],
    aplicaciones: [
      'Plantas industriales de gran escala',
      'Sistemas municipales de tratamiento',
      'Complejos industriales',
      'Infraestructura crítica'
    ],
    certificaciones: ['CE', 'ISO 9001', 'ISO 14001', 'Certificado Industrial']
  },
  {
    id: 22,
    name: 'HIDRO V 84.90',
    title: 'Planta de Recirculación para Diluir Ozono V2',
    category: 'Plantas Hidro',
    description: 'Planta de recirculación compacta para dilución de ozono. Ideal para aplicaciones que requieren control preciso.',
    image: getProductImage('HIDRO V 84.90', 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1200&q=90&auto=format&fit=crop'),
    fallbackImage: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1200&q=90&auto=format&fit=crop',
    specs: {
      capacidad: 'Dilución controlada',
      potencia: '250W',
      dimensiones: '600 x 500 x 1200 mm',
      peso: '65 kg',
      consumo: 'Bajo consumo',
      aplicaciones: ['Control de concentración', 'Seguridad', 'Procesos especializados']
    },
    beneficios: [
      'Control preciso de concentración',
      'Seguridad mejorada',
      'Recirculación eficiente',
      'Monitoreo continuo'
    ],
    aplicaciones: [
      'Aplicaciones que requieren control preciso',
      'Sistemas de seguridad',
      'Procesos especializados',
      'Instalaciones medianas'
    ],
    certificaciones: ['CE', 'ISO 9001', 'Seguridad Industrial']
  },
  {
    id: 23,
    name: 'HIDRO V 84.522',
    title: 'Planta de Recirculación para Diluir Ozono V2',
    category: 'Plantas Hidro',
    description: 'Planta de recirculación de mediana capacidad para dilución de ozono. Diseñada para máxima seguridad.',
    image: getProductImage('HIDRO V 84.522', 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1200&q=90&auto=format&fit=crop'),
    fallbackImage: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1200&q=90&auto=format&fit=crop',
    specs: {
      capacidad: 'Dilución controlada',
      potencia: '350W',
      dimensiones: '700 x 550 x 1300 mm',
      peso: '80 kg',
      consumo: 'Muy eficiente',
      aplicaciones: ['Recirculación', 'Seguridad', 'Eficiencia operativa']
    },
    beneficios: [
      'Alta eficiencia energética',
      'Diseño robusto',
      'Control avanzado',
      'Mantenimiento reducido'
    ],
    aplicaciones: [
      'Plantas industriales',
      'Sistemas de tratamiento avanzado',
      'Aplicaciones de seguridad',
      'Procesos continuos'
    ],
    certificaciones: ['CE', 'ISO 9001']
  },
  {
    id: 24,
    name: 'HIDRO V 84.530',
    title: 'Planta de Recirculación para Diluir Ozono V2',
    category: 'Plantas Hidro',
    description: 'Planta de recirculación de alta capacidad para dilución de ozono. Sistema avanzado para aplicaciones industriales.',
    image: getProductImage('HIDRO V 84.530', 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1200&q=90&auto=format&fit=crop'),
    fallbackImage: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1200&q=90&auto=format&fit=crop',
    specs: {
      capacidad: 'Alta eficiencia de dilución',
      potencia: '400W',
      dimensiones: '800 x 600 x 1400 mm',
      peso: '95 kg',
      consumo: 'Optimizado',
      aplicaciones: ['Recirculación industrial', 'Seguridad', 'Eficiencia operativa']
    },
    beneficios: [
      'Alta eficiencia energética',
      'Diseño robusto industrial',
      'Control avanzado',
      'Mantenimiento reducido'
    ],
    aplicaciones: [
      'Plantas industriales',
      'Sistemas de tratamiento avanzado',
      'Aplicaciones de seguridad',
      'Procesos continuos',
      'Instalaciones de gran escala'
    ],
    certificaciones: ['CE', 'ISO 9001']
  },
  {
    id: 25,
    name: 'HIDRO VT 84.90',
    title: 'Planta de Recirculación para Diluir Ozono V2',
    category: 'Plantas Hidro',
    description: 'Planta de recirculación versión VT compacta para dilución de ozono. Ideal para aplicaciones que requieren control preciso.',
    image: getProductImage('HIDRO VT 84.90', 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1200&q=90&auto=format&fit=crop'),
    fallbackImage: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1200&q=90&auto=format&fit=crop',
    specs: {
      capacidad: 'Dilución controlada',
      potencia: '250W',
      dimensiones: '600 x 500 x 1200 mm',
      peso: '65 kg',
      consumo: 'Bajo consumo',
      aplicaciones: ['Control de concentración', 'Seguridad', 'Procesos especializados']
    },
    beneficios: [
      'Control preciso de concentración',
      'Seguridad mejorada',
      'Recirculación eficiente',
      'Monitoreo continuo'
    ],
    aplicaciones: [
      'Aplicaciones que requieren control preciso',
      'Sistemas de seguridad',
      'Procesos especializados',
      'Instalaciones medianas'
    ],
    certificaciones: ['CE', 'ISO 9001', 'Seguridad Industrial']
  },
  {
    id: 26,
    name: 'HIDRO VT 84.530',
    title: 'Planta de Recirculación para Diluir Ozono V2',
    category: 'Plantas Hidro',
    description: 'Planta de recirculación versión VT de alta capacidad para dilución de ozono. Sistema avanzado para aplicaciones industriales.',
    image: getProductImage('HIDRO VT 84.530', 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1200&q=90&auto=format&fit=crop'),
    fallbackImage: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1200&q=90&auto=format&fit=crop',
    specs: {
      capacidad: 'Alta eficiencia de dilución',
      potencia: '400W',
      dimensiones: '800 x 600 x 1400 mm',
      peso: '95 kg',
      consumo: 'Optimizado',
      aplicaciones: ['Recirculación industrial', 'Seguridad', 'Eficiencia operativa']
    },
    beneficios: [
      'Alta eficiencia energética',
      'Diseño robusto industrial',
      'Control avanzado',
      'Mantenimiento reducido'
    ],
    aplicaciones: [
      'Plantas industriales',
      'Sistemas de tratamiento avanzado',
      'Aplicaciones de seguridad',
      'Procesos continuos',
      'Instalaciones de gran escala'
    ],
    certificaciones: ['CE', 'ISO 9001']
  },
  // Más Profesionales
  {
    id: 27,
    name: 'GZO12-EPS',
    title: 'Generador de Ozono Profesional V4',
    category: 'Profesionales',
    description: 'Generador de ozono profesional V4 de mediana capacidad. Tecnología avanzada para aplicaciones profesionales.',
    image: getProductImage('GZO12-EPS', 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=90&auto=format&fit=crop'),
    fallbackImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=90&auto=format&fit=crop',
    specs: {
      capacidad: '12 g/h',
      potencia: '300W',
      dimensiones: '450 x 320 x 650 mm',
      peso: '28 kg',
      consumo: 'Optimizado para eficiencia energética',
      aplicaciones: ['Hoteles y resorts', 'Centros comerciales', 'Oficinas corporativas']
    },
    beneficios: [
      'Tecnología V4 de última generación',
      'Control remoto y monitoreo IoT',
      'Diseño silencioso y compacto',
      'Mantenimiento mínimo'
    ],
    aplicaciones: [
      'Hoteles y establecimientos turísticos',
      'Centros comerciales y retail',
      'Oficinas corporativas',
      'Gimnasios y centros deportivos'
    ],
    certificaciones: ['CE', 'ISO 14001', 'Certificado Profesional']
  },
  {
    id: 28,
    name: 'GZO20-D',
    title: 'Generador de Ozono Profesional V1',
    category: 'Profesionales',
    description: 'Generador de ozono profesional de mediana capacidad. Perfecto para aplicaciones profesionales de mediana escala.',
    image: getProductImage('GZO20-D', 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=1200&q=90&auto=format&fit=crop'),
    fallbackImage: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=1200&q=90&auto=format&fit=crop',
    specs: {
      capacidad: '20 g/h',
      potencia: '350W',
      dimensiones: '450 x 320 x 650 mm',
      peso: '28 kg',
      consumo: 'Muy bajo consumo',
      aplicaciones: ['Espacios comerciales medianos', 'Restaurantes', 'Clínicas']
    },
    beneficios: [
      'Tamaño compacto ideal',
      'Excelente rendimiento',
      'Fácil instalación y mantenimiento',
      'Precio competitivo'
    ],
    aplicaciones: [
      'Restaurantes y cocinas comerciales',
      'Clínicas dentales',
      'Oficinas medianas',
      'Salones comerciales'
    ],
    certificaciones: ['CE', 'Certificado Profesional']
  },
  {
    id: 29,
    name: 'GZO20-EPS',
    title: 'Generador de Ozono Profesional V4',
    category: 'Profesionales',
    description: 'Generador de ozono profesional V4 de mediana capacidad. Tecnología avanzada para aplicaciones profesionales.',
    image: getProductImage('GZO20-EPS', 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=90&auto=format&fit=crop'),
    fallbackImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=90&auto=format&fit=crop',
    specs: {
      capacidad: '20 g/h',
      potencia: '350W',
      dimensiones: '450 x 320 x 650 mm',
      peso: '28 kg',
      consumo: 'Optimizado para eficiencia energética',
      aplicaciones: ['Hoteles y resorts', 'Centros comerciales', 'Oficinas corporativas']
    },
    beneficios: [
      'Tecnología V4 de última generación',
      'Control remoto y monitoreo IoT',
      'Diseño silencioso y compacto',
      'Mantenimiento mínimo'
    ],
    aplicaciones: [
      'Hoteles y establecimientos turísticos',
      'Centros comerciales y retail',
      'Oficinas corporativas',
      'Gimnasios y centros deportivos'
    ],
    certificaciones: ['CE', 'ISO 14001', 'Certificado Profesional']
  },
  {
    id: 30,
    name: 'GZO40-D',
    title: 'Generador de Ozono Profesional para atomizador V1',
    category: 'Profesionales',
    description: 'Generador de ozono profesional diseñado específicamente para atomizadores. Solución especializada para aplicaciones profesionales.',
    image: getProductImage('GZO40-D', 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=1200&q=90&auto=format&fit=crop'),
    fallbackImage: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=1200&q=90&auto=format&fit=crop',
    specs: {
      capacidad: '40 g/h',
      potencia: '500W',
      dimensiones: '500 x 350 x 700 mm',
      peso: '35 kg',
      consumo: 'Optimizado para atomizadores',
      aplicaciones: ['Atomizadores profesionales', 'Aplicaciones especializadas', 'Sistemas integrados']
    },
    beneficios: [
      'Diseño especializado para atomizadores',
      'Alto rendimiento',
      'Fácil integración',
      'Control avanzado'
    ],
    aplicaciones: [
      'Sistemas de atomización profesional',
      'Aplicaciones especializadas',
      'Proyectos profesionales integrados',
      'Sistemas de tratamiento avanzado'
    ],
    certificaciones: ['CE', 'Certificado Profesional']
  },
  {
    id: 31,
    name: 'G12-E',
    title: 'Generador de Ozono Profesional V1',
    category: 'Profesionales',
    description: 'Generador de ozono profesional versión E. Solución eficiente para aplicaciones profesionales.',
    image: getProductImage('G12-E', 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=1200&q=90&auto=format&fit=crop'),
    fallbackImage: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=1200&q=90&auto=format&fit=crop',
    specs: {
      capacidad: '12 g/h',
      potencia: '300W',
      dimensiones: '450 x 320 x 650 mm',
      peso: '28 kg',
      consumo: 'Muy eficiente',
      aplicaciones: ['Aplicaciones profesionales', 'Hoteles', 'Centros']
    },
    beneficios: [
      'Rendimiento equilibrado',
      'Precio competitivo',
      'Fácil instalación',
      'Mantenimiento estándar'
    ],
    aplicaciones: [
      'Hoteles y hospedajes',
      'Centros comerciales',
      'Edificios comerciales',
      'Centros médicos'
    ],
    certificaciones: ['CE', 'Certificado Profesional']
  },
  {
    id: 32,
    name: 'G20-E',
    title: 'Generador de Ozono Profesional V1',
    category: 'Profesionales',
    description: 'Generador de ozono profesional versión E de mediana capacidad. Solución ideal para aplicaciones profesionales.',
    image: getProductImage('G20-E', 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=1200&q=90&auto=format&fit=crop'),
    fallbackImage: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=1200&q=90&auto=format&fit=crop',
    specs: {
      capacidad: '20 g/h',
      potencia: '350W',
      dimensiones: '450 x 320 x 650 mm',
      peso: '28 kg',
      consumo: 'Muy eficiente',
      aplicaciones: ['Aplicaciones profesionales', 'Hoteles', 'Centros']
    },
    beneficios: [
      'Rendimiento equilibrado',
      'Precio competitivo',
      'Fácil instalación',
      'Mantenimiento estándar'
    ],
    aplicaciones: [
      'Hoteles y hospedajes',
      'Centros comerciales',
      'Edificios comerciales',
      'Centros médicos'
    ],
    certificaciones: ['CE', 'Certificado Profesional']
  },
  {
    id: 33,
    name: 'G40-D',
    title: 'Generador de Ozono Profesional V1',
    category: 'Profesionales',
    description: 'Generador de ozono profesional versión D de alta capacidad. Solución ideal para aplicaciones profesionales de gran escala.',
    image: getProductImage('G40-D', 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=1200&q=90&auto=format&fit=crop'),
    fallbackImage: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=1200&q=90&auto=format&fit=crop',
    specs: {
      capacidad: '40 g/h',
      potencia: '500W',
      dimensiones: '500 x 350 x 700 mm',
      peso: '35 kg',
      consumo: 'Muy eficiente',
      aplicaciones: ['Aplicaciones profesionales grandes', 'Hoteles grandes', 'Centros comerciales']
    },
    beneficios: [
      'Alta capacidad',
      'Precio competitivo',
      'Fácil instalación',
      'Mantenimiento estándar'
    ],
    aplicaciones: [
      'Hoteles y resorts grandes',
      'Centros comerciales',
      'Edificios corporativos grandes',
      'Centros médicos grandes'
    ],
    certificaciones: ['CE', 'Certificado Profesional']
  },
  {
    id: 34,
    name: 'G40-E',
    title: 'Generador de Ozono Profesional V1',
    category: 'Profesionales',
    description: 'Generador de ozono profesional versión E de alta capacidad. Solución ideal para aplicaciones profesionales de gran escala.',
    image: getProductImage('G40-E', 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=1200&q=90&auto=format&fit=crop'),
    fallbackImage: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=1200&q=90&auto=format&fit=crop',
    specs: {
      capacidad: '40 g/h',
      potencia: '500W',
      dimensiones: '500 x 350 x 700 mm',
      peso: '35 kg',
      consumo: 'Muy eficiente',
      aplicaciones: ['Aplicaciones profesionales grandes', 'Hoteles grandes', 'Centros comerciales']
    },
    beneficios: [
      'Alta capacidad',
      'Precio competitivo',
      'Fácil instalación',
      'Mantenimiento estándar'
    ],
    aplicaciones: [
      'Hoteles y resorts grandes',
      'Centros comerciales',
      'Edificios corporativos grandes',
      'Centros médicos grandes'
    ],
    certificaciones: ['CE', 'Certificado Profesional']
  },
  {
    id: 35,
    name: 'G7-E',
    title: 'Generador de Ozono Profesional V1',
    category: 'Profesionales',
    description: 'Generador de ozono profesional versión E compacta. Solución ideal para aplicaciones profesionales pequeñas.',
    image: getProductImage('G7-E', 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=1200&q=90&auto=format&fit=crop'),
    fallbackImage: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=1200&q=90&auto=format&fit=crop',
    specs: {
      capacidad: '7 g/h',
      potencia: '200W',
      dimensiones: '400 x 300 x 600 mm',
      peso: '20 kg',
      consumo: 'Ultra bajo consumo',
      aplicaciones: ['Aplicaciones profesionales pequeñas', 'Oficinas pequeñas', 'Consultorios']
    },
    beneficios: [
      'Tamaño compacto',
      'Precio accesible',
      'Fácil instalación',
      'Mantenimiento mínimo'
    ],
    aplicaciones: [
      'Oficinas pequeñas',
      'Consultorios médicos',
      'Salones comerciales pequeños',
      'Espacios reducidos'
    ],
    certificaciones: ['CE', 'Certificado Profesional']
  },
  {
    id: 36,
    name: 'GHBBZO10-E',
    title: 'Generador de Ozono Profesional V2',
    category: 'Profesionales',
    description: 'Generador de ozono profesional V2 de mediana capacidad. Tecnología avanzada para aplicaciones profesionales.',
    image: getProductImage('GHBBZO10-E', 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=90&auto=format&fit=crop'),
    fallbackImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=90&auto=format&fit=crop',
    specs: {
      capacidad: '10 g/h',
      potencia: '250W',
      dimensiones: '400 x 300 x 600 mm',
      peso: '22 kg',
      consumo: 'Optimizado para eficiencia energética',
      aplicaciones: ['Hoteles y resorts', 'Centros comerciales', 'Oficinas corporativas']
    },
    beneficios: [
      'Tecnología V2 avanzada',
      'Control remoto y monitoreo',
      'Diseño silencioso y compacto',
      'Mantenimiento mínimo'
    ],
    aplicaciones: [
      'Hoteles y establecimientos turísticos',
      'Centros comerciales y retail',
      'Oficinas corporativas',
      'Gimnasios y centros deportivos'
    ],
    certificaciones: ['CE', 'ISO 14001', 'Certificado Profesional']
  },
  // Más Comerciales
  {
    id: 37,
    name: 'GZ1-E',
    title: 'Generador de Ozono Comercial V1',
    category: 'Comerciales',
    description: 'Generador de ozono comercial compacto. Ideal para pequeños establecimientos comerciales y hogares.',
    image: getProductImage('GZ1-E', 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=90&auto=format&fit=crop'),
    fallbackImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=90&auto=format&fit=crop',
    specs: {
      capacidad: '1 g/h',
      potencia: '50W',
      dimensiones: '300 x 200 x 400 mm',
      peso: '8 kg',
      consumo: 'Ultra bajo consumo',
      aplicaciones: ['Pequeños negocios', 'Hogares', 'Oficinas muy pequeñas']
    },
    beneficios: [
      'Precio muy accesible',
      'Consumo energético mínimo',
      'Fácil de usar',
      'Mantenimiento sencillo'
    ],
    aplicaciones: [
      'Pequeños comercios',
      'Hogares residenciales',
      'Oficinas muy pequeñas',
      'Consultorios pequeños'
    ],
    certificaciones: ['CE']
  },
  {
    id: 38,
    name: 'GZ3-E',
    title: 'Generador de Ozono Comercial V1',
    category: 'Comerciales',
    description: 'Generador de ozono comercial de pequeña capacidad. Solución económica para pequeños negocios.',
    image: getProductImage('GZ3-E', 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=90&auto=format&fit=crop'),
    fallbackImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=90&auto=format&fit=crop',
    specs: {
      capacidad: '3 g/h',
      potencia: '120W',
      dimensiones: '350 x 250 x 500 mm',
      peso: '15 kg',
      consumo: 'Ultra bajo consumo',
      aplicaciones: ['Pequeños negocios', 'Oficinas pequeñas', 'Hogares']
    },
    beneficios: [
      'Precio accesible',
      'Consumo energético mínimo',
      'Fácil de usar',
      'Mantenimiento sencillo'
    ],
    aplicaciones: [
      'Pequeños comercios',
      'Oficinas pequeñas',
      'Consultorios médicos',
      'Salones de belleza',
      'Viviendas residenciales'
    ],
    certificaciones: ['CE']
  },
  {
    id: 39,
    name: 'GZ7-E',
    title: 'Generador de Ozono Comercial V1',
    category: 'Comerciales',
    description: 'Generador de ozono comercial de mediana capacidad. Ideal para establecimientos comerciales medianos.',
    image: getProductImage('GZ7-E', 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=90&auto=format&fit=crop'),
    fallbackImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=90&auto=format&fit=crop',
    specs: {
      capacidad: '7 g/h',
      potencia: '200W',
      dimensiones: '400 x 300 x 600 mm',
      peso: '20 kg',
      consumo: 'Bajo consumo',
      aplicaciones: ['Establecimientos comerciales medianos', 'Restaurantes pequeños', 'Clínicas']
    },
    beneficios: [
      'Precio competitivo',
      'Consumo energético bajo',
      'Fácil de usar',
      'Mantenimiento sencillo'
    ],
    aplicaciones: [
      'Establecimientos comerciales medianos',
      'Restaurantes pequeños',
      'Clínicas',
      'Salones comerciales',
      'Oficinas medianas'
    ],
    certificaciones: ['CE']
  },
  {
    id: 40,
    name: 'GHBB7',
    title: 'Generador de Ozono Comercial V1',
    category: 'Comerciales',
    description: 'Generador de ozono comercial de mediana capacidad. Solución económica y eficaz para espacios comerciales.',
    image: getProductImage('GHBB7', 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=90&auto=format&fit=crop'),
    fallbackImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=90&auto=format&fit=crop',
    specs: {
      capacidad: '7 g/h',
      potencia: '200W',
      dimensiones: '400 x 300 x 600 mm',
      peso: '20 kg',
      consumo: 'Bajo consumo',
      aplicaciones: ['Establecimientos comerciales', 'Restaurantes', 'Clínicas']
    },
    beneficios: [
      'Precio competitivo',
      'Consumo energético bajo',
      'Fácil de usar',
      'Mantenimiento sencillo'
    ],
    aplicaciones: [
      'Establecimientos comerciales',
      'Restaurantes',
      'Clínicas',
      'Salones comerciales',
      'Oficinas medianas'
    ],
    certificaciones: ['CE']
  },
  {
    id: 41,
    name: 'GX500-LB',
    title: 'Generador de Ozono Comercial',
    category: 'Comerciales',
    description: 'Generador de ozono comercial de alta capacidad. Solución ideal para establecimientos comerciales grandes.',
    image: getProductImage('GX500-LB', 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=90&auto=format&fit=crop'),
    fallbackImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=90&auto=format&fit=crop',
    specs: {
      capacidad: '500 g/h',
      potencia: '1200W',
      dimensiones: '600 x 400 x 800 mm',
      peso: '45 kg',
      consumo: 'Optimizado para comerciales',
      aplicaciones: ['Establecimientos comerciales grandes', 'Centros comerciales', 'Supermercados']
    },
    beneficios: [
      'Alta capacidad comercial',
      'Precio competitivo',
      'Fácil instalación',
      'Mantenimiento estándar'
    ],
    aplicaciones: [
      'Establecimientos comerciales grandes',
      'Centros comerciales',
      'Supermercados',
      'Grandes restaurantes',
      'Complejos comerciales'
    ],
    certificaciones: ['CE', 'Certificado Comercial']
  },
  // Portátiles
  {
    id: 42,
    name: 'OZONE-PORT-1',
    title: 'Generador de Ozono Portátil Compacto',
    category: 'Portátiles',
    description: 'Generador de ozono portátil compacto y ligero. Ideal para uso móvil y aplicaciones temporales.',
    image: getProductImage('OZONE-PORT-1', 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=90&auto=format&fit=crop'),
    fallbackImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=90&auto=format&fit=crop',
    specs: {
      capacidad: '1-3 g/h',
      potencia: '50-100W',
      dimensiones: '250 x 200 x 350 mm',
      peso: '5 kg',
      consumo: 'Ultra bajo consumo',
      aplicaciones: ['Uso móvil', 'Aplicaciones temporales', 'Eventos', 'Viajes']
    },
    beneficios: [
      'Diseño portátil y ligero',
      'Batería recargable opcional',
      'Fácil transporte',
      'Uso versátil'
    ],
    aplicaciones: [
      'Eventos temporales',
      'Viajes de negocios',
      'Aplicaciones móviles',
      'Espacios temporales',
      'Uso doméstico móvil'
    ],
    certificaciones: ['CE']
  },
  {
    id: 43,
    name: 'OZONE-PORT-5',
    title: 'Generador de Ozono Portátil Mediano',
    category: 'Portátiles',
    description: 'Generador de ozono portátil de mediana capacidad. Solución móvil para aplicaciones profesionales temporales.',
    image: getProductImage('OZONE-PORT-5', 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=90&auto=format&fit=crop'),
    fallbackImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=90&auto=format&fit=crop',
    specs: {
      capacidad: '5-7 g/h',
      potencia: '150-200W',
      dimensiones: '350 x 250 x 500 mm',
      peso: '12 kg',
      consumo: 'Bajo consumo',
      aplicaciones: ['Uso móvil profesional', 'Aplicaciones temporales', 'Eventos profesionales']
    },
    beneficios: [
      'Diseño portátil profesional',
      'Alta capacidad portátil',
      'Fácil transporte',
      'Uso versátil profesional'
    ],
    aplicaciones: [
      'Eventos profesionales temporales',
      'Aplicaciones móviles profesionales',
      'Espacios temporales comerciales',
      'Uso profesional móvil'
    ],
    certificaciones: ['CE', 'Certificado Portátil']
  },
  // Accesorios
  {
    id: 44,
    name: 'CRTL.PANEL OZONO DISUELTO 20 PPM',
    title: 'Panel de Control Ozono Disuelto 20 PPM Amperimétrico V1',
    category: 'Accesorios',
    description: 'Panel de control amperimétrico para monitoreo de ozono disuelto hasta 20 PPM. Sistema de control preciso y confiable.',
    image: getProductImage('CRTL.PANEL OZONO DISUELTO 20 PPM', 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=90&auto=format&fit=crop'),
    fallbackImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=90&auto=format&fit=crop',
    specs: {
      capacidad: 'Monitoreo hasta 20 PPM',
      potencia: '12V DC',
      dimensiones: '200 x 150 x 100 mm',
      peso: '1.5 kg',
      consumo: 'Bajo consumo',
      aplicaciones: ['Control y monitoreo', 'Seguridad', 'Precisión']
    },
    beneficios: [
      'Monitoreo preciso de ozono disuelto',
      'Control amperimétrico avanzado',
      'Alarmas de seguridad',
      'Fácil instalación'
    ],
    aplicaciones: [
      'Sistemas de control de ozono',
      'Monitoreo de seguridad',
      'Control de calidad',
      'Aplicaciones que requieren precisión'
    ],
    certificaciones: ['CE', 'ISO 9001']
  },
  {
    id: 45,
    name: 'PSA-O-15K',
    title: 'Generador de Oxígeno sin Compresor',
    category: 'Accesorios',
    description: 'Generador de oxígeno sin compresor de alta capacidad. Accesorio esencial para sistemas de ozono que requieren oxígeno puro.',
    image: getProductImage('PSA-O-15K', 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=90&auto=format&fit=crop'),
    fallbackImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=90&auto=format&fit=crop',
    specs: {
      capacidad: '15 m³/h',
      potencia: '2000W',
      dimensiones: '800 x 600 x 1200 mm',
      peso: '120 kg',
      consumo: 'Optimizado',
      aplicaciones: ['Generación de oxígeno', 'Sistemas de ozono', 'Aplicaciones industriales']
    },
    beneficios: [
      'Sin compresor, operación silenciosa',
      'Alta pureza de oxígeno',
      'Bajo mantenimiento',
      'Alta eficiencia'
    ],
    aplicaciones: [
      'Sistemas de ozono que requieren oxígeno puro',
      'Aplicaciones industriales',
      'Sistemas de tratamiento avanzado',
      'Aplicaciones que requieren alta pureza'
    ],
    certificaciones: ['CE', 'ISO 9001']
  },
]

