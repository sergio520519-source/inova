import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface Producto {
  id: number
  name: string
  title: string
  category: string
  description: string
  icon: LucideIcon
}

interface ProductCardProps {
  producto: Producto
}

export default function ProductCard({ producto }: ProductCardProps) {
  const Icon = producto.icon
  const categoryColors = {
    Industrial: 'from-red-500 to-orange-500',
    Profesional: 'from-blue-500 to-cyan-500',
    Comercial: 'from-green-500 to-emerald-500',
  }

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
    >
      <div className={`h-2 bg-gradient-to-r ${categoryColors[producto.category as keyof typeof categoryColors] || 'from-gray-400 to-gray-500'}`}></div>
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className={`w-14 h-14 bg-gradient-to-br ${categoryColors[producto.category as keyof typeof categoryColors] || 'from-gray-400 to-gray-500'} rounded-xl flex items-center justify-center`}>
            <Icon className="w-7 h-7 text-white" />
          </div>
          <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full">
            {producto.category}
          </span>
        </div>
        <h3 className="text-xl font-display font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
          {producto.name}
        </h3>
        <h4 className="text-lg font-semibold text-gray-800 mb-3">{producto.title}</h4>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">{producto.description}</p>
        <button className="text-primary-600 font-semibold text-sm hover:text-primary-700 transition-colors flex items-center space-x-1">
          <span>Ver detalles</span>
          <span>→</span>
        </button>
      </div>
    </motion.div>
  )
}

