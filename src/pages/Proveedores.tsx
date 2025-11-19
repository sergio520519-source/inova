import { motion } from 'framer-motion'
import { Award, Globe, Users, CheckCircle } from 'lucide-react'

const proveedores = [
  {
    name: 'Haltiall',
    country: 'España',
    description: 'Líder en tecnología de ozono y soluciones ambientales. Tecnología certificada europea.',
    specialties: ['Generadores de ozono', 'Plantas industriales', 'Control ambiental'],
  },
  {
    name: 'Iberdesa',
    country: 'España',
    description: 'Empresa especializada en ingeniería ambiental y soluciones sostenibles.',
    specialties: ['Ingeniería ambiental', 'Sostenibilidad', 'Certificaciones'],
  },
]

const beneficios = [
  {
    icon: CheckCircle,
    title: 'Tecnología Certificada',
    description: 'Todos nuestros proveedores cuentan con certificaciones europeas y garantías de calidad.',
  },
  {
    icon: Globe,
    title: 'Tecnología Europea',
    description: 'Acceso a las últimas innovaciones tecnológicas desarrolladas en Europa.',
  },
  {
    icon: Users,
    title: 'Alianzas Estratégicas',
    description: 'Relaciones sólidas que garantizan soporte técnico y servicio post-venta.',
  },
  {
    icon: Award,
    title: 'Calidad Garantizada',
    description: 'Productos y servicios que cumplen con los más altos estándares internacionales.',
  },
]

export default function Proveedores() {
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
            <Users className="w-16 h-16 text-primary-600 mx-auto mb-6" />
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-primary-600 to-ozone-600 bg-clip-text text-transparent">
                Nuestros Proveedores
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Trabajamos con empresas líderes europeas que comparten nuestro compromiso con la 
              calidad, innovación y sostenibilidad.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Suppliers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {proveedores.map((proveedor, index) => (
              <motion.div
                key={proveedor.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-xl border border-gray-200"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-ozone-500 rounded-xl flex items-center justify-center">
                    <Award className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Globe className="w-4 h-4" />
                    <span>{proveedor.country}</span>
                  </div>
                </div>
                <h3 className="text-3xl font-display font-bold text-gray-900 mb-4">
                  {proveedor.name}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">{proveedor.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Especialidades:</h4>
                  <div className="flex flex-wrap gap-2">
                    {proveedor.specialties.map((specialty, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-semibold rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
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
              Beneficios de Nuestras Alianzas
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
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center border border-gray-100"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-ozone-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-gray-900 mb-2">
                    {beneficio.title}
                  </h3>
                  <p className="text-sm text-gray-600">{beneficio.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-ozone-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h2 className="text-4xl font-display font-bold mb-6">
              ¿Quieres ser nuestro proveedor?
            </h2>
            <p className="text-xl mb-8 opacity-95">
              Estamos siempre interesados en trabajar con empresas que compartan nuestros valores 
              de calidad, innovación y sostenibilidad.
            </p>
            <button className="px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors shadow-lg">
              Contáctanos
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

