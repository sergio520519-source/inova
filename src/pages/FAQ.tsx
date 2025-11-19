import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  {
    question: '¿Qué es el ozono y cómo funciona?',
    answer: 'El ozono (O₃) es una molécula compuesta por tres átomos de oxígeno. Es uno de los oxidantes más potentes conocidos y se utiliza eficazmente para la desinfección y purificación del agua y el aire. Su capacidad oxidante es superior a la del cloro, lo que lo convierte en una alternativa más eficiente y sostenible.',
  },
  {
    question: '¿Cuáles son los beneficios del uso de ozono?',
    answer: 'El ozono ofrece múltiples beneficios: eliminación efectiva de microorganismos (99.9%), no genera residuos químicos dañinos, reduce el consumo energético hasta un 30%, y es una tecnología certificada y segura. Además, mejora la calidad del agua y del aire sin dejar sabor u olor residual.',
  },
  {
    question: '¿Es seguro el ozono para uso humano?',
    answer: 'Sí, cuando se utiliza correctamente con equipos certificados y siguiendo los protocolos establecidos. El ozono es seguro para el tratamiento de agua potable y aire en espacios controlados. Todos nuestros equipos cumplen con las normativas europeas de seguridad.',
  },
  {
    question: '¿Qué tipo de equipos ofrecen?',
    answer: 'Ofrecemos una amplia gama de generadores de ozono y plantas de tratamiento, desde equipos comerciales hasta soluciones industriales de gran capacidad. Incluimos generadores profesionales, plantas de ozono, y sistemas de recirculación para diferentes aplicaciones.',
  },
  {
    question: '¿Ofrecen asesoría técnica?',
    answer: 'Sí, ofrecemos asesoría técnica gratuita. Nuestros ingenieros te ayudan con el dimensionamiento técnico del equipo, protocolos de desinfección según normativa, y análisis de necesidades para tu sector. Evaluación gratuita en 24 horas.',
  },
  {
    question: '¿Cuánto tiempo tarda la instalación?',
    answer: 'El tiempo de instalación depende del tipo de equipo y la complejidad del proyecto. Para equipos comerciales puede ser de 1-2 días, mientras que instalaciones industriales pueden requerir varias semanas. Te proporcionaremos un cronograma detallado durante la evaluación inicial.',
  },
  {
    question: '¿Qué garantías ofrecen?',
    answer: 'Todos nuestros equipos cuentan con garantía del fabricante y soporte técnico. La duración de la garantía varía según el tipo de equipo, pero generalmente incluye garantía de 1-2 años en partes y servicio técnico especializado.',
  },
  {
    question: '¿Realizan mantenimiento de los equipos?',
    answer: 'Sí, ofrecemos servicios de mantenimiento preventivo y correctivo. Incluimos planes de mantenimiento periódico para asegurar el óptimo funcionamiento de los equipos y extender su vida útil.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

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
            <HelpCircle className="w-16 h-16 text-cyan-300 mx-auto mb-6" />
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-white mb-6 drop-shadow-2xl">
              <span className="bg-gradient-to-r from-cyan-300 via-blue-200 to-cyan-400 bg-clip-text text-transparent">
                Preguntas Frecuentes
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              Encuentra respuestas a las preguntas más comunes sobre nuestros productos y servicios
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-blue-950/50 via-blue-900/40 to-blue-950/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-800/50 to-blue-700/40 backdrop-blur-md rounded-xl border border-blue-500/30 shadow-xl overflow-hidden hover:scale-105 transition-all"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-blue-800/30 transition-colors"
                >
                  <span className="font-semibold text-white pr-4">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-cyan-300 flex-shrink-0" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-0">
                        <div className="pt-4 border-t border-blue-600/30">
                          <p className="text-blue-100 leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 rounded-2xl p-8 text-white shadow-2xl border border-cyan-400/30">
              <h3 className="text-2xl font-display font-bold mb-4">
                ¿No encontraste lo que buscabas?
              </h3>
              <p className="text-lg mb-6 opacity-95">
                Nuestro equipo está listo para responder todas tus preguntas
              </p>
              <a
                href="/contacto"
                className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors"
              >
                Contáctanos
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

