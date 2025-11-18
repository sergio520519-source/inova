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
      <section className="bg-gradient-to-br from-primary-50 via-white to-ozone-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Droplets className="w-16 h-16 text-primary-600 mx-auto mb-6" />
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-primary-600 to-ozone-600 bg-clip-text text-transparent">
                Uso del Ozono
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Descubre las múltiples aplicaciones de la tecnología de ozono para el control ambiental 
              y la eficiencia energética.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is Ozone */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
                ¿Qué es el Ozono?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                El ozono (O₃) es una molécula compuesta por tres átomos de oxígeno. Es uno de los 
                oxidantes más potentes conocidos y se utiliza eficazmente para la desinfección y 
                purificación del agua y el aire.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Su capacidad oxidante es superior a la del cloro, lo que lo convierte en una 
                alternativa más eficiente y sostenible para el tratamiento de aguas y control ambiental.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-primary-100 to-ozone-100 rounded-2xl p-8"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Potente Desinfectante</h3>
                    <p className="text-sm text-gray-600">Elimina virus, bacterias y hongos</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-ozone-600 rounded-lg flex items-center justify-center">
                    <Leaf className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">100% Natural</h3>
                    <p className="text-sm text-gray-600">No genera residuos químicos</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Eficiente</h3>
                    <p className="text-sm text-gray-600">Menor consumo energético</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-gray-900 mb-6">
              Aplicaciones del Ozono
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-ozone-500 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">{uso.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{uso.description}</p>
                  <ul className="space-y-2">
                    {uso.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-primary-600 rounded-full"></div>
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-gray-900 mb-6">
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
                  className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center border border-gray-100"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-ozone-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-gray-900 mb-2">{beneficio.title}</h3>
                  <p className="text-sm text-gray-600">{beneficio.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

