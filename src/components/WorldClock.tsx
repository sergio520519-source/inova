import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Clock, Globe, MapPin, X, ChevronDown, ChevronUp } from 'lucide-react'

interface TimeZone {
  id: string
  name: string
  city: string
  country: string
  offset: number
  flag: string
}

const timeZones: TimeZone[] = [
  { id: 'America/Bogota', name: 'Colombia', city: 'Bogotá', country: 'CO', offset: -5, flag: '🇨🇴' },
  { id: 'America/Mexico_City', name: 'México', city: 'Ciudad de México', country: 'MX', offset: -6, flag: '🇲🇽' },
  { id: 'America/New_York', name: 'USA (EST)', city: 'Nueva York', country: 'US', offset: -5, flag: '🇺🇸' },
  { id: 'Europe/Madrid', name: 'España', city: 'Madrid', country: 'ES', offset: 1, flag: '🇪🇸' },
  { id: 'Europe/London', name: 'Reino Unido', city: 'Londres', country: 'GB', offset: 0, flag: '🇬🇧' },
  { id: 'Asia/Dubai', name: 'Emiratos Árabes', city: 'Dubái', country: 'AE', offset: 4, flag: '🇦🇪' },
  { id: 'Asia/Tokyo', name: 'Japón', city: 'Tokio', country: 'JP', offset: 9, flag: '🇯🇵' },
  { id: 'Asia/Shanghai', name: 'China', city: 'Shanghái', country: 'CN', offset: 8, flag: '🇨🇳' },
]

function getTimeForZone(offset: number): { time: string; date: string; day: string } {
  const now = new Date()
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000)
  const localTime = new Date(utc + (3600000 * offset))
  
  const time = localTime.toLocaleTimeString('es-ES', { 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit',
    hour12: false 
  })
  
  const date = localTime.toLocaleDateString('es-ES', { 
    day: '2-digit', 
    month: 'short', 
    year: 'numeric' 
  })
  
  const day = localTime.toLocaleDateString('es-ES', { weekday: 'long' })
  
  return { time, date, day }
}

export default function WorldClock() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentTime, setCurrentTime] = useState<Record<string, { time: string; date: string; day: string }>>({})
  const [selectedZones, setSelectedZones] = useState<string[]>(['America/Bogota', 'Europe/Madrid', 'America/New_York'])

  useEffect(() => {
    const updateTimes = () => {
      const times: Record<string, { time: string; date: string; day: string }> = {}
      timeZones.forEach(zone => {
        times[zone.id] = getTimeForZone(zone.offset)
      })
      setCurrentTime(times)
    }

    updateTimes()
    const interval = setInterval(updateTimes, 1000)

    return () => clearInterval(interval)
  }, [])

  const toggleZone = (zoneId: string) => {
    setSelectedZones(prev => 
      prev.includes(zoneId) 
        ? prev.filter(id => id !== zoneId)
        : [...prev, zoneId]
    )
  }

  const primaryZone = timeZones.find(z => z.id === selectedZones[0]) || timeZones[0]
  const primaryTime = currentTime[primaryZone.id] || getTimeForZone(primaryZone.offset)

  return (
    <>
      {/* Compact Clock - Always Visible */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="fixed top-24 right-4 z-40"
      >
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-br from-teal-900/95 via-emerald-900/95 to-teal-950/95 backdrop-blur-xl rounded-xl p-4 shadow-2xl border border-teal-500/30 hover:border-teal-400/50 transition-all"
        >
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Globe className="w-6 h-6 text-teal-400 animate-spin-slow" />
              <div className="absolute inset-0 bg-teal-400/20 rounded-full blur-lg"></div>
            </div>
            <div className="text-left">
              <div className="flex items-center space-x-2 mb-1">
                <span className="text-2xl">{primaryZone.flag}</span>
                <span className="text-xs font-semibold text-teal-200/80">{primaryZone.city}</span>
              </div>
              <div className="text-lg font-bold bg-gradient-to-r from-teal-300 to-emerald-300 bg-clip-text text-transparent">
                {primaryTime.time}
              </div>
              <div className="text-xs text-teal-200/70">{primaryTime.date}</div>
            </div>
            {isOpen ? (
              <ChevronUp className="w-5 h-5 text-teal-400" />
            ) : (
              <ChevronDown className="w-5 h-5 text-teal-400" />
            )}
          </div>
        </motion.button>
      </motion.div>

      {/* Expanded World Clock Panel */}
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
              className="fixed top-32 right-4 z-50 w-96 max-h-[80vh] overflow-y-auto"
            >
              <div className="bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 rounded-2xl p-6 shadow-2xl border border-teal-500/30 backdrop-blur-xl">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-lg">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold bg-gradient-to-r from-teal-300 to-emerald-300 bg-clip-text text-transparent">
                        Reloj Mundial
                      </h3>
                      <p className="text-xs text-teal-200/70">Zonas Horarias</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-teal-900/50 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5 text-teal-300" />
                  </button>
                </div>

                {/* Selected Time Zones */}
                <div className="space-y-3 mb-6">
                  {selectedZones.map((zoneId, index) => {
                    const zone = timeZones.find(z => z.id === zoneId)
                    if (!zone) return null
                    const time = currentTime[zone.id] || getTimeForZone(zone.offset)
                    
                    return (
                      <motion.div
                        key={zone.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-gradient-to-br from-teal-900/50 to-emerald-900/50 rounded-xl p-4 border border-teal-700/50 hover:border-teal-500/70 transition-all"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <span className="text-2xl">{zone.flag}</span>
                            <div>
                              <p className="font-semibold text-teal-200">{zone.city}</p>
                              <p className="text-xs text-teal-300/70">{zone.name}</p>
                            </div>
                          </div>
                          <button
                            onClick={() => toggleZone(zone.id)}
                            className="p-1 hover:bg-red-900/50 rounded text-red-400 transition-colors"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="flex items-end justify-between">
                          <div>
                            <div className="text-3xl font-bold bg-gradient-to-r from-teal-300 to-emerald-300 bg-clip-text text-transparent mb-1">
                              {time.time.split(':').slice(0, 2).join(':')}
                            </div>
                            <div className="text-xs text-teal-200/70">{time.time.split(':')[2]}</div>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-semibold text-teal-200 capitalize">{time.day}</p>
                            <p className="text-xs text-teal-300/70">{time.date}</p>
                          </div>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>

                {/* Add More Zones */}
                <div className="border-t border-teal-700/30 pt-4">
                  <p className="text-sm font-semibold text-teal-200 mb-3">Agregar Zona Horaria</p>
                  <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto">
                    {timeZones
                      .filter(zone => !selectedZones.includes(zone.id))
                      .map(zone => (
                        <motion.button
                          key={zone.id}
                          onClick={() => toggleZone(zone.id)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center space-x-2 px-3 py-2 bg-teal-900/30 hover:bg-teal-800/50 rounded-lg border border-teal-700/30 transition-all text-left"
                        >
                          <span className="text-xl">{zone.flag}</span>
                          <div>
                            <p className="text-xs font-semibold text-teal-200">{zone.city}</p>
                            <p className="text-xs text-teal-300/70">{zone.name}</p>
                          </div>
                        </motion.button>
                      ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

