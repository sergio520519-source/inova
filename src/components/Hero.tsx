import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-teal-950 to-slate-950">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-ozone-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full shadow-lg border border-white/20 mb-6"
          >
            <Sparkles className="w-4 h-4 text-teal-400" />
            <span className="text-sm font-semibold bg-gradient-to-r from-teal-300 via-emerald-300 to-teal-400 bg-clip-text text-transparent">
              {t('hero.badge')}
            </span>
          </motion.div>

          {/* Main Heading - Ultra Premium with Text Shadow */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-extrabold leading-tight drop-shadow-2xl mb-6"
          >
            <span className="block bg-gradient-to-r from-teal-300 via-emerald-300 to-teal-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(20,184,166,0.6)]">
              {t('hero.title')}
            </span>
            <span className="block mt-2 bg-gradient-to-r from-teal-200 via-emerald-200 to-teal-300 bg-clip-text text-transparent drop-shadow-lg">
              {t('hero.subtitle')}
            </span>
          </motion.h1>

          {/* Description - More Visible */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-3xl mx-auto text-xl sm:text-2xl bg-gradient-to-r from-teal-100 via-emerald-100 to-teal-200 bg-clip-text text-transparent leading-relaxed drop-shadow-md mb-8"
          >
            {t('hero.description')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link
              to="/catalogo"
              className="group inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-ozone-600 text-white font-semibold rounded-xl shadow-2xl hover:shadow-[0_0_30px_rgba(2,132,199,0.5)] transform hover:scale-105 transition-all duration-300"
            >
              <span>{t('hero.cta.catalogo')}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contacto"
              className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-xl shadow-lg hover:shadow-xl border-2 border-white/20 hover:border-white/40 transform hover:scale-105 transition-all duration-300"
            >
              {t('hero.cta.asesoria')}
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Factory Image - Professional Display Below Text - ULTRA PREMIUM */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 mb-8"
      >
        <div className="relative rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(20,184,166,0.3)] border-4 border-teal-500/30 bg-gradient-to-br from-slate-900 to-teal-950">
          {/* Premium Frame Effect with Glow - Lighter overlays */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-transparent to-ozone-500/20 pointer-events-none z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none z-10"></div>
          <div className="absolute -inset-1 bg-gradient-to-r from-primary-500/30 via-teal-500/30 to-ozone-500/30 rounded-3xl blur-xl pointer-events-none z-0"></div>
          
          {/* Factory Image - Always visible with premium styling */}
          <div className="relative z-0">
            <img
              src="/products/factory-hero.jpg"
              alt="Nuestra Fábrica - Instalaciones Industriales Premium"
              className="w-full h-auto object-cover"
              style={{ 
                minHeight: '500px', 
                maxHeight: '700px', 
                display: 'block', 
                width: '100%',
                objectPosition: 'center'
              }}
              loading="eager"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                if (target.src.indexOf('iamngen') === -1) {
                  target.src = '/products/iamngen embalse.jpg'
                }
              }}
            />
            {/* Premium Overlay Gradient - Lighter for better visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-slate-900/10 to-transparent z-10 pointer-events-none"></div>
          </div>
          
          {/* Shine Effect - Premium */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-400/20 to-transparent animate-shine pointer-events-none z-20"></div>
          
          {/* Professional Badge Overlay - Ultra Premium */}
          <div className="absolute bottom-6 left-6 right-6 z-30">
            <div className="bg-gradient-to-br from-white/95 via-white/90 to-white/95 backdrop-blur-xl rounded-2xl p-5 shadow-2xl border-2 border-teal-400/30">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-primary-600 to-teal-600 bg-clip-text text-transparent mb-1">
                    {t('hero.factory.title')}
                  </h3>
                  <p className="text-sm text-gray-700 font-medium">{t('hero.factory.subtitle')}</p>
                </div>
                <div className="flex gap-2">
                  <span className="px-4 py-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg text-xs font-bold shadow-lg">CE</span>
                  <span className="px-4 py-2 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-lg text-xs font-bold shadow-lg">ISO 9001</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Stats Below Image */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 z-10"
      >
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {[
            { label: t('hero.stats.experiencia'), value: '5+' },
            { label: t('hero.stats.clientes'), value: '100+' },
            { label: t('hero.stats.proyectos'), value: '200+' },
            { label: t('hero.stats.tecnologia'), value: '100%' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-teal-300 via-emerald-300 to-teal-400 bg-clip-text text-transparent drop-shadow-lg">
                {stat.value}
              </div>
              <div className="text-sm bg-gradient-to-r from-teal-200 to-emerald-200 bg-clip-text text-transparent mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  )
}
