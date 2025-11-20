import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle, Zap, Package, Factory, Droplets, Smartphone, Wrench, Award, Settings, Ruler, Weight, Power, Droplet } from 'lucide-react'
import type { Producto } from '../data/productos'

interface ProductDetailModalProps {
  producto: Producto | null
  onClose: () => void
}

const categoryIcons = {
  'Industriales': Factory,
  'Plantas Hidro': Droplets,
  'Profesionales': Zap,
  'Comerciales': Package,
  'Portátiles': Smartphone,
  'Accesorios': Wrench,
}

const categoryColors = {
  'Industriales': {
    gradient: 'from-orange-500 via-red-500 to-orange-600',
    text: 'text-orange-300',
    border: 'border-orange-500/50',
    bg: 'bg-orange-500/10',
  },
  'Plantas Hidro': {
    gradient: 'from-cyan-500 via-blue-500 to-cyan-600',
    text: 'text-cyan-300',
    border: 'border-cyan-500/50',
    bg: 'bg-cyan-500/10',
  },
  'Profesionales': {
    gradient: 'from-teal-500 via-emerald-500 to-teal-600',
    text: 'text-teal-300',
    border: 'border-teal-500/50',
    bg: 'bg-teal-500/10',
  },
  'Comerciales': {
    gradient: 'from-green-500 via-emerald-500 to-green-600',
    text: 'text-green-300',
    border: 'border-green-500/50',
    bg: 'bg-green-500/10',
  },
  'Portátiles': {
    gradient: 'from-purple-500 via-pink-500 to-purple-600',
    text: 'text-purple-300',
    border: 'border-purple-500/50',
    bg: 'bg-purple-500/10',
  },
  'Accesorios': {
    gradient: 'from-yellow-500 via-orange-500 to-yellow-600',
    text: 'text-yellow-300',
    border: 'border-yellow-500/50',
    bg: 'bg-yellow-500/10',
  },
}

export default function ProductDetailModal({ producto, onClose }: ProductDetailModalProps) {
  if (!producto) return null

  const colors = categoryColors[producto.category]
  const Icon = categoryIcons[producto.category]

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4 overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 50 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl shadow-2xl border-2 border-teal-700/50 w-full max-w-5xl max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-50 p-3 rounded-full bg-slate-800/90 hover:bg-slate-700 text-teal-200 hover:text-white transition-all border-2 border-teal-700/50 hover:border-teal-500/50"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Header with Image */}
          <div className="relative h-80 overflow-hidden bg-gradient-to-br from-slate-900 to-slate-950">
            {producto.image && (
              <img
                src={producto.image}
                alt={producto.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  if (target.dataset.errorHandled === 'true') {
                    target.style.display = 'none'
                    return
                  }
                  target.dataset.errorHandled = 'true'
                  if (producto.fallbackImage && target.src !== producto.fallbackImage) {
                    target.src = producto.fallbackImage
                  } else {
                    target.src = '/products/factory-hero.jpg'
                  }
                }}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
            
            {/* Category Badge */}
            <div className="absolute top-6 left-6">
              <div className={`flex items-center space-x-2 px-5 py-2.5 bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-2xl ${colors.text} text-sm font-bold rounded-full ${colors.border} border-2 shadow-2xl`}>
                <Icon className="w-5 h-5" />
                <span>{producto.category}</span>
              </div>
            </div>

            {/* Product Name */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-teal-300 via-emerald-300 to-teal-400 bg-clip-text text-transparent mb-2 drop-shadow-2xl">
                {producto.name}
              </h2>
              <h3 className="text-xl text-teal-200 font-semibold">{producto.title}</h3>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 space-y-8">
            {/* Description */}
            <div>
              <h4 className="text-2xl font-bold text-teal-300 mb-4 flex items-center space-x-2">
                <Droplet className="w-6 h-6" />
                <span>Descripción</span>
              </h4>
              <p className="text-teal-100 text-lg leading-relaxed">{producto.description}</p>
            </div>

            {/* Specifications */}
            {producto.specs && Object.keys(producto.specs).length > 0 && (
              <div>
                <h4 className="text-2xl font-bold text-teal-300 mb-4 flex items-center space-x-2">
                  <Settings className="w-6 h-6" />
                  <span>Especificaciones Técnicas</span>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {producto.specs.capacidad && (
                    <div className={`${colors.bg} rounded-xl p-4 border ${colors.border}`}>
                      <div className="flex items-center space-x-2 mb-2">
                        <Zap className={`w-5 h-5 ${colors.text}`} />
                        <span className="font-semibold text-teal-200">Capacidad</span>
                      </div>
                      <p className="text-white text-lg">{producto.specs.capacidad}</p>
                    </div>
                  )}
                  {producto.specs.potencia && (
                    <div className={`${colors.bg} rounded-xl p-4 border ${colors.border}`}>
                      <div className="flex items-center space-x-2 mb-2">
                        <Power className={`w-5 h-5 ${colors.text}`} />
                        <span className="font-semibold text-teal-200">Potencia</span>
                      </div>
                      <p className="text-white text-lg">{producto.specs.potencia}</p>
                    </div>
                  )}
                  {producto.specs.dimensiones && (
                    <div className={`${colors.bg} rounded-xl p-4 border ${colors.border}`}>
                      <div className="flex items-center space-x-2 mb-2">
                        <Ruler className={`w-5 h-5 ${colors.text}`} />
                        <span className="font-semibold text-teal-200">Dimensiones</span>
                      </div>
                      <p className="text-white text-lg">{producto.specs.dimensiones}</p>
                    </div>
                  )}
                  {producto.specs.peso && (
                    <div className={`${colors.bg} rounded-xl p-4 border ${colors.border}`}>
                      <div className="flex items-center space-x-2 mb-2">
                        <Weight className={`w-5 h-5 ${colors.text}`} />
                        <span className="font-semibold text-teal-200">Peso</span>
                      </div>
                      <p className="text-white text-lg">{producto.specs.peso}</p>
                    </div>
                  )}
                  {producto.specs.consumo && (
                    <div className={`${colors.bg} rounded-xl p-4 border ${colors.border} md:col-span-2`}>
                      <div className="flex items-center space-x-2 mb-2">
                        <Power className={`w-5 h-5 ${colors.text}`} />
                        <span className="font-semibold text-teal-200">Consumo</span>
                      </div>
                      <p className="text-white text-lg">{producto.specs.consumo}</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Benefits */}
            {producto.beneficios && producto.beneficios.length > 0 && (
              <div>
                <h4 className="text-2xl font-bold text-teal-300 mb-4 flex items-center space-x-2">
                  <Award className="w-6 h-6" />
                  <span>Beneficios</span>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {producto.beneficios.map((beneficio, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`${colors.bg} rounded-xl p-4 border ${colors.border} flex items-start space-x-3`}
                    >
                      <CheckCircle className={`w-6 h-6 ${colors.text} flex-shrink-0 mt-0.5`} />
                      <p className="text-teal-100">{beneficio}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Applications */}
            {producto.aplicaciones && producto.aplicaciones.length > 0 && (
              <div>
                <h4 className="text-2xl font-bold text-teal-300 mb-4 flex items-center space-x-2">
                  <Package className="w-6 h-6" />
                  <span>Aplicaciones</span>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {producto.aplicaciones.map((aplicacion, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={`${colors.bg} rounded-lg p-3 border ${colors.border}`}
                    >
                      <p className="text-teal-100 text-sm">{aplicacion}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Certifications */}
            {producto.certificaciones && producto.certificaciones.length > 0 && (
              <div>
                <h4 className="text-2xl font-bold text-teal-300 mb-4 flex items-center space-x-2">
                  <Award className="w-6 h-6" />
                  <span>Certificaciones</span>
                </h4>
                <div className="flex flex-wrap gap-3">
                  {producto.certificaciones.map((cert, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className={`px-6 py-3 bg-gradient-to-r ${colors.gradient} text-white font-bold rounded-xl shadow-lg`}
                    >
                      {cert}
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-teal-700/50">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex-1 px-8 py-4 bg-gradient-to-r ${colors.gradient} text-white font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all`}
              >
                Solicitar Presupuesto
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 px-8 py-4 bg-slate-700/50 hover:bg-slate-600/50 text-teal-200 font-bold rounded-xl border-2 border-teal-700/50 hover:border-teal-500/50 transition-all"
              >
                Solicitar Asesoría Técnica
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

