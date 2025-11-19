import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import { LanguageProvider } from './contexts/LanguageContext'
import Layout from './components/Layout'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './pages/Home'
import Empresa from './pages/Empresa'
import Catalogo from './pages/Catalogo'
import UsoOzono from './pages/UsoOzono'
import Proveedores from './pages/Proveedores'
import FAQ from './pages/FAQ'
import Contacto from './pages/Contacto'
import Login from './pages/Login'
import RPM from './pages/RPM'

function App() {
  return (
    <LanguageProvider>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/*"
              element={
                <Layout>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/empresa" element={<Empresa />} />
                    <Route path="/catalogo" element={<Catalogo />} />
                    <Route path="/uso-del-ozono" element={<UsoOzono />} />
                    <Route path="/proveedores" element={<Proveedores />} />
                    <Route
                      path="/rpm"
                      element={
                        <ProtectedRoute>
                          <RPM />
                        </ProtectedRoute>
                      }
                    />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/contacto" element={<Contacto />} />
                  </Routes>
                </Layout>
              }
            />
          </Routes>
        </Router>
      </AuthProvider>
    </LanguageProvider>
  )
}

export default App

