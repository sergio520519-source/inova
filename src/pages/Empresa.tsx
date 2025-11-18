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
      <section className="bg-gradient-to-br from-primary-50 via-white to-ozone-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-primary-600 to-ozone-600 bg-clip-text text-transparent">
                Sobre NTG INNOVA
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Impulsamos el desarrollo tecnológico con propósito. Innovamos, transformamos 
              y conectamos soluciones sostenibles para un mundo más eficiente y limpio.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">NTG INNOVA (Colombia 2020)</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Integra tecnología europea certificada para soluciones de ozono, monitoreo y control ambiental. 
                Diseñamos, instalamos y acompañamos proyectos que reducen el consumo energético, minimizan el 
                impacto ambiental y certifican la huella de carbono. <strong>Ingeniería, garantía con resultados medibles.</strong>
              </p>

              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="p-6 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl">
                  <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">¿QUÉ HACEMOS?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Nos especializamos en la <strong>importación de tecnologías</strong> de control y monitoreo ambiental. 
                    Desarrollamos <strong>alianzas estratégicas</strong> con empresas europeas líderes para ofrecer 
                    soluciones personalizadas en <strong>agua, aire y energía</strong>.
                  </p>
                </div>

                <div className="p-6 bg-gradient-to-br from-ozone-50 to-ozone-100 rounded-xl">
                  <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">¿CÓMO?</h3>
                  <p className="text-gray-700 leading-relaxed">
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-primary-600 to-ozone-600 rounded-3xl p-10 text-white"
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
              className="bg-white rounded-3xl p-10 shadow-xl border border-gray-200"
            >
              <Eye className="w-16 h-16 text-primary-600 mb-6" />
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">VISIÓN</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ser <strong>líderes en soluciones sostenibles y tecnológicas</strong> en Latinoamérica, 
                transformando los desafíos ambientales en <strong>oportunidades de crecimiento y desarrollo</strong>.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <Award className="w-16 h-16 text-primary-600 mx-auto mb-6" />
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-gray-900 mb-6">
              NUESTROS VALORES
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                  className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-ozone-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-gray-900 mb-3">{valor.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{valor.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

