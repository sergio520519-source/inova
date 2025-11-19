import { motion } from 'framer-motion'
import { Factory, Droplets, Zap } from 'lucide-react'

interface Producto {
  id: number
  name: string
  title: string
  category: 'Industrial' | 'Profesional' | 'Comercial'
  description: string
  image?: string
  icon?: any
}

interface ProductCardProps {
  producto: Producto
}

export default function ProductCard({ producto }: ProductCardProps) {
  const categoryColors = {
    Industrial: 'from-orange-500 to-red-600',
    Profesional: 'from-blue-500 to-cyan-600',
    Comercial: 'from-green-500 to-emerald-600',
  }

  const categoryIcons = {
    Industrial: Factory,
    Profesional: Droplets,
    Comercial: Zap,
  }

  const Icon = producto.icon || categoryIcons[producto.category]

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      className="group bg-gradient-to-br from-blue-50/50 to-white backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-blue-100/50"
    >
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-100 to-cyan-100">
        {producto.image ? (
          <img
            src={producto.image}
            alt={producto.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${categoryColors[producto.category]} flex items-center justify-center opacity-20`}>
            <Icon className="w-24 h-24 text-white/30" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent"></div>
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-bold rounded-full ${producto.category === 'Industrial' ? 'text-orange-600' : producto.category === 'Profesional' ? 'text-blue-600' : 'text-green-600'}`}>
            {producto.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div className={`w-12 h-12 bg-gradient-to-br ${categoryColors[producto.category]} rounded-xl flex items-center justify-center shadow-lg`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
        </div>
        <h3 className="text-xl font-display font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
          {producto.name}
        </h3>
        <h4 className="text-base font-semibold text-gray-700 mb-3">{producto.title}</h4>
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{producto.description}</p>
        <button className="text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
          <span>Ver detalles completos</span>
          <span>→</span>
        </button>
      </div>
    </motion.div>
  )
}

