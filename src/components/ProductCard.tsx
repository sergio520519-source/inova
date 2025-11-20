import { motion } from 'framer-motion'
import { Factory, Droplets, Zap, Package, Smartphone, Wrench, ArrowRight, Sparkles } from 'lucide-react'
import { useState } from 'react'
import type { Producto } from '../data/productos'

interface ProductCardProps {
  producto: Producto
  onViewDetails?: (producto: Producto) => void
}

export default function ProductCard({ producto, onViewDetails }: ProductCardProps) {
  const [imageError, setImageError] = useState(false)
  const [currentImage, setCurrentImage] = useState(producto.image || '')
  const [isHovered, setIsHovered] = useState(false)
  const [imageAttempts, setImageAttempts] = useState<string[]>([])
  
  const categoryColors = {
    'Industriales': {
      gradient: 'from-orange-500 via-red-500 to-orange-600',
      light: 'from-orange-400/20 to-red-500/20',
      text: 'text-orange-300',
      border: 'border-orange-500/50',
      glow: 'shadow-[0_0_30px_rgba(249,115,22,0.4)]',
    },
    'Plantas Hidro': {
      gradient: 'from-cyan-500 via-blue-500 to-cyan-600',
      light: 'from-cyan-400/20 to-blue-500/20',
      text: 'text-cyan-300',
      border: 'border-cyan-500/50',
      glow: 'shadow-[0_0_30px_rgba(6,182,212,0.4)]',
    },
    'Profesionales': {
      gradient: 'from-teal-500 via-emerald-500 to-teal-600',
      light: 'from-teal-400/20 to-emerald-500/20',
      text: 'text-teal-300',
      border: 'border-teal-500/50',
      glow: 'shadow-[0_0_30px_rgba(20,184,166,0.4)]',
    },
    'Comerciales': {
      gradient: 'from-green-500 via-emerald-500 to-green-600',
      light: 'from-green-400/20 to-emerald-500/20',
      text: 'text-green-300',
      border: 'border-green-500/50',
      glow: 'shadow-[0_0_30px_rgba(34,197,94,0.4)]',
    },
    'Portátiles': {
      gradient: 'from-purple-500 via-pink-500 to-purple-600',
      light: 'from-purple-400/20 to-pink-500/20',
      text: 'text-purple-300',
      border: 'border-purple-500/50',
      glow: 'shadow-[0_0_30px_rgba(168,85,247,0.4)]',
    },
    'Accesorios': {
      gradient: 'from-yellow-500 via-orange-500 to-yellow-600',
      light: 'from-yellow-400/20 to-orange-500/20',
      text: 'text-yellow-300',
      border: 'border-yellow-500/50',
      glow: 'shadow-[0_0_30px_rgba(234,179,8,0.4)]',
    },
  }

  const categoryIcons = {
    'Industriales': Factory,
    'Plantas Hidro': Droplets,
    'Profesionales': Zap,
    'Comerciales': Package,
    'Portátiles': Smartphone,
    'Accesorios': Wrench,
  }

  const Icon = categoryIcons[producto.category]
  const colors = categoryColors[producto.category]

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement
    const failedSrc = target.src
    
    // Prevenir loops infinitos
    if (target.dataset.errorHandled === 'true') {
      return
    }
    
    // Agregar a intentos fallidos
    if (!imageAttempts.includes(failedSrc)) {
      setImageAttempts(prev => [...prev, failedSrc])
    }
    
    // Log para debug (solo en desarrollo, silencioso)
    if (import.meta.env.DEV && imageAttempts.length === 0) {
      console.warn(`[ProductCard] Image failed for ${producto.name}, trying fallback...`)
    }
    
    // Intentar fallback si aún no se ha intentado
    if (producto.fallbackImage && !imageAttempts.includes(producto.fallbackImage)) {
      target.dataset.errorHandled = 'true'
      setCurrentImage(producto.fallbackImage)
      return
    }
    
    // Si ya intentamos el fallback o no hay fallback, usar imagen por defecto
    if (!imageAttempts.includes('/products/factory-hero.jpg') && !imageAttempts.includes('/factory-hero.jpg')) {
      target.dataset.errorHandled = 'true'
      // Intentar ambas rutas posibles
      const defaultImage = '/products/factory-hero.jpg'
      setCurrentImage(defaultImage)
      setImageError(true)
      return
    }
    
    // Si ya intentamos todo, ocultar la imagen y mostrar el icono
    target.dataset.errorHandled = 'true'
    setImageError(true)
  }

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -12, scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group relative bg-gradient-to-br from-slate-800/95 via-slate-900/95 to-slate-800/95 backdrop-blur-2xl rounded-3xl shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] transition-all duration-500 overflow-hidden border border-slate-700/50 hover:border-teal-500/50"
      style={{
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Animated Background Gradient */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${colors.light} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        animate={isHovered ? { opacity: 0.3 } : { opacity: 0 }}
      />

      {/* Glow Effect */}
      <div className={`absolute -inset-1 bg-gradient-to-r ${colors.gradient} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />

      {/* Image Section - Ultra Premium with 3D Effect */}
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-slate-900 to-slate-950">
        {currentImage ? (
          <motion.img
            src={currentImage}
            alt={producto.title}
            className="w-full h-full object-cover"
            loading="lazy"
            onError={handleImageError}
            onLoad={() => setImageError(false)}
            animate={isHovered ? { scale: 1.15 } : { scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${colors.gradient} flex items-center justify-center opacity-20`}>
            <Icon className="w-32 h-32 text-white/30" />
          </div>
        )}
        
        {/* Multi-layer Overlay for Depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-slate-900/60" />
        
        {/* Animated Shine Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          animate={{
            x: isHovered ? ['-200%', '200%'] : '-200%',
          }}
          transition={{
            duration: 1.5,
            ease: 'easeInOut',
          }}
        />

        {/* Premium Category Badge with 3D Effect */}
        <motion.div
          className="absolute top-5 right-5"
          animate={isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 400, damping: 15 }}
        >
          <div className={`relative px-5 py-2.5 bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-2xl ${colors.text} text-xs font-bold rounded-full ${colors.border} border-2 shadow-2xl`}>
            <Sparkles className="absolute -top-1 -left-1 w-3 h-3 text-yellow-400 animate-pulse" />
            <span className="relative z-10">{producto.category}</span>
          </div>
        </motion.div>

        {/* Floating Particles Effect */}
        {isHovered && (
          <>
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute w-2 h-2 bg-gradient-to-br ${colors.gradient} rounded-full`}
                initial={{
                  x: Math.random() * 100 + '%',
                  y: '100%',
                  opacity: 0,
                }}
                animate={{
                  y: '-20%',
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.2,
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
              />
            ))}
          </>
        )}
      </div>

      {/* Content Section - Ultra Premium */}
      <div className="relative p-7 bg-gradient-to-b from-slate-800/95 to-slate-900/95">
        {/* Icon with 3D Effect */}
        <motion.div
          className={`relative w-16 h-16 mb-5 bg-gradient-to-br ${colors.gradient} rounded-2xl flex items-center justify-center shadow-2xl ${colors.glow} border-2 border-white/20`}
          animate={isHovered ? { rotate: [0, -10, 10, -10, 0], scale: 1.1 } : { rotate: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Icon className="w-8 h-8 text-white relative z-10" />
          <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} rounded-2xl blur-xl opacity-50`} />
        </motion.div>

        {/* Product Name with Gradient Text */}
        <motion.h3
          className="text-2xl font-display font-extrabold bg-gradient-to-r from-teal-300 via-emerald-300 to-teal-400 bg-clip-text text-transparent mb-2 group-hover:drop-shadow-[0_0_15px_rgba(20,184,166,0.6)] transition-all duration-300"
          animate={isHovered ? { x: 5 } : { x: 0 }}
        >
          {producto.name}
        </motion.h3>

        {/* Product Title */}
        <h4 className="text-base font-semibold text-teal-200 mb-4 leading-tight">{producto.title}</h4>

        {/* Description with Fade Effect */}
        <p className="text-teal-100/90 text-sm leading-relaxed mb-6 line-clamp-3 font-light">
          {producto.description}
        </p>

        {/* CTA Button - Ultra Premium */}
        <motion.button
          onClick={() => onViewDetails?.(producto)}
          whileHover={{ x: 8, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`group/btn relative w-full flex items-center justify-between px-6 py-4 bg-gradient-to-r ${colors.gradient} text-white font-bold rounded-xl ${colors.glow} overflow-hidden transition-all duration-300`}
        >
          <span className="relative z-10 flex items-center space-x-2">
            <span>Ver detalles completos</span>
          </span>
          <motion.div
            className="relative z-10"
            animate={isHovered ? { x: [0, 5, 0] } : { x: 0 }}
            transition={{ duration: 1, repeat: Infinity, repeatDelay: 0.5 }}
          >
            <ArrowRight className="w-5 h-5" />
          </motion.div>
          
          {/* Button Shine Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{
              x: isHovered ? ['-100%', '100%'] : '-100%',
            }}
            transition={{
              duration: 0.8,
              ease: 'easeInOut',
            }}
          />
        </motion.button>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-emerald-500/10 to-transparent rounded-full blur-2xl" />
      </div>

      {/* Corner Accent */}
      <div className={`absolute top-0 left-0 w-20 h-20 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-10 rounded-br-3xl transition-opacity duration-500`} />
    </motion.div>
  )
}
