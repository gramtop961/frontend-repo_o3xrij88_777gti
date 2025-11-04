import { Building2 } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur bg-white/70 border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 text-white flex items-center justify-center shadow">
            <Building2 className="h-5 w-5" />
          </div>
          <div className="leading-tight">
            <p className="text-sm text-slate-500">Dgen Technologies Pvt. Ltd.</p>
            <p className="text-base font-semibold tracking-tight">Auralis</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
          <a href="#home" className="hover:text-indigo-600">Home</a>
          <a href="#solutions" className="hover:text-indigo-600">Solutions</a>
          <a href="#about" className="hover:text-indigo-600">About</a>
          <a href="#contact" className="hover:text-indigo-600">Contact</a>
        </nav>

        <a href="#contact" className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400">
          Get in touch
        </a>
      </div>
    </header>
  )
}
