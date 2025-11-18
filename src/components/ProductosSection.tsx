import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Droplets, Wind, Zap, Factory } from 'lucide-react'
import ProductCard from './ProductCard'

const productos = [
  {
    id: 1,
    name: 'GRV15-EP',
    title: 'Generador de Ozono Industrial',
    category: 'Industrial',
    description: 'Solución industrial de alta capacidad para tratamiento de aguas',
    icon: Factory,
  },
  {
    id: 2,
    name: 'GZO75-EPS',
    title: 'Generador de Ozono Profesional V4',
    category: 'Profesional',
    description: 'Tecnología de vanguardia para aplicaciones profesionales',
    icon: Droplets,
  },
  {
    id: 3,
    name: 'GZO10-D',
    title: 'Generador de Ozono Profesional V1',
    category: 'Profesional',
    description: 'Versión compacta para espacios reducidos',
    icon: Wind,
  },
  {
    id: 4,
    name: 'GHBZO3-E',
    title: 'Generador de Ozono Comercial V2',
    category: 'Comercial',
    description: 'Ideal para establecimientos comerciales y pequeños negocios',
    icon: Zap,
  },
  {
    id: 5,
    name: 'GRZO120-EPSF',
    title: 'Generador de Ozono Industrial V5',
    category: 'Industrial',
    description: 'Máxima capacidad para grandes instalaciones industriales',
    icon: Factory,
  },
  {
    id: 6,
    name: 'GR3000-EP',
    title: 'Generador de Ozono Industrial V4',
    category: 'Industrial',
    description: 'Solución de gran escala para plantas industriales',
    icon: Factory,
  },
]

export default function ProductosSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
            Tratamiento de Aguas para Control Ambiental
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Soluciones completas de ozono para eficiencia energética y control ambiental. 
            Tecnología europea certificada.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {productos.map((producto, index) => (
            <motion.div
              key={producto.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProductCard producto={producto} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Link
            to="/catalogo"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-ozone-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <span>Ver Catálogo Completo</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

