import { Building2, Cpu, Cloud, ShieldCheck, Globe } from 'lucide-react'

const items = [
  {
    icon: Building2,
    title: 'Smart Infrastructure',
    desc: 'Connected lighting, parking, and utilities with real‑time monitoring and control.',
  },
  {
    icon: Cpu,
    title: 'IoT Platforms',
    desc: 'Scalable device management, telemetry, and rules engine for city-scale deployments.',
  },
  {
    icon: Cloud,
    title: 'Urban Data Cloud',
    desc: 'Unified data lake with dashboards, AI insights, and open data sharing layers.',
  },
  {
    icon: ShieldCheck,
    title: 'Safety & Compliance',
    desc: 'CCTV integration, emergency response, and compliance-first governance tooling.',
  },
  {
    icon: Globe,
    title: 'Citizen Services',
    desc: 'Mobile-first services for grievances, permits, and community engagement.',
  },
]

export default function Solutions() {
  return (
    <section id="solutions" className="relative py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Solutions for smarter cities</h2>
          <p className="mt-3 text-slate-600">
            Modular offerings under the Auralis brand help municipalities modernize faster with proven outcomes.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div key={item.title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="h-11 w-11 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 text-white flex items-center justify-center shadow">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              <div className="mt-4 text-sm font-medium text-indigo-600 opacity-0 group-hover:opacity-100 transition">Learn more →</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
