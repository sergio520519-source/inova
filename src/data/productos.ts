// Información detallada de productos con imágenes de alta calidad
import { getProductImage } from '../utils/imageUtils'

export interface Producto {
  id: number
  name: string
  title: string
  category: 'Industrial' | 'Profesional' | 'Comercial'
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
    category: 'Industrial',
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
    category: 'Profesional',
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
    category: 'Profesional',
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
    category: 'Comercial',
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
    category: 'Profesional',
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
    category: 'Profesional',
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
    category: 'Industrial',
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
    category: 'Industrial',
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
    category: 'Industrial',
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
    category: 'Industrial',
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
    category: 'Profesional',
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
    category: 'Profesional',
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
]

