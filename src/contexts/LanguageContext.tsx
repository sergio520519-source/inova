import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Language = 'es' | 'en' | 'pt' | 'fr'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations: Record<Language, Record<string, string>> = {
  es: {
    'nav.inicio': 'INICIO',
    'nav.empresa': 'EMPRESA',
    'nav.catalogo': 'CATÁLOGO',
    'nav.uso-ozono': 'USO DEL OZONO',
    'nav.proveedores': 'PROVEEDORES',
    'nav.rpm': 'RPM',
    'nav.faq': 'FAQ',
    'nav.contacto': 'CONTACTO',
    'hero.badge': 'Soluciones de Ozono y Control Ambiental',
    'hero.title': 'NTG INNOVA',
    'hero.subtitle': 'Eficiencia, Salud y Sostenibilidad',
    'hero.description': 'Integra tecnología europea certificada para soluciones de ozono, monitoreo y control ambiental. Reducimos el consumo energético, minimizamos el impacto ambiental y certificamos la huella de carbono.',
    'hero.cta.catalogo': 'Ver Catálogo',
    'hero.cta.asesoria': 'Solicitar Asesoría',
    'hero.stats.experiencia': 'Años de Experiencia',
    'hero.stats.clientes': 'Clientes Satisfechos',
    'hero.stats.proyectos': 'Proyectos Completados',
    'hero.stats.tecnologia': 'Tecnología Certificada',
    'hero.factory.title': 'Instalaciones Industriales',
    'hero.factory.subtitle': 'Tecnología europea certificada',
  },
  en: {
    'nav.inicio': 'HOME',
    'nav.empresa': 'COMPANY',
    'nav.catalogo': 'CATALOG',
    'nav.uso-ozono': 'OZONE USE',
    'nav.proveedores': 'SUPPLIERS',
    'nav.rpm': 'RPM',
    'nav.faq': 'FAQ',
    'nav.contacto': 'CONTACT',
    'hero.badge': 'Ozone Solutions and Environmental Control',
    'hero.title': 'NTG INNOVA',
    'hero.subtitle': 'Efficiency, Health and Sustainability',
    'hero.description': 'Integrate certified European technology for ozone solutions, monitoring and environmental control. We reduce energy consumption, minimize environmental impact and certify carbon footprint.',
    'hero.cta.catalogo': 'View Catalog',
    'hero.cta.asesoria': 'Request Consultation',
    'hero.stats.experiencia': 'Years of Experience',
    'hero.stats.clientes': 'Satisfied Clients',
    'hero.stats.proyectos': 'Completed Projects',
    'hero.stats.tecnologia': 'Certified Technology',
    'hero.factory.title': 'Industrial Facilities',
    'hero.factory.subtitle': 'Certified European technology',
  },
  pt: {
    'nav.inicio': 'INÍCIO',
    'nav.empresa': 'EMPRESA',
    'nav.catalogo': 'CATÁLOGO',
    'nav.uso-ozono': 'USO DO OZÔNIO',
    'nav.proveedores': 'FORNECEDORES',
    'nav.rpm': 'RPM',
    'nav.faq': 'FAQ',
    'nav.contacto': 'CONTATO',
    'hero.badge': 'Soluções de Ozônio e Controle Ambiental',
    'hero.title': 'NTG INNOVA',
    'hero.subtitle': 'Eficiência, Saúde e Sustentabilidade',
    'hero.description': 'Integra tecnologia europeia certificada para soluções de ozônio, monitoramento e controle ambiental. Reduzimos o consumo de energia, minimizamos o impacto ambiental e certificamos a pegada de carbono.',
    'hero.cta.catalogo': 'Ver Catálogo',
    'hero.cta.asesoria': 'Solicitar Consultoria',
    'hero.stats.experiencia': 'Anos de Experiência',
    'hero.stats.clientes': 'Clientes Satisfeitos',
    'hero.stats.proyectos': 'Projetos Concluídos',
    'hero.stats.tecnologia': 'Tecnologia Certificada',
    'hero.factory.title': 'Instalações Industriais',
    'hero.factory.subtitle': 'Tecnologia europeia certificada',
  },
  fr: {
    'nav.inicio': 'ACCUEIL',
    'nav.empresa': 'ENTREPRISE',
    'nav.catalogo': 'CATALOGUE',
    'nav.uso-ozono': 'UTILISATION OZONE',
    'nav.proveedores': 'FOURNISSEURS',
    'nav.rpm': 'RPM',
    'nav.faq': 'FAQ',
    'nav.contacto': 'CONTACT',
    'hero.badge': 'Solutions d\'Ozone et Contrôle Environnemental',
    'hero.title': 'NTG INNOVA',
    'hero.subtitle': 'Efficacité, Santé et Durabilité',
    'hero.description': 'Intègre une technologie européenne certifiée pour les solutions d\'ozone, la surveillance et le contrôle environnemental. Nous réduisons la consommation d\'énergie, minimisons l\'impact environnemental et certifions l\'empreinte carbone.',
    'hero.cta.catalogo': 'Voir le Catalogue',
    'hero.cta.asesoria': 'Demander une Consultation',
    'hero.stats.experiencia': 'Années d\'Expérience',
    'hero.stats.clientes': 'Clients Satisfaits',
    'hero.stats.proyectos': 'Projets Complétés',
    'hero.stats.tecnologia': 'Technologie Certifiée',
    'hero.factory.title': 'Installations Industrielles',
    'hero.factory.subtitle': 'Technologie européenne certifiée',
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('ntginnova_language') as Language
    return saved || 'es'
  })

  useEffect(() => {
    localStorage.setItem('ntginnova_language', language)
  }, [language])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
  }

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

