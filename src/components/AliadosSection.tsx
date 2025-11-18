import { motion } from 'framer-motion'
import { Award, Globe } from 'lucide-react'

const aliados = [
  { name: 'Haltiall', logo: 'HALTIALL', description: 'Tecnología de vanguardia' },
  { name: 'Iberdesa', logo: 'IBERDESA', description: 'Soluciones sostenibles' },
  { name: 'Kizutbim', logo: 'KIZUTBIM', description: 'Innovación ambiental' },
  { name: 'Tesla', logo: 'TESLA', description: 'Energía limpia' },
  { name: 'EPM', logo: 'EPM', description: 'Servicios públicos' },
  { name: 'Fedepymagro', logo: 'FEDEPYMAGRO', description: 'Asociación agropecuaria' },
  { name: 'Fenalco', logo: 'FENALCO', description: 'Comercio certificado' },
]

export default function AliadosSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Globe className="w-16 h-16 text-primary-600 mx-auto mb-6" />
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
            Nuestros Aliados y Clientes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Trabajamos con empresas líderes que confían en nuestra tecnología 
            y compromiso con la sostenibilidad.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {aliados.map((aliado, index) => (
            <motion.div
              key={aliado.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 text-center border border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-ozone-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-display font-bold text-lg text-gray-900 mb-2">{aliado.logo}</h3>
              <p className="text-sm text-gray-600">{aliado.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-primary-600 to-ozone-600 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-display font-bold mb-4">
            ¿Quieres ser nuestro aliado?
          </h3>
          <p className="text-lg opacity-95 mb-6">
            Únete a nuestra red de empresas comprometidas con la sostenibilidad y la innovación.
          </p>
          <button className="px-8 py-3 bg-white text-primary-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors">
            Contáctanos
          </button>
        </motion.div>
      </div>
    </section>
  )
}

