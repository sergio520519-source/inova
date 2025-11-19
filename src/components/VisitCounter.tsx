import { useState, useEffect } from 'react'
import { Users } from 'lucide-react'
import { motion } from 'framer-motion'

export default function VisitCounter() {
  const [visits, setVisits] = useState(0)

  useEffect(() => {
    // Obtener visitas del localStorage
    const storedVisits = localStorage.getItem('ntginnova_visits')
    let currentVisits = storedVisits ? parseInt(storedVisits, 10) : 0
    
    // Incrementar visita
    currentVisits += 1
    localStorage.setItem('ntginnova_visits', currentVisits.toString())
    setVisits(currentVisits)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed bottom-4 right-4 z-50 bg-gradient-to-br from-teal-900/95 via-emerald-900/95 to-teal-950/95 backdrop-blur-xl rounded-xl p-3 shadow-2xl border border-teal-500/30"
    >
      <div className="flex items-center space-x-2">
        <Users className="w-5 h-5 text-teal-400" />
        <div className="flex flex-col">
          <span className="text-xs text-teal-200/80">Visitantes</span>
          <span className="text-lg font-bold bg-gradient-to-r from-teal-300 to-emerald-300 bg-clip-text text-transparent">
            {visits.toLocaleString()}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

