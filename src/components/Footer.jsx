import { Github, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative mt-10 border-t border-slate-200/70 bg-white/70 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="text-sm font-semibold">Auralis • Dgen Technologies Pvt. Ltd.</div>
            <div className="text-xs text-slate-600 mt-1">© {new Date().getFullYear()} All rights reserved.</div>
          </div>
          <div className="flex items-center gap-4">
            <a href="#/about" className="text-sm text-slate-600 hover:text-slate-900">About</a>
            <a href="#/solutions" className="text-sm text-slate-600 hover:text-slate-900">Solutions</a>
            <a href="#/contact" className="text-sm text-slate-600 hover:text-slate-900">Contact</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 hover:text-indigo-600"><Linkedin size={18} /></a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 hover:text-indigo-600"><Github size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
