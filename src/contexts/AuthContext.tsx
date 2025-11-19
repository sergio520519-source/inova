import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface User {
  id: string
  username: string
  email: string
  role: 'admin' | 'comercial' | 'viewer'
  nombre: string
}

interface AuthContextType {
  user: User | null
  login: (username: string, password: string) => Promise<boolean>
  logout: () => void
  isAuthenticated: boolean
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Usuarios de ejemplo (en producción esto vendría de una API)
const USERS = [
  {
    id: '1',
    username: 'admin',
    password: 'admin123',
    email: 'admin@ntginnova.com',
    role: 'admin' as const,
    nombre: 'Administrador',
  },
  {
    id: '2',
    username: 'comercial',
    password: 'comercial123',
    email: 'comercial@ntginnova.com',
    role: 'comercial' as const,
    nombre: 'Comercial',
  },
  {
    id: '3',
    username: 'viewer',
    password: 'viewer123',
    email: 'viewer@ntginnova.com',
    role: 'viewer' as const,
    nombre: 'Visualizador',
  },
]

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Verificar si hay sesión guardada
    const savedUser = localStorage.getItem('ntginnova_user')
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser))
      } catch (error) {
        localStorage.removeItem('ntginnova_user')
      }
    }
    setIsLoading(false)
  }, [])

  const login = async (username: string, password: string): Promise<boolean> => {
    // Simular delay de API
    await new Promise(resolve => setTimeout(resolve, 500))

    const foundUser = USERS.find(
      u => u.username === username && u.password === password
    )

    if (foundUser) {
      const userData: User = {
        id: foundUser.id,
        username: foundUser.username,
        email: foundUser.email,
        role: foundUser.role,
        nombre: foundUser.nombre,
      }
      setUser(userData)
      localStorage.setItem('ntginnova_user', JSON.stringify(userData))
      return true
    }

    return false
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('ntginnova_user')
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAuthenticated: !!user,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

