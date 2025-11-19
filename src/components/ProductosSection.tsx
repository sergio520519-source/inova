import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import ProductCard from './ProductCard'
import { productos as allProductos } from '../data/productos'

// Mostrar solo los primeros 6 productos destacados
const productos = allProductos.slice(0, 6)

export default function ProductosSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-blue-950/30 via-blue-900/20 to-blue-950/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6 drop-shadow-lg">
            Tratamiento de Aguas para Control Ambiental
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
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
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <span>Ver Catálogo Completo</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

