import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Globe, Calculator, LogOut, User } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useAuth } from '../contexts/AuthContext'
import { useLanguage } from '../contexts/LanguageContext'
import CalculadoraBeneficios from './CalculadoraBeneficios'

const navItemsKeys = [
  { path: '/', key: 'nav.inicio' },
  { path: '/empresa', key: 'nav.empresa' },
  { path: '/catalogo', key: 'nav.catalogo' },
  { path: '/uso-del-ozono', key: 'nav.uso-ozono' },
  { path: '/proveedores', key: 'nav.proveedores' },
  { path: '/rpm', key: 'nav.rpm' },
  { path: '/faq', key: 'nav.faq' },
  { path: '/contacto', key: 'nav.contacto' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mostrarCalculadora, setMostrarCalculadora] = useState(false)
  const { isAuthenticated, user, logout } = useAuth()
  const { t } = useLanguage()
  const location = useLocation()
  
  const navItems = navItemsKeys.map(item => ({
    ...item,
    label: t(item.key)
  }))

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gradient-to-r from-slate-900/98 via-teal-950/98 to-slate-900/98 backdrop-blur-xl shadow-2xl border-b border-teal-700/30'
          : 'bg-gradient-to-r from-slate-900/95 via-teal-950/95 to-slate-900/95 backdrop-blur-lg'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative flex items-center">
              {/* Animated Glow Effect - Ozone Bubbles */}
              <div className="absolute -inset-2 bg-gradient-to-r from-teal-400/30 via-emerald-400/30 to-teal-500/30 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 animate-pulse"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-500/20 via-emerald-500/20 to-teal-600/20 rounded-xl blur-lg opacity-50 group-hover:opacity-75"></div>
              
              {/* Logo Image - Premium with Ozone-inspired effects */}
              <div className="relative bg-gradient-to-br from-white via-teal-50/30 to-emerald-50/30 rounded-xl p-3 shadow-2xl border-2 border-teal-400/60 backdrop-blur-sm group-hover:border-teal-300/80 transition-all duration-300">
                {/* Animated particles around logo (ozone molecules) */}
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-teal-400 rounded-full animate-ping opacity-75"></div>
                <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping opacity-75" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute top-1/2 -left-2 w-1 h-1 bg-teal-300 rounded-full animate-pulse"></div>
                
                <img
                  src="/products/ntggas.logo.png"
                  alt="NTG INNOVA Logo - Tecnología de Ozono"
                  className="h-16 w-auto object-contain relative z-10 filter drop-shadow-lg"
                  loading="eager"
                  style={{ display: 'block', minWidth: '160px', maxWidth: '220px' }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                    // Show fallback
                    const fallback = target.parentElement?.parentElement?.querySelector('.logo-fallback') as HTMLElement
                    if (fallback) fallback.style.display = 'flex'
                  }}
                />
                
                {/* Shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-200/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shine"></div>
              </div>
              
              {/* Fallback Text Logo - Enhanced */}
              <div className="logo-fallback hidden items-center relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-400/30 to-emerald-400/30 rounded-xl blur-lg"></div>
                <div className="relative bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-700 text-white px-4 py-2 rounded-lg font-bold text-xl font-display shadow-2xl border-2 border-teal-400/50">
                  NTG
                </div>
              </div>
            </div>
            <span className="font-display font-bold text-2xl bg-gradient-to-r from-teal-400 via-emerald-400 to-teal-500 bg-clip-text text-transparent group-hover:from-teal-300 group-hover:via-emerald-300 group-hover:to-teal-400 transition-all drop-shadow-lg">
              INNOVA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-4 py-2 font-semibold text-sm uppercase tracking-wide transition-colors rounded-lg ${
                    isActive
                      ? 'text-teal-400 bg-teal-900/30'
                      : 'text-teal-100 hover:text-teal-400 hover:bg-teal-900/20'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full shadow-lg shadow-teal-400/50"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* User Info, Calculator, Globe & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {isAuthenticated && (
              <div className="hidden lg:flex items-center space-x-2 px-3 py-2 bg-teal-900/50 rounded-lg border border-teal-700/50">
                <User className="w-4 h-4 text-teal-400" />
                <div className="text-right">
                  <p className="text-xs font-semibold text-teal-200">{user?.nombre}</p>
                  <p className="text-xs text-teal-300/70 capitalize">{user?.role}</p>
                </div>
              </div>
            )}
            <button
              onClick={() => setMostrarCalculadora(true)}
              className="hidden lg:flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 text-white hover:from-teal-600 hover:to-emerald-600 transition-all shadow-lg transform hover:scale-110"
              title="Calculadora de Beneficios"
            >
              <Calculator className="w-5 h-5" />
            </button>
            {isAuthenticated && (
              <Link
                to="/rpm"
                className="hidden lg:flex items-center justify-center w-10 h-10 rounded-full bg-teal-900/50 text-teal-400 hover:bg-teal-800/70 border border-teal-700/50 transition-colors shadow-lg"
                title="RPM"
              >
                <User className="w-5 h-5" />
              </Link>
            )}
            {isAuthenticated && (
              <button
                onClick={logout}
                className="hidden lg:flex items-center justify-center w-10 h-10 rounded-full bg-red-900/50 text-red-400 hover:bg-red-800/70 border border-red-700/50 transition-colors shadow-lg"
                title="Cerrar Sesión"
              >
                <LogOut className="w-5 h-5" />
              </button>
            )}
            <button className="hidden lg:flex items-center justify-center w-10 h-10 rounded-full bg-teal-900/50 text-teal-400 hover:bg-teal-800/70 border border-teal-700/50 transition-colors shadow-lg">
              <Globe className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-teal-100 hover:bg-teal-900/50 transition-colors border border-teal-700/30"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-gradient-to-b from-slate-900/98 via-teal-950/98 to-slate-900/98 backdrop-blur-xl border-t border-teal-700/30"
          >
            <nav className="px-4 py-4 space-y-2">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg font-semibold text-sm uppercase tracking-wide transition-colors ${
                      isActive
                        ? 'bg-teal-900/50 text-teal-400 border border-teal-700/50'
                        : 'text-teal-100 hover:bg-teal-900/30 hover:text-teal-400'
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </nav>
          </motion.div>
        )}
          </AnimatePresence>

      {/* Calculadora de Beneficios Modal */}
      <AnimatePresence>
        {mostrarCalculadora && (
          <CalculadoraBeneficios onClose={() => setMostrarCalculadora(false)} />
        )}
      </AnimatePresence>
    </motion.header>
  )
}
