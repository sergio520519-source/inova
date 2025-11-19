import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const footerLinks = {
  empresa: [
    { label: 'Sobre Nosotros', path: '/empresa' },
    { label: 'Misión y Visión', path: '/empresa' },
    { label: 'Valores', path: '/empresa' },
  ],
  servicios: [
    { label: 'Catálogo', path: '/catalogo' },
    { label: 'Uso del Ozono', path: '/uso-del-ozono' },
    { label: 'Proveedores', path: '/proveedores' },
  ],
  soporte: [
    { label: 'FAQ', path: '/faq' },
    { label: 'Contacto', path: '/contacto' },
    { label: 'Asesoría', path: '/contacto' },
  ],
  legal: [
    { label: 'Aviso Legal', path: '/contacto' },
    { label: 'Políticas de Privacidad', path: '/contacto' },
    { label: 'Política de Sostenibilidad', path: '/contacto' },
  ],
}

import { MessageCircle, Send } from 'lucide-react'

const socialLinks = [
  { icon: MessageCircle, href: 'https://wa.me/573001234567?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20NTG%20INNOVA', label: 'WhatsApp' },
  { icon: Send, href: 'https://t.me/ntginnova', label: 'Telegram' },
  { icon: Twitter, href: 'https://twitter.com/ntginnova', label: 'X (Twitter)' },
  { icon: Linkedin, href: 'https://linkedin.com/company/ntginnova', label: 'LinkedIn' },
  { icon: Facebook, href: 'https://facebook.com/ntginnova', label: 'Facebook' },
  { icon: Instagram, href: 'https://instagram.com/ntginnova', label: 'Instagram' },
]

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-primary-600 to-ozone-600 text-white px-4 py-2 rounded-lg font-bold text-xl font-display">
                NTG
              </div>
              <span className="font-display font-bold text-2xl text-white">
                INNOVA
              </span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Impulsamos el desarrollo tecnológico con propósito. Innovamos, transformamos 
              y conectamos soluciones sostenibles para un mundo más eficiente y limpio.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400" />
                <a href="mailto:contacto@ntginnova.com" className="hover:text-white transition-colors">
                  contacto@ntginnova.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400" />
                <a href="tel:+573001234567" className="hover:text-white transition-colors">
                  +57 300 123 4567
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary-400" />
                <span>Colombia 2020</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h3 className="font-display font-bold text-white mb-4 uppercase tracking-wide">
              Empresa
            </h3>
            <ul className="space-y-2">
              {footerLinks.empresa.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-white mb-4 uppercase tracking-wide">
              Servicios
            </h3>
            <ul className="space-y-2">
              {footerLinks.servicios.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-white mb-4 uppercase tracking-wide">
              Soporte
            </h3>
            <ul className="space-y-2">
              {footerLinks.soporte.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-teal-900/50 to-emerald-900/50 text-teal-300 hover:from-teal-500 hover:to-emerald-500 hover:text-white transition-all transform hover:scale-110 border border-teal-700/50"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} NTG INNOVA. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

