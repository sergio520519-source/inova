import Hero from '../components/Hero'
import EmpresaSection from '../components/EmpresaSection'
import ProductosSection from '../components/ProductosSection'
import AliadosSection from '../components/AliadosSection'
import CTASection from '../components/CTASection'

export default function Home() {
  return (
    <div>
      <Hero />
      <EmpresaSection />
      <ProductosSection />
      <AliadosSection />
      <CTASection />
    </div>
  )
}

