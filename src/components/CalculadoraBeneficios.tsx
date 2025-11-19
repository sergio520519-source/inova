import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calculator, TrendingUp, DollarSign, Percent, X } from 'lucide-react'

interface CalculadoraProps {
  onClose?: () => void
}

export default function CalculadoraBeneficios({ onClose }: CalculadoraProps) {
  const [ventaMensual, setVentaMensual] = useState('')
  const [margen, setMargen] = useState('25')
  const [comision, setComision] = useState('5')
  const [bonos, setBonos] = useState('0')

  const venta = parseFloat(ventaMensual) || 0
  const margenPorcentaje = parseFloat(margen) || 0
  const comisionPorcentaje = parseFloat(comision) || 0
  const bonosValor = parseFloat(bonos) || 0

  const gananciaBruta = venta * (margenPorcentaje / 100)
  const comisionGanada = venta * (comisionPorcentaje / 100)
  const totalBeneficios = comisionGanada + bonosValor
  const totalIngresos = totalBeneficios + (venta * 0.1) // 10% base

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 rounded-2xl p-6 md:p-8 max-w-2xl w-full shadow-2xl border border-teal-500/30"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-lg">
              <Calculator className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-teal-300 to-emerald-300 bg-clip-text text-transparent">
                Calculadora de Beneficios
              </h2>
              <p className="text-sm text-teal-200/80">Para Comerciales</p>
            </div>
          </div>
          {onClose && (
            <button
              onClick={onClose}
              className="p-2 hover:bg-teal-900/50 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-teal-300" />
            </button>
          )}
        </div>

        {/* Inputs */}
        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-sm font-semibold text-teal-200 mb-2">
              Venta Mensual (COP)
            </label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-teal-400" />
              <input
                type="number"
                value={ventaMensual}
                onChange={(e) => setVentaMensual(e.target.value)}
                placeholder="0"
                className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-teal-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-semibold text-teal-200 mb-2">
                Margen de Ganancia (%)
              </label>
              <div className="relative">
                <Percent className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-teal-400" />
                <input
                  type="number"
                  value={margen}
                  onChange={(e) => setMargen(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-teal-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-teal-200 mb-2">
                Comisión (%)
              </label>
              <div className="relative">
                <Percent className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-teal-400" />
                <input
                  type="number"
                  value={comision}
                  onChange={(e) => setComision(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-teal-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-teal-200 mb-2">
                Bonos Adicionales (COP)
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-teal-400" />
                <input
                  type="number"
                  value={bonos}
                  onChange={(e) => setBonos(e.target.value)}
                  placeholder="0"
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-teal-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-teal-900/50 to-emerald-900/50 rounded-xl p-4 border border-teal-700/50"
          >
            <div className="flex items-center space-x-2 mb-2">
              <TrendingUp className="w-5 h-5 text-teal-400" />
              <span className="text-sm text-teal-200/80">Ganancia Bruta</span>
            </div>
            <p className="text-2xl font-bold bg-gradient-to-r from-teal-300 to-emerald-300 bg-clip-text text-transparent">
              ${gananciaBruta.toLocaleString('es-CO')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-emerald-900/50 to-teal-900/50 rounded-xl p-4 border border-emerald-700/50"
          >
            <div className="flex items-center space-x-2 mb-2">
              <DollarSign className="w-5 h-5 text-emerald-400" />
              <span className="text-sm text-emerald-200/80">Comisión</span>
            </div>
            <p className="text-2xl font-bold bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">
              ${comisionGanada.toLocaleString('es-CO')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-teal-800/50 to-emerald-800/50 rounded-xl p-4 border border-teal-600/50"
          >
            <div className="flex items-center space-x-2 mb-2">
              <DollarSign className="w-5 h-5 text-teal-300" />
              <span className="text-sm text-teal-100/80">Bonos</span>
            </div>
            <p className="text-2xl font-bold text-teal-200">
              ${bonosValor.toLocaleString('es-CO')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-emerald-800/70 to-teal-800/70 rounded-xl p-4 border-2 border-emerald-500/50 shadow-lg"
          >
            <div className="flex items-center space-x-2 mb-2">
              <TrendingUp className="w-5 h-5 text-emerald-300" />
              <span className="text-sm font-semibold text-emerald-100">Total Beneficios</span>
            </div>
            <p className="text-3xl font-bold bg-gradient-to-r from-emerald-200 via-teal-200 to-emerald-200 bg-clip-text text-transparent">
              ${totalBeneficios.toLocaleString('es-CO')}
            </p>
          </motion.div>
        </div>

        {/* Info */}
        <div className="mt-6 p-4 bg-teal-900/30 rounded-lg border border-teal-700/30">
          <p className="text-xs text-teal-200/70 text-center">
            * Los cálculos son estimados. Los beneficios finales pueden variar según políticas de la empresa.
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}

