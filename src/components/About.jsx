import { motion } from 'framer-motion'
import { Users, Star, Clock } from 'lucide-react'

export default function About() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.06),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">About Auralis</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Auralis is the smart city brand from Dgen Technologies. We deliver interoperable urban platforms that
              blend IoT, AI, and cloud to improve everyday life. Our approach is privacy-first, outcomes-driven,
              and aligned with national standards.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[{icon: Users, label: 'Cross‑functional team'}, {icon: Star, label: 'Quality at core'}, {icon: Clock, label: 'Rapid to scale'}].map((f, i) => (
                <motion.div key={i} initial={{ y: 10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-xl border border-slate-200/70 bg-white p-4 text-center">
                  <f.icon className="mx-auto" size={18} />
                  <div className="mt-2 text-xs text-slate-600">{f.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <div className="relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white/60 p-6">
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-indigo-400/20 blur-3xl" />
              <div className="pointer-events-none absolute -left-20 -bottom-20 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl" />
              <div className="relative">
                <h3 className="text-lg font-semibold">Our Principles</h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-700">
                  <li>• Open standards, no lock‑in</li>
                  <li>• Privacy-by-design and strong security</li>
                  <li>• Pilot fast, scale responsibly</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
