import { useEffect, useMemo, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Solutions from './components/Solutions'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const getRoute = () => {
    const hash = window.location.hash.replace('#', '')
    return hash || '/'
  }

  const [route, setRoute] = useState(getRoute())

  useEffect(() => {
    const onHashChange = () => setRoute(getRoute())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const Page = useMemo(() => {
    switch (route) {
      case '/solutions':
        return <Solutions />
      case '/about':
        return <About />
      case '/contact':
        return <Contact />
      case '/':
      default:
        return (
          <>
            <Hero />
            {/* subtle divider */}
            <div className="relative overflow-hidden">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.08),transparent_60%)]" />
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 opacity-80">
                  {['IoT', 'AI', 'Cloud', 'Edge'].map((t) => (
                    <div key={t} className="rounded-xl border border-slate-200/60 bg-white/70 backdrop-blur p-5 text-center text-sm font-medium text-slate-700 shadow-sm">
                      {t} • Auralis
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )
    }
  }, [route])

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-indigo-200/60 selection:text-slate-900">
      <Navbar route={route} />
      <main>{Page}</main>
      <Footer />
    </div>
  )
}

export default App
