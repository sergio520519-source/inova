import { useState } from 'react'
import { motion } from 'framer-motion'
import ProductCard from '../components/ProductCard'
import { Factory, Droplets, Wind, Zap, Filter } from 'lucide-react'

const allProductos = [
  {
    id: 1,
    name: 'GRV15-EP',
    title: 'Generador de Ozono Industrial',
    category: 'Industrial',
    description: 'Solución industrial de alta capacidad para tratamiento de aguas y control ambiental.',
    icon: Factory,
  },
  {
    id: 2,
    name: 'GZO75-EPS',
    title: 'Generador de Ozono Profesional. V4',
    category: 'Profesional',
    description: 'Tecnología de vanguardia para aplicaciones profesionales en tratamiento de aguas.',
    icon: Droplets,
  },
  {
    id: 3,
    name: 'GZO10-D',
    title: 'Generador de Ozono Profesional. V1',
    category: 'Profesional',
    description: 'Versión compacta para espacios reducidos con excelente rendimiento.',
    icon: Wind,
  },
  {
    id: 4,
    name: 'GHBZO3-E',
    title: 'Generador de Ozono Comercial. V2',
    category: 'Comercial',
    description: 'Ideal para establecimientos comerciales y pequeños negocios.',
    icon: Zap,
  },
  {
    id: 5,
    name: 'HIDRO VT GZO75-EPS',
    title: 'Planta de Ozono Profesional. V2',
    category: 'Profesional',
    description: 'Planta completa para tratamiento profesional de aguas.',
    icon: Droplets,
  },
  {
    id: 6,
    name: 'HIDRO VT GZO40-EPS',
    title: 'Planta de Ozono Profesional. V2',
    category: 'Profesional',
    description: 'Solución profesional de mediana capacidad.',
    icon: Droplets,
  },
  {
    id: 7,
    name: 'HIDRO VT 84.522',
    title: 'Planta de recirculación para diluir ozono. V2',
    category: 'Industrial',
    description: 'Sistema de recirculación para dilución controlada de ozono.',
    icon: Factory,
  },
  {
    id: 8,
    name: 'HIDRO V 84.315',
    title: 'Planta de recirculación para diluir ozono. V2',
    category: 'Industrial',
    description: 'Planta de recirculación de alta eficiencia (PENDIENTE).',
    icon: Factory,
  },
  {
    id: 9,
    name: 'GRZO120-EPSF',
    title: 'Generador de Ozono Industrial. V5',
    category: 'Industrial',
    description: 'Máxima capacidad para grandes instalaciones industriales.',
    icon: Factory,
  },
  {
    id: 10,
    name: 'GR3000-EP',
    title: 'Generador de Ozono Industrial. V4',
    category: 'Industrial',
    description: 'Solución de gran escala para plantas industriales.',
    icon: Factory,
  },
  {
    id: 11,
    name: 'HIDRO VT GZO40-ES',
    title: 'Planta de Ozono Profesional',
    category: 'Profesional',
    description: 'Versión estándar de planta profesional.',
    icon: Droplets,
  },
  {
    id: 12,
    name: 'G10-D',
    title: 'Generador de Ozono Profesional. V1',
    category: 'Profesional',
    description: 'Generador profesional de entrada con tecnología certificada.',
    icon: Wind,
  },
]

const categories = ['Todos', 'Industrial', 'Profesional', 'Comercial']

export default function Catalogo() {
  const [selectedCategory, setSelectedCategory] = useState('Todos')

  const filteredProductos = selectedCategory === 'Todos'
    ? allProductos
    : allProductos.filter(p => p.category === selectedCategory)

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-ozone-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-primary-600 to-ozone-600 bg-clip-text text-transparent">
                Catálogo de Productos
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Tecnología europea certificada para soluciones de ozono y control ambiental. 
              Encuentra el equipo perfecto para tus necesidades.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4">
            <Filter className="w-5 h-5 text-gray-600" />
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-primary-600 to-ozone-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-gray-600">
              Mostrando <strong>{filteredProductos.length}</strong> productos
              {selectedCategory !== 'Todos' && ` en la categoría ${selectedCategory}`}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProductos.map((producto, index) => (
              <motion.div
                key={producto.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <ProductCard producto={producto} />
              </motion.div>
            ))}
          </div>

          {filteredProductos.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No se encontraron productos en esta categoría.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

