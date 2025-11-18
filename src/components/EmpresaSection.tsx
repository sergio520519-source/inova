import { motion } from 'framer-motion'
import { Target, Eye, Heart, Lightbulb, Leaf, Users } from 'lucide-react'
import { Link } from 'react-router-dom'

const valores = [
  { icon: Lightbulb, title: 'Innovación', description: 'Buscamos constantemente nuevas tecnologías y soluciones' },
  { icon: Leaf, title: 'Sostenibilidad', description: 'Comprometidos con el cuidado del medio ambiente' },
  { icon: Target, title: 'Calidad', description: 'Garantizamos productos y servicios de excelencia' },
  { icon: Heart, title: 'Compromiso', description: 'Dedicación total hacia nuestros clientes' },
  { icon: Users, title: 'Trabajo en equipo', description: 'Colaboración efectiva para lograr objetivos' },
]

export default function EmpresaSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-primary-600 to-ozone-600 bg-clip-text text-transparent">
              NTG INNOVA
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            <strong>NTG INNOVA (Colombia 2020).</strong> Integra tecnología europea certificada 
            para soluciones de ozono, monitoreo y control ambiental. Diseñamos, instalamos y 
            acompañamos proyectos que reducen el consumo energético, minimizan el impacto 
            ambiental y certifican la huella de carbono. <strong>Ingeniería, garantía con resultados medibles.</strong>
          </p>
        </motion.div>

        {/* Three Columns */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center p-8 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl"
          >
            <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">¿QUÉ HACEMOS?</h3>
            <p className="text-gray-700 leading-relaxed">
              Nos especializamos en la <strong>importación de tecnologías</strong> de control y 
              monitoreo ambiental. Desarrollamos <strong>alianzas estratégicas</strong> con empresas 
              europeas líderes para ofrecer soluciones personalizadas en <strong>agua, aire y energía</strong>.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center p-8 bg-gradient-to-br from-ozone-50 to-ozone-100 rounded-2xl"
          >
            <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">¿CÓMO?</h3>
            <p className="text-gray-700 leading-relaxed">
              Trabajamos junto a empresas como <strong>Haltiall</strong> e <strong>Iberdesa</strong>, 
              integrando <strong>tecnología española de vanguardia</strong> para garantizar la 
              <strong> calidad</strong> y la <strong>sostenibilidad empresarial</strong>.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl"
          >
            <Target className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">MISIÓN</h3>
            <p className="text-gray-700 leading-relaxed">
              Impulsar la <strong>innovación tecnológica</strong> para el uso responsable de los 
              <strong> recursos naturales</strong>, reduciendo el impacto ambiental y contribuyendo 
              a la <strong>mitigación del cambio climático</strong>.
            </p>
          </motion.div>
        </div>

        {/* Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-primary-600 to-ozone-600 rounded-3xl p-12 text-white text-center mb-20"
        >
          <Eye className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h3 className="text-3xl sm:text-4xl font-display font-bold mb-6">VISIÓN</h3>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed opacity-95">
            Ser <strong>líderes en soluciones sostenibles y tecnológicas</strong> en Latinoamérica, 
            transformando los desafíos ambientales en <strong>oportunidades de crecimiento y desarrollo</strong>.
          </p>
        </motion.div>

        {/* Valores */}
        <div>
          <h3 className="text-3xl sm:text-4xl font-display font-bold text-center text-gray-900 mb-12">
            VALORES
          </h3>
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
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-ozone-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-display font-bold text-lg text-gray-900 mb-2">{valor.title}</h4>
                  <p className="text-sm text-gray-600">{valor.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <Link
            to="/empresa"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-ozone-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Conoce más sobre nosotros
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

