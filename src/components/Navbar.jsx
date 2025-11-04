import { useEffect, useState } from 'react'
import { Menu, X, Rocket } from 'lucide-react'

const links = [
  { href: '#/', label: 'Home' },
  { href: '#/solutions', label: 'Solutions' },
  { href: '#/about', label: 'About' },
  { href: '#/contact', label: 'Contact' },
]

export default function Navbar({ route }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    // close menu on route change
    setOpen(false)
  }, [route])

  return (
    <header className={`sticky top-0 z-50 transition-all ${
      scrolled ? 'bg-white/80 backdrop-blur border-b border-slate-200/60' : 'bg-transparent'
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#/" className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-indigo-600 to-cyan-500 text-white shadow-lg shadow-indigo-500/20">
              <Rocket size={18} />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-wide">Auralis</div>
              <div className="text-[11px] text-slate-500">by Dgen Technologies</div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`text-sm transition-colors hover:text-indigo-600 ${
                  route === l.href.replace('#', '') ? 'text-slate-900 font-medium' : 'text-slate-600'
                }`}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#/contact"
              className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm shadow-slate-900/10 hover:shadow-md hover:shadow-indigo-500/20 hover:bg-slate-800 transition"
            >
              Get in touch
            </a>
          </nav>

          <button className="md:hidden p-2 rounded-lg hover:bg-slate-100" onClick={() => setOpen((v) => !v)}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200/60 bg-white/90 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 py-3 flex flex-col">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="py-2 text-slate-700">
                {l.label}
              </a>
            ))}
            <a href="#/contact" className="mt-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white">
              Get in touch
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
