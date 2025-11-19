import { motion } from 'framer-motion'
import { Droplets, Wind, Shield, Zap, Factory, Heart, Leaf } from 'lucide-react'

const usos = [
  {
    icon: Droplets,
    title: 'Tratamiento de Aguas',
    description: 'Desinfección y purificación de aguas residuales, potables y de proceso industrial.',
    benefits: ['Eliminación de microorganismos', 'Reducción de químicos', 'Mejora de calidad'],
  },
  {
    icon: Wind,
    title: 'Purificación del Aire',
    description: 'Eliminación de olores, compuestos orgánicos volátiles y mejora de la calidad del aire.',
    benefits: ['Control de olores industriales', 'Eliminación de COV', 'Ambientes más saludables'],
  },
  {
    icon: Factory,
    title: 'Aplicaciones Industriales',
    description: 'Soluciones para procesos industriales que requieren desinfección y control ambiental.',
    benefits: ['Procesos más eficientes', 'Cumplimiento normativo', 'Reducción de costos'],
  },
  {
    icon: Heart,
    title: 'Salud y Bienestar',
    description: 'Creación de ambientes más saludables en espacios comerciales y residenciales.',
    benefits: ['Ambientes más limpios', 'Prevención de enfermedades', 'Bienestar general'],
  },
]

const beneficios = [
  { icon: Shield, title: 'Desinfección Efectiva', description: 'Eliminación del 99.9% de microorganismos' },
  { icon: Leaf, title: 'Sostenible', description: 'No genera residuos químicos dañinos' },
  { icon: Zap, title: 'Eficiencia Energética', description: 'Reduce el consumo energético hasta un 30%' },
  { icon: Heart, title: 'Seguro', description: 'Tecnología certificada y probada' },
]

export default function UsoOzono() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Droplets className="w-16 h-16 text-cyan-300 mx-auto mb-6" />
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-white mb-6 drop-shadow-2xl">
              <span className="bg-gradient-to-r from-cyan-300 via-blue-200 to-cyan-400 bg-clip-text text-transparent">
                Uso del Ozono
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              Descubre las múltiples aplicaciones de la tecnología de ozono para el control ambiental 
              y la eficiencia energética.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is Ozone */}
      <section className="py-20 bg-gradient-to-b from-blue-950/50 via-blue-900/40 to-blue-950/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-display font-bold text-white mb-6 drop-shadow-lg">
                ¿Qué es el Ozono?
              </h2>
              <p className="text-lg text-blue-100 leading-relaxed mb-6 drop-shadow-md">
                El ozono (O₃) es una molécula compuesta por tres átomos de oxígeno. Es uno de los 
                oxidantes más potentes conocidos y se utiliza eficazmente para la desinfección y 
                purificación del agua y el aire.
              </p>
              <p className="text-lg text-blue-100 leading-relaxed drop-shadow-md">
                Su capacidad oxidante es superior a la del cloro, lo que lo convierte en una 
                alternativa más eficiente y sostenible para el tratamiento de aguas y control ambiental.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-blue-800/40 to-blue-700/30 backdrop-blur-md rounded-2xl p-8 border border-blue-600/30 shadow-xl"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Potente Desinfectante</h3>
                    <p className="text-sm text-blue-100">Elimina virus, bacterias y hongos</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center shadow-lg">
                    <Leaf className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">100% Natural</h3>
                    <p className="text-sm text-blue-100">No genera residuos químicos</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center shadow-lg">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Eficiente</h3>
                    <p className="text-sm text-blue-100">Menor consumo energético</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-gradient-to-b from-blue-950/40 via-blue-900/30 to-blue-950/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-6 drop-shadow-lg">
              Aplicaciones del Ozono
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto drop-shadow-md">
              Soluciones versátiles para múltiples sectores y necesidades
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {usos.map((uso, index) => {
              const Icon = uso.icon
              return (
                <motion.div
                  key={uso.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-blue-800/50 to-blue-700/40 backdrop-blur-md rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all border border-blue-500/30 hover:scale-105"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-4">{uso.title}</h3>
                  <p className="text-blue-100 mb-6 leading-relaxed">{uso.description}</p>
                  <ul className="space-y-2">
                    {uso.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-blue-100">
                        <div className="w-1.5 h-1.5 bg-cyan-300 rounded-full"></div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gradient-to-b from-blue-950/50 via-blue-900/40 to-blue-950/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-6 drop-shadow-lg">
              Beneficios Principales
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {beneficios.map((beneficio, index) => {
              const Icon = beneficio.icon
              return (
                <motion.div
                  key={beneficio.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-blue-800/50 to-blue-700/40 backdrop-blur-md p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all text-center border border-blue-500/30 hover:scale-105"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-white mb-2">{beneficio.title}</h3>
                  <p className="text-sm text-blue-100">{beneficio.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

