import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { Languages, Check, Globe } from 'lucide-react'

const languages = [
  { code: 'es' as const, name: 'Español', flag: '🇪🇸', native: 'Español' },
  { code: 'en' as const, name: 'English', flag: '🇺🇸', native: 'English' },
  { code: 'pt' as const, name: 'Português', flag: '🇧🇷', native: 'Português' },
  { code: 'fr' as const, name: 'Français', flag: '🇫🇷', native: 'Français' },
]

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const currentLang = languages.find(l => l.code === language) || languages[0]

  return (
    <div className="fixed top-24 left-4 z-40">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-gradient-to-br from-teal-900/95 via-emerald-900/95 to-teal-950/95 backdrop-blur-xl rounded-xl p-3 shadow-2xl border border-teal-500/30 hover:border-teal-400/50 transition-all group"
      >
        <div className="flex items-center space-x-2">
          <div className="relative">
            <Globe className="w-5 h-5 text-teal-400 group-hover:text-teal-300 transition-colors" />
            <div className="absolute inset-0 bg-teal-400/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          <div className="text-left">
            <div className="flex items-center space-x-1.5">
              <span className="text-lg">{currentLang.flag}</span>
              <span className="text-sm font-semibold bg-gradient-to-r from-teal-300 to-emerald-300 bg-clip-text text-transparent">
                {currentLang.code.toUpperCase()}
              </span>
            </div>
          </div>
        </div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="fixed top-32 left-4 z-50 w-64"
            >
              <div className="bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 rounded-2xl p-4 shadow-2xl border border-teal-500/30 backdrop-blur-xl">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="p-2 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-lg">
                    <Languages className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold bg-gradient-to-r from-teal-300 to-emerald-300 bg-clip-text text-transparent">
                      Idioma
                    </h3>
                    <p className="text-xs text-teal-200/70">Selecciona idioma</p>
                  </div>
                </div>

                <div className="space-y-2">
                  {languages.map((lang, index) => {
                    const isSelected = lang.code === language
                    return (
                      <motion.button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code)
                          setIsOpen(false)
                        }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ scale: 1.02, x: 4 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all ${
                          isSelected
                            ? 'bg-gradient-to-r from-teal-500/20 to-emerald-500/20 border-2 border-teal-500/50'
                            : 'bg-teal-900/30 hover:bg-teal-800/50 border border-teal-700/30'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{lang.flag}</span>
                          <div className="text-left">
                            <p className={`font-semibold ${isSelected ? 'text-teal-200' : 'text-teal-300'}`}>
                              {lang.name}
                            </p>
                            <p className="text-xs text-teal-300/70">{lang.native}</p>
                          </div>
                        </div>
                        {isSelected && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="p-1 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full"
                          >
                            <Check className="w-4 h-4 text-white" />
                          </motion.div>
                        )}
                      </motion.button>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

