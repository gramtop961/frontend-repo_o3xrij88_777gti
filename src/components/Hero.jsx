import { Rocket, ShieldCheck } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-white to-cyan-100 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-xs text-slate-600 ring-1 ring-slate-200 shadow">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
            Trusted smart city partner
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Building intelligent, sustainable cities with Auralis
          </h1>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Dgen Technologies powers the Auralis brand to deliver end‑to‑end smart city solutions—
            from connected infrastructure to urban analytics—tailored for India’s next decade of growth.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#solutions" className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-5 py-3 text-white font-medium shadow hover:bg-indigo-700">
              <Rocket className="h-4 w-4" /> Explore Solutions
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-slate-800 font-medium ring-1 ring-slate-200 hover:bg-slate-50">
              Talk to us
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square w-full rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-500 p-1 shadow-lg">
            <div className="h-full w-full rounded-xl bg-white grid grid-cols-2 gap-3 p-4">
              <div className="rounded-lg bg-indigo-50" />
              <div className="rounded-lg bg-cyan-50" />
              <div className="rounded-lg bg-cyan-50" />
              <div className="rounded-lg bg-indigo-50" />
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 h-28 w-28 rounded-full bg-indigo-200/60 blur-2xl" />
          <div className="absolute -top-6 -left-6 h-20 w-20 rounded-full bg-cyan-200/60 blur-2xl" />
        </div>
      </div>
    </section>
  )
}
