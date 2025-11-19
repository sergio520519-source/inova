import { motion } from 'framer-motion'
import { MessageCircle, Send, Twitter, Linkedin, Facebook, Instagram } from 'lucide-react'

interface SocialButton {
  icon: any
  label: string
  href: string
  color: string
  bgColor: string
}

const socialButtons: SocialButton[] = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    href: 'https://wa.me/573001234567?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20NTG%20INNOVA',
    color: 'text-white',
    bgColor: 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700',
  },
  {
    icon: Send,
    label: 'Telegram',
    href: 'https://t.me/ntginnova',
    color: 'text-white',
    bgColor: 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
  },
  {
    icon: Twitter,
    label: 'X (Twitter)',
    href: 'https://twitter.com/ntginnova',
    color: 'text-white',
    bgColor: 'bg-gradient-to-r from-gray-900 to-black hover:from-black hover:to-gray-900',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/company/ntginnova',
    color: 'text-white',
    bgColor: 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800',
  },
  {
    icon: Facebook,
    label: 'Facebook',
    href: 'https://facebook.com/ntginnova',
    color: 'text-white',
    bgColor: 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    href: 'https://instagram.com/ntginnova',
    color: 'text-white',
    bgColor: 'bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 hover:from-pink-600 hover:via-purple-600 hover:to-orange-600',
  },
]

export default function SocialButtons() {
  return (
    <div className="fixed bottom-4 left-4 z-50 flex flex-col gap-3">
      {socialButtons.map((social, index) => {
        const Icon = social.icon
        return (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.95 }}
            className={`${social.bgColor} ${social.color} w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 group relative`}
            aria-label={social.label}
          >
            <Icon className="w-6 h-6" />
            <span className="absolute left-full ml-3 px-3 py-1 bg-slate-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              {social.label}
            </span>
          </motion.a>
        )
      })}
    </div>
  )
}

