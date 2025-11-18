import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Empresa from './pages/Empresa'
import Catalogo from './pages/Catalogo'
import UsoOzono from './pages/UsoOzono'
import Proveedores from './pages/Proveedores'
import FAQ from './pages/FAQ'
import Contacto from './pages/Contacto'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/empresa" element={<Empresa />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/uso-del-ozono" element={<UsoOzono />} />
          <Route path="/proveedores" element={<Proveedores />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App

