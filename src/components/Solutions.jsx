import { motion } from 'framer-motion'
import { Cpu, Cloud, Shield, Map } from 'lucide-react'

const items = [
  {
    icon: Cpu,
    title: 'Edge IoT Platform',
    desc: 'Low-latency device orchestration, OTA updates, and secure telemetry at scale.',
    accent: 'from-indigo-500 to-violet-500',
  },
  {
    icon: Cloud,
    title: 'City Cloud & Analytics',
    desc: 'Unified data fabric with real-time dashboards, alerts, and AI insights.',
    accent: 'from-cyan-500 to-sky-500',
  },
  {
    icon: Map,
    title: 'Urban Operations',
    desc: 'Traffic, waste, environment, and utilities — interoperable and standards-driven.',
    accent: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Shield,
    title: 'Trust & Security',
    desc: 'Privacy-by-design, device identity, and policy-driven access controls.',
    accent: 'from-rose-500 to-orange-500',
  },
]

export default function Solutions() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(15,23,42,0.03),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Solutions</h2>
          <p className="mt-3 text-slate-600">Modular capabilities that scale from pilot to city-wide deployment.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white/70 p-5 backdrop-blur shadow-sm hover:shadow-md"
            >
              <div className={`absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br ${item.accent} opacity-20 blur-2xl`} />
              <div className="relative">
                <div className={`grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br ${item.accent} text-white shadow`}>{
                  <item.icon size={18} />
                }</div>
                <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                <div className="mt-4 text-indigo-600 text-sm opacity-0 transition group-hover:opacity-100">Learn more →</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
