import { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'
import ChatWidget from './ChatWidget'
import VisitCounter from './VisitCounter'
import SocialButtons from './SocialButtons'
import WorldClock from './WorldClock'
import LanguageSelector from './LanguageSelector'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
      <ChatWidget />
      <VisitCounter />
      <SocialButtons />
      <WorldClock />
      <LanguageSelector />
    </div>
  )
}

