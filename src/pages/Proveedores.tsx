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
            <Users className="w-16 h-16 text-cyan-300 mx-auto mb-6" />
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-white mb-6 drop-shadow-2xl">
              <span className="bg-gradient-to-r from-cyan-300 via-blue-200 to-cyan-400 bg-clip-text text-transparent">
                Nuestros Proveedores
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              Trabajamos con empresas líderes europeas que comparten nuestro compromiso con la 
              calidad, innovación y sostenibilidad.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Suppliers */}
      <section className="py-20 bg-gradient-to-b from-blue-950/50 via-blue-900/40 to-blue-950/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {proveedores.map((proveedor, index) => (
              <motion.div
                key={proveedor.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-to-br from-blue-800/50 to-blue-700/40 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-blue-500/30 hover:scale-105 transition-all"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Award className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-blue-100">
                    <Globe className="w-4 h-4" />
                    <span>{proveedor.country}</span>
                  </div>
                </div>
                <h3 className="text-3xl font-display font-bold text-white mb-4">
                  {proveedor.name}
                </h3>
                <p className="text-blue-100 leading-relaxed mb-6">{proveedor.description}</p>
                <div>
                  <h4 className="font-semibold text-white mb-3">Especialidades:</h4>
                  <div className="flex flex-wrap gap-2">
                    {proveedor.specialties.map((specialty, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-cyan-500/30 text-cyan-200 text-sm font-semibold rounded-full border border-cyan-400/30"
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
                  className="bg-gradient-to-br from-blue-800/50 to-blue-700/40 backdrop-blur-md p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all text-center border border-blue-500/30 hover:scale-105"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-white mb-2">
                    {beneficio.title}
                  </h3>
                  <p className="text-sm text-blue-100">{beneficio.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600">
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
            <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors shadow-lg">
              Contáctanos
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

