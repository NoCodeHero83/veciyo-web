import type { ReactNode } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

interface MainLayoutProps {
  children: ReactNode
  /** 'default' marketing header, 'app' header with hamburger, or 'none' */
  header?: 'default' | 'app' | 'none'
  showFooter?: boolean
  /** page background tone */
  bg?: 'page' | 'soft'
  /** vertically center the content (used for short auth screens) */
  center?: boolean
}

export default function MainLayout({
  children,
  header = 'default',
  showFooter = true,
  bg = 'page',
  center = false,
}: MainLayoutProps) {
  const bgClass = bg === 'soft' ? 'bg-surface-soft' : 'bg-surface-page'
  return (
    <div className={`flex min-h-screen flex-col ${bgClass}`}>
      {header !== 'none' && <Header variant={header === 'app' ? 'app' : 'default'} />}
      <main
        className={`flex-1 ${center ? 'flex items-center justify-center' : ''}`}
      >
        {children}
      </main>
      {showFooter && <Footer />}
    </div>
  )
}
