import { motion } from 'framer-motion'
import { Target, Eye, Heart, Lightbulb, Leaf, Users, Award } from 'lucide-react'

const valores = [
  { icon: Lightbulb, title: 'Innovación', description: 'Buscamos constantemente nuevas tecnologías y soluciones' },
  { icon: Leaf, title: 'Sostenibilidad', description: 'Comprometidos con el cuidado del medio ambiente' },
  { icon: Target, title: 'Calidad', description: 'Garantizamos productos y servicios de excelencia' },
  { icon: Heart, title: 'Compromiso', description: 'Dedicación total hacia nuestros clientes' },
  { icon: Users, title: 'Trabajo en equipo', description: 'Colaboración efectiva para lograr objetivos' },
]

export default function Empresa() {
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
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-white mb-6 drop-shadow-2xl">
              <span className="bg-gradient-to-r from-cyan-300 via-blue-200 to-cyan-400 bg-clip-text text-transparent">
                Sobre NTG INNOVA
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              Impulsamos el desarrollo tecnológico con propósito. Innovamos, transformamos 
              y conectamos soluciones sostenibles para un mundo más eficiente y limpio.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-20 bg-gradient-to-b from-blue-950/50 via-blue-900/40 to-blue-950/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-4xl font-display font-bold text-white mb-6 drop-shadow-lg">NTG INNOVA (Colombia 2020)</h2>
              <p className="text-lg text-blue-100 leading-relaxed mb-6 drop-shadow-md">
                Integra tecnología europea certificada para soluciones de ozono, monitoreo y control ambiental. 
                Diseñamos, instalamos y acompañamos proyectos que reducen el consumo energético, minimizan el 
                impacto ambiental y certifican la huella de carbono. <strong>Ingeniería, garantía con resultados medibles.</strong>
              </p>

              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="p-6 bg-gradient-to-br from-blue-800/40 to-blue-700/30 backdrop-blur-md rounded-xl border border-blue-600/30 shadow-xl">
                  <h3 className="text-2xl font-display font-bold text-white mb-4">¿QUÉ HACEMOS?</h3>
                  <p className="text-blue-100 leading-relaxed">
                    Nos especializamos en la <strong>importación de tecnologías</strong> de control y monitoreo ambiental. 
                    Desarrollamos <strong>alianzas estratégicas</strong> con empresas europeas líderes para ofrecer 
                    soluciones personalizadas en <strong>agua, aire y energía</strong>.
                  </p>
                </div>

                <div className="p-6 bg-gradient-to-br from-cyan-800/40 to-blue-700/30 backdrop-blur-md rounded-xl border border-cyan-600/30 shadow-xl">
                  <h3 className="text-2xl font-display font-bold text-white mb-4">¿CÓMO?</h3>
                  <p className="text-blue-100 leading-relaxed">
                    Trabajamos junto a empresas como <strong>Haltiall</strong> e <strong>Iberdesa</strong>, 
                    integrando <strong>tecnología española de vanguardia</strong> para garantizar la 
                    <strong> calidad</strong> y la <strong>sostenibilidad empresarial</strong>.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-b from-blue-950/40 via-blue-900/30 to-blue-950/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 rounded-3xl p-10 text-white shadow-2xl border border-cyan-400/30"
            >
              <Target className="w-16 h-16 mb-6 opacity-90" />
              <h2 className="text-3xl font-display font-bold mb-6">MISIÓN</h2>
              <p className="text-lg leading-relaxed opacity-95">
                Impulsar la <strong>innovación tecnológica</strong> para el uso responsable de los 
                <strong> recursos naturales</strong>, reduciendo el impacto ambiental y contribuyendo 
                a la <strong>mitigación del cambio climático</strong>.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-blue-800/50 to-blue-700/40 backdrop-blur-md rounded-3xl p-10 shadow-2xl border border-blue-500/30"
            >
              <Eye className="w-16 h-16 text-cyan-300 mb-6" />
              <h2 className="text-3xl font-display font-bold text-white mb-6">VISIÓN</h2>
              <p className="text-lg text-blue-100 leading-relaxed">
                Ser <strong>líderes en soluciones sostenibles y tecnológicas</strong> en Latinoamérica, 
                transformando los desafíos ambientales en <strong>oportunidades de crecimiento y desarrollo</strong>.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 bg-gradient-to-b from-blue-950/50 via-blue-900/40 to-blue-950/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <Award className="w-16 h-16 text-cyan-300 mx-auto mb-6" />
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-6 drop-shadow-lg">
              NUESTROS VALORES
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto drop-shadow-md">
              Los principios que guían nuestro trabajo y compromiso con la excelencia
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {valores.map((valor, index) => {
              const Icon = valor.icon
              return (
                <motion.div
                  key={valor.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-blue-800/50 to-blue-700/40 backdrop-blur-md p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-blue-500/30 text-center hover:scale-105"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-white mb-3">{valor.title}</h3>
                  <p className="text-blue-100 leading-relaxed">{valor.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

