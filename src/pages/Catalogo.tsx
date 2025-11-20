import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProductCard from '../components/ProductCard'
import ProductDetailModal from '../components/ProductDetailModal'
import { productos as allProductos } from '../data/productos'
import type { Producto } from '../data/productos'
import { Sparkles, Info, ChevronRight, Filter } from 'lucide-react'

const categories = [
  { id: 'Todos', label: 'Todos', icon: '📦', color: 'from-teal-500 to-cyan-600' },
  { id: 'Industriales', label: 'Industriales', icon: '🏭', color: 'from-orange-500 to-red-600' },
  { id: 'Plantas Hidro', label: 'Plantas Hidro', icon: '💧', color: 'from-cyan-500 to-blue-600' },
  { id: 'Profesionales', label: 'Profesionales', icon: '⭐', color: 'from-teal-500 to-emerald-600' },
  { id: 'Comerciales', label: 'Comerciales', icon: '🏢', color: 'from-green-500 to-emerald-600' },
  { id: 'Portátiles', label: 'Portátiles', icon: '📱', color: 'from-purple-500 to-pink-600' },
  { id: 'Accesorios', label: 'Accesorios', icon: '🔧', color: 'from-yellow-500 to-orange-600' },
]

// Gamas por categoría (basado en la página antigua)
const gamas = {
  'Industriales': [
    { id: 'GRV', name: 'GAMA GRV', description: '7 modelos desde 10 kg hasta 150 kg de ozono/hora. Bajo consumo eléctrico por kg de ozono.' },
    { id: 'GR', name: 'GAMA GR', description: '8 modelos desde 1000g hasta 5000g de ozono/hora. Requieren aporte externo de gas y agua de refrigeración.' },
    { id: 'GRZO', name: 'GAMA GRZO', description: '4 modelos desde 80g hasta 500g de ozono/hora. Compactos con unidad completa de aire.' },
  ],
  'Plantas Hidro': [
    { id: 'HIDRO-V', name: 'PLANTA HIDRO V', description: 'Plantas de ozono profesional para tratamiento en línea.' },
    { id: 'HIDRO-VT', name: 'PLANTA HIDRO VT', description: 'Plantas de ozono profesional versión VT con características avanzadas.' },
    { id: 'RECIRCULACION', name: 'PLANTA HIDRO V RECIRCULACIÓN', description: 'Plantas de recirculación para diluir ozono con control preciso.' },
  ],
  'Profesionales': [
    { id: 'VT-GZO-EPS', name: 'VT GZO EPS', description: 'Generadores profesionales para tratamiento en línea, 4 modelos desde 7g hasta 40g/hora.' },
    { id: 'VT-GRZO-EPSF', name: 'VT GRZO EPSF', description: 'Generadores profesionales de alta capacidad con tecnología avanzada.' },
    { id: 'GZO-EPS', name: 'GZO EPS', description: '6 modelos desde 7g hasta 115g/hora. Incluyen compresor, concentrador de oxígeno y control PLC.' },
    { id: 'GHB-E', name: 'GHB E', description: 'Ideal para agua altamente ozonizada de manera continua y homogénea.' },
  ],
  'Comerciales': [
    { id: 'GZ1', name: 'GAMA GZ1', description: '3 modelos modulares para usar en conjunto con sistema de aire comprimido común.' },
    { id: 'GZ-E', name: 'GAMA GZ - E', description: '4 modelos desde 1g hasta 7g/hora. Con compresor y secador. Control manual.' },
    { id: 'GX500', name: 'GAMA GX 500', description: '2 modelos según alimentación eléctrica. Permite programar franjas de tratamiento.' },
  ],
  'Portátiles': [
    { id: 'HIDRO-GP', name: 'HIDRO GP', description: '1 modelo de 10g/hora. Incluye bomba aceleradora, venturi, compresor, concentrador de oxígeno, PLC y medidor redox.' },
    { id: 'GP-8L', name: 'GP - 8L', description: '1 modelo de 8g/hora. Incluye compresor y secador de aire.' },
    { id: 'GP-16L', name: 'GP - 16L', description: '1 modelo de 16g/hora para aplicaciones portátiles.' },
    { id: 'AEROLIMP', name: 'AEROLIMP 80 - E', description: '1 modelo de 80g/hora para tratamiento de ambientes. Incluye turbina, destructor de ozono y control PLC.' },
  ],
  'Accesorios': [
    { id: 'CONTROL', name: 'Paneles de Control', description: 'Sistemas de control y monitoreo de ozono disuelto.' },
    { id: 'OXIGENO', name: 'Generadores de Oxígeno', description: 'Generadores de oxígeno sin compresor para sistemas de ozono.' },
  ],
}

export default function Catalogo() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos')
  const [selectedGama, setSelectedGama] = useState<string | null>(null)
  const [selectedProduct, setSelectedProduct] = useState<Producto | null>(null)

  const filteredProductos = allProductos.filter(p => {
    // Si está seleccionado "Todos", mostrar todos los productos
    if (selectedCategory === 'Todos') return true
    
    if (p.category !== selectedCategory) return false
    if (!selectedGama) return true
    
    // Filtrar por gama según el nombre del producto
    const name = p.name.toUpperCase()
    if (selectedCategory === 'Industriales') {
      if (selectedGama === 'GRV') return name.includes('GRV')
      if (selectedGama === 'GR') return name.includes('GR') && !name.includes('GRZO') && !name.includes('GRV')
      if (selectedGama === 'GRZO') return name.includes('GRZO')
    }
    if (selectedCategory === 'Plantas Hidro') {
      if (selectedGama === 'HIDRO-V') return name.includes('HIDRO V') && !name.includes('HIDRO VT') && !name.includes('84.')
      if (selectedGama === 'HIDRO-VT') return name.includes('HIDRO VT') && !name.includes('84.')
      if (selectedGama === 'RECIRCULACION') return name.includes('84.')
    }
    if (selectedCategory === 'Profesionales') {
      if (selectedGama === 'VT-GZO-EPS') return name.includes('VT') && name.includes('GZO') && name.includes('EPS')
      if (selectedGama === 'VT-GRZO-EPSF') return name.includes('VT') && name.includes('GRZO') && name.includes('EPSF')
      if (selectedGama === 'GZO-EPS') return name.includes('GZO') && name.includes('EPS') && !name.includes('VT')
      if (selectedGama === 'GHB-E') return name.includes('GHB')
    }
    if (selectedCategory === 'Comerciales') {
      if (selectedGama === 'GZ1') return name.includes('GZ1')
      if (selectedGama === 'GZ-E') return name.includes('GZ') && name.includes('E') && !name.includes('GZ1')
      if (selectedGama === 'GX500') return name.includes('GX500')
    }
    return true
  })

  const categoryGamas = gamas[selectedCategory as keyof typeof gamas] || []
  const selectedCategoryData = categories.find(c => c.id === selectedCategory)

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 relative overflow-hidden">
      {/* Animated Background Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-teal-400/30 rounded-full"
            initial={{
              x: Math.random() * 100 + '%',
              y: Math.random() * 100 + '%',
            }}
            animate={{
              y: [null, Math.random() * 100 + '%'],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Hero Section - Ultra Premium */}
      <section className="relative bg-gradient-to-br from-slate-950 via-teal-950 to-slate-950 py-24 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-ozone-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
            animate={{
              x: [0, -50, 0],
              y: [0, -30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 2,
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 px-5 py-2.5 bg-white/10 backdrop-blur-md rounded-full shadow-lg border border-white/20 mb-6"
            >
              <Sparkles className="w-5 h-5 text-teal-400" />
              <span className="text-sm font-semibold bg-gradient-to-r from-teal-300 via-emerald-300 to-teal-400 bg-clip-text text-transparent">
                Catálogo Premium
              </span>
            </motion.div>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-display font-extrabold mb-8 drop-shadow-2xl">
              <span className="bg-gradient-to-r from-teal-300 via-emerald-300 to-teal-400 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(20,184,166,0.7)]">
                Catálogo de Productos
              </span>
            </h1>
            <p className="text-2xl sm:text-3xl bg-gradient-to-r from-teal-100 via-emerald-100 to-teal-200 bg-clip-text text-transparent max-w-4xl mx-auto leading-relaxed drop-shadow-md font-light">
              Tecnología europea certificada para soluciones de ozono y control ambiental. 
              Encuentra el equipo perfecto para tus necesidades.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sección ¿Qué es el Ozono? - Ultra Premium */}
      <section className="py-20 bg-gradient-to-b from-slate-900/90 via-teal-950/70 to-slate-900/90 backdrop-blur-xl border-y border-teal-700/30 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 via-transparent to-emerald-500/5" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 mb-6"
            >
              <Info className="w-6 h-6 text-teal-400" />
              <h2 className="text-5xl font-bold bg-gradient-to-r from-teal-300 via-emerald-300 to-teal-400 bg-clip-text text-transparent drop-shadow-lg">
                ¿Qué es el Ozono (O₃)?
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-slate-800/90 rounded-3xl p-10 border-2 border-teal-700/50 backdrop-blur-2xl shadow-2xl relative overflow-hidden"
            >
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-teal-500/20 to-transparent rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-emerald-500/20 to-transparent rounded-full blur-2xl" />
              
              <div className="relative z-10 space-y-6">
                <p className="text-teal-100 text-xl leading-relaxed font-light">
                  <strong className="text-teal-300 font-semibold">El ozono es un poderoso oxidante natural</strong> compuesto por tres átomos de oxígeno. Es uno de los desinfectantes más efectivos, eliminando hasta el <strong className="text-emerald-300 font-semibold">99.9% de bacterias, virus, hongos y otros microorganismos.</strong>
                </p>
                <p className="text-teal-100 text-xl leading-relaxed font-light">
                  Los generadores de ozono <strong className="text-teal-300 font-semibold">NTG INNOVA</strong> utilizan <strong className="text-emerald-300 font-semibold">tecnología de punta</strong> para producir ozono de alta calidad, ofreciendo soluciones seguras y eficientes para la desinfección en diversos sectores.
                </p>
                <p className="text-teal-100 text-xl leading-relaxed font-light">
                  <strong className="text-emerald-300 font-semibold">Reducimos costos operativos y la huella de carbono con tecnologías certificadas para aire, agua y procesos industriales.</strong> Evaluación técnica gratuita en 24h.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Premium Category Selector - Ultra Premium Design */}
      <section className="py-14 bg-gradient-to-b from-slate-900/98 via-teal-950/98 to-slate-900/98 backdrop-blur-2xl border-b-2 border-teal-700/40 sticky top-20 z-40 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-8"
          >
            {categories.map((category) => {
              const isActive = selectedCategory === category.id
              return (
                <motion.button
                  key={category.id}
                  onClick={() => {
                    setSelectedCategory(category.id)
                    setSelectedGama(null)
                  }}
                  whileHover={{ scale: 1.08, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-8 py-4 rounded-2xl font-bold text-sm uppercase tracking-wider transition-all duration-500 overflow-hidden ${
                    isActive
                      ? `bg-gradient-to-r ${category.color} text-white shadow-[0_0_40px_rgba(20,184,166,0.6)] border-2 border-white/30`
                      : 'bg-slate-800/80 text-teal-200 hover:bg-slate-700/80 hover:text-teal-300 border-2 border-teal-700/40 backdrop-blur-xl'
                  }`}
                >
                  <span className="flex items-center space-x-3 relative z-10">
                    <span className="text-2xl">{category.icon}</span>
                    <span>{category.label}</span>
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="activeCategory"
                      className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-30`}
                      initial={false}
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                  {/* Shine effect on active */}
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      animate={{
                        x: ['-100%', '100%'],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 2,
                      }}
                    />
                  )}
                </motion.button>
              )
            })}
          </motion.div>

          {/* Gamas Selector - Premium */}
          {selectedCategory !== 'Todos' && categoryGamas.length > 0 && (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="flex flex-wrap items-center justify-center gap-3"
              >
                <Filter className="w-5 h-5 text-teal-400 mr-2" />
                <motion.button
                  onClick={() => setSelectedGama(null)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-5 py-2.5 rounded-xl font-semibold text-xs transition-all duration-300 ${
                    selectedGama === null
                      ? `bg-gradient-to-r ${selectedCategoryData?.color} text-white shadow-lg border-2 border-white/30`
                      : 'bg-slate-700/60 text-teal-200 hover:bg-slate-600/60 border-2 border-teal-700/40'
                  }`}
                >
                  Todas las Gamas
                </motion.button>
                {categoryGamas.map((gama, index) => {
                  const isActive = selectedGama === gama.id
                  return (
                    <motion.button
                      key={gama.id}
                      onClick={() => setSelectedGama(gama.id)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-5 py-2.5 rounded-xl font-semibold text-xs transition-all duration-300 ${
                        isActive
                          ? `bg-gradient-to-r ${selectedCategoryData?.color} text-white shadow-lg border-2 border-white/30`
                          : 'bg-slate-700/60 text-teal-200 hover:bg-slate-600/60 border-2 border-teal-700/40'
                      }`}
                    >
                      {gama.name}
                    </motion.button>
                  )
                })}
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </section>

      {/* Gama Description - Premium */}
      {selectedCategory !== 'Todos' && selectedGama && categoryGamas.find(g => g.id === selectedGama) && (
        <section className="py-10 bg-gradient-to-b from-slate-900/80 via-teal-950/50 to-slate-900/80 backdrop-blur-xl border-b border-teal-700/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-slate-800/90 rounded-2xl p-8 border-2 border-teal-700/50 backdrop-blur-2xl shadow-xl relative overflow-hidden`}
            >
              <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${selectedCategoryData?.color} opacity-10 rounded-full blur-3xl`} />
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-4">
                  <ChevronRight className={`w-6 h-6 bg-gradient-to-r ${selectedCategoryData?.color} bg-clip-text text-transparent`} />
                  <h3 className={`text-3xl font-bold bg-gradient-to-r ${selectedCategoryData?.color} bg-clip-text text-transparent`}>
                    {categoryGamas.find(g => g.id === selectedGama)?.name}
                  </h3>
                </div>
                <p className="text-teal-200 leading-relaxed text-lg font-light">
                  {categoryGamas.find(g => g.id === selectedGama)?.description}
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Products Grid - Ultra Premium */}
      <section className="py-20 bg-gradient-to-b from-slate-900/50 via-teal-950/30 to-slate-900/50 backdrop-blur-sm relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory + selectedGama}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-teal-300 via-emerald-300 to-teal-400 bg-clip-text text-transparent drop-shadow-lg mb-3">
                    {selectedCategory === 'Todos' 
                      ? '📦 Todos los Productos'
                      : `${categories.find(c => c.id === selectedCategory)?.icon} ${selectedCategory}${selectedGama ? ` - ${categoryGamas.find(g => g.id === selectedGama)?.name}` : ''}`
                    }
                  </h2>
                  <p className="text-teal-200 text-lg">
                    Mostrando <strong className="text-white font-semibold text-xl">{filteredProductos.length}</strong> {filteredProductos.length === 1 ? 'producto' : 'productos'}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            {filteredProductos.length > 0 ? (
              <motion.div
                key={`grid-${selectedCategory}-${selectedGama}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
              >
                {filteredProductos.map((producto, index) => (
                  <motion.div
                    key={producto.id}
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.08,
                      type: 'spring',
                      stiffness: 100,
                    }}
                  >
                    <ProductCard 
                      producto={producto} 
                      onViewDetails={setSelectedProduct}
                    />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <div className="bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-slate-800/90 rounded-3xl p-12 border-2 border-teal-700/50 backdrop-blur-2xl shadow-2xl">
                  <p className="text-teal-200 text-xl">No se encontraron productos en esta categoría.</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Product Detail Modal */}
      <ProductDetailModal 
        producto={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </div>
  )
}
