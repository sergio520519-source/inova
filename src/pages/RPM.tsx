import { useState } from 'react'
import { motion } from 'framer-motion'
import { useAuth } from '../contexts/AuthContext'
import { 
  Users, Search, Filter, Plus, Edit, Trash2, 
  Building2, Mail, Phone, MapPin, Calendar,
  TrendingUp, DollarSign, FileText, CheckCircle, LogOut, User
} from 'lucide-react'

interface Proveedor {
  id: string
  nombre: string
  empresa: string
  email: string
  telefono: string
  ciudad: string
  categoria: string
  estado: 'activo' | 'pendiente' | 'inactivo'
  ultimoContacto: string
  proyectos: number
  valorTotal: number
}

const categorias = ['Todos', 'Industrial', 'Profesional', 'Comercial', 'Otros']
const estados = ['Todos', 'Activo', 'Pendiente', 'Inactivo']

export default function RPM() {
  const { user, logout } = useAuth()
  const [proveedores, setProveedores] = useState<Proveedor[]>([
    {
      id: '1',
      nombre: 'Juan Pérez',
      empresa: 'Tecnología Ambiental SA',
      email: 'juan@tecnologiaambiental.com',
      telefono: '+57 300 123 4567',
      ciudad: 'Bogotá',
      categoria: 'Industrial',
      estado: 'activo',
      ultimoContacto: '2025-11-15',
      proyectos: 5,
      valorTotal: 15000000,
    },
    {
      id: '2',
      nombre: 'María González',
      empresa: 'Soluciones Verdes Ltda',
      email: 'maria@solucionesverdes.com',
      telefono: '+57 310 987 6543',
      ciudad: 'Medellín',
      categoria: 'Profesional',
      estado: 'pendiente',
      ultimoContacto: '2025-11-10',
      proyectos: 2,
      valorTotal: 5000000,
    },
  ])

  const [filtroCategoria, setFiltroCategoria] = useState('Todos')
  const [filtroEstado, setFiltroEstado] = useState('Todos')
  const [busqueda, setBusqueda] = useState('')
  const [mostrarFormulario, setMostrarFormulario] = useState(false)

  const proveedoresFiltrados = proveedores.filter(p => {
    const matchCategoria = filtroCategoria === 'Todos' || p.categoria === filtroCategoria
    const matchEstado = filtroEstado === 'Todos' || p.estado === filtroEstado.toLowerCase()
    const matchBusqueda = 
      p.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      p.empresa.toLowerCase().includes(busqueda.toLowerCase()) ||
      p.email.toLowerCase().includes(busqueda.toLowerCase())
    return matchCategoria && matchEstado && matchBusqueda
  })

  const totalProyectos = proveedores.reduce((sum, p) => sum + p.proyectos, 0)
  const totalValor = proveedores.reduce((sum, p) => sum + p.valorTotal, 0)

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-300 to-emerald-300 bg-clip-text text-transparent mb-2">
                RPM - Gestión de Proveedores
              </h1>
              <p className="text-teal-200/80">
                Sistema profesional de gestión de relaciones con proveedores
              </p>
            </div>
            <div className="flex items-center space-x-3">
              {/* User Info */}
              <div className="flex items-center space-x-2 px-4 py-2 bg-teal-900/50 rounded-lg border border-teal-700/50">
                <User className="w-4 h-4 text-teal-400" />
                <div className="text-right">
                  <p className="text-sm font-semibold text-teal-200">{user?.nombre}</p>
                  <p className="text-xs text-teal-300/70 capitalize">{user?.role}</p>
                </div>
              </div>
              {/* Logout Button */}
              <button
                onClick={logout}
                className="flex items-center space-x-2 px-4 py-2 bg-red-900/50 hover:bg-red-800/70 text-red-300 rounded-lg border border-red-700/50 transition-all"
              >
                <LogOut className="w-4 h-4" />
                <span>Salir</span>
              </button>
              {/* New Provider Button */}
              <button
                onClick={() => setMostrarFormulario(true)}
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
              >
                <Plus className="w-5 h-5" />
                <span>Nuevo Proveedor</span>
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-gradient-to-br from-teal-900/50 to-emerald-900/50 rounded-xl p-4 border border-teal-700/50">
              <div className="flex items-center space-x-2 mb-2">
                <Users className="w-5 h-5 text-teal-400" />
                <span className="text-sm text-teal-200/80">Total Proveedores</span>
              </div>
              <p className="text-2xl font-bold bg-gradient-to-r from-teal-300 to-emerald-300 bg-clip-text text-transparent">
                {proveedores.length}
              </p>
            </div>
            <div className="bg-gradient-to-br from-emerald-900/50 to-teal-900/50 rounded-xl p-4 border border-emerald-700/50">
              <div className="flex items-center space-x-2 mb-2">
                <FileText className="w-5 h-5 text-emerald-400" />
                <span className="text-sm text-emerald-200/80">Total Proyectos</span>
              </div>
              <p className="text-2xl font-bold bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">
                {totalProyectos}
              </p>
            </div>
            <div className="bg-gradient-to-br from-teal-800/50 to-emerald-800/50 rounded-xl p-4 border border-teal-600/50">
              <div className="flex items-center space-x-2 mb-2">
                <DollarSign className="w-5 h-5 text-teal-300" />
                <span className="text-sm text-teal-100/80">Valor Total</span>
              </div>
              <p className="text-2xl font-bold text-teal-200">
                ${(totalValor / 1000000).toFixed(1)}M
              </p>
            </div>
            <div className="bg-gradient-to-br from-emerald-800/50 to-teal-800/50 rounded-xl p-4 border border-emerald-600/50">
              <div className="flex items-center space-x-2 mb-2">
                <TrendingUp className="w-5 h-5 text-emerald-300" />
                <span className="text-sm text-emerald-100/80">Activos</span>
              </div>
              <p className="text-2xl font-bold text-emerald-200">
                {proveedores.filter(p => p.estado === 'activo').length}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-4 mb-6 border border-teal-700/30"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-teal-400" />
              <input
                type="text"
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                placeholder="Buscar por nombre, empresa o email..."
                className="w-full pl-10 pr-4 py-2 bg-slate-800/50 border border-teal-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-teal-500"
              />
            </div>
            <div className="flex gap-2">
              <select
                value={filtroCategoria}
                onChange={(e) => setFiltroCategoria(e.target.value)}
                className="px-4 py-2 bg-slate-800/50 border border-teal-700/50 rounded-lg text-white focus:outline-none focus:border-teal-500"
              >
                {categorias.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              <select
                value={filtroEstado}
                onChange={(e) => setFiltroEstado(e.target.value)}
                className="px-4 py-2 bg-slate-800/50 border border-teal-700/50 rounded-lg text-white focus:outline-none focus:border-teal-500"
              >
                {estados.map(est => (
                  <option key={est} value={est}>{est}</option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-slate-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-teal-700/30"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-teal-900/50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-teal-200">Proveedor</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-teal-200">Contacto</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-teal-200">Categoría</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-teal-200">Estado</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-teal-200">Proyectos</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-teal-200">Valor</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-teal-200">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-teal-800/30">
                {proveedoresFiltrados.map((proveedor, index) => (
                  <motion.tr
                    key={proveedor.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="hover:bg-teal-900/20 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-semibold text-white">{proveedor.nombre}</p>
                        <p className="text-sm text-teal-200/70">{proveedor.empresa}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2 text-sm text-teal-200/80">
                          <Mail className="w-4 h-4" />
                          <span>{proveedor.email}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-teal-200/80">
                          <Phone className="w-4 h-4" />
                          <span>{proveedor.telefono}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-teal-200/80">
                          <MapPin className="w-4 h-4" />
                          <span>{proveedor.ciudad}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-teal-900/50 text-teal-300 rounded-full text-xs font-semibold">
                        {proveedor.categoria}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        proveedor.estado === 'activo' 
                          ? 'bg-emerald-900/50 text-emerald-300'
                          : proveedor.estado === 'pendiente'
                          ? 'bg-yellow-900/50 text-yellow-300'
                          : 'bg-gray-900/50 text-gray-300'
                      }`}>
                        {proveedor.estado.charAt(0).toUpperCase() + proveedor.estado.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-white font-semibold">{proveedor.proyectos}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-teal-300 font-semibold">
                        ${(proveedor.valorTotal / 1000000).toFixed(1)}M
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <button className="p-2 hover:bg-teal-900/50 rounded-lg transition-colors">
                          <Edit className="w-4 h-4 text-teal-400" />
                        </button>
                        <button className="p-2 hover:bg-red-900/50 rounded-lg transition-colors">
                          <Trash2 className="w-4 h-4 text-red-400" />
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

