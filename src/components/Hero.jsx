import { motion, useScroll, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { ArrowRight, Shield, Cloud } from 'lucide-react'

export default function Hero() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 400], [0, -30])
  const y2 = useTransform(scrollY, [0, 400], [0, -60])
  const opacity = useTransform(scrollY, [0, 300], [1, 0.7])

  return (
    <section className="relative">
      {/* background accent gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 right-1/4 h-72 w-72 rounded-full bg-indigo-400/20 blur-3xl" />
        <div className="absolute -bottom-16 left-1/3 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 md:pt-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[70vh]">
          <motion.div style={{ y: y1, opacity }} className="py-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/70 px-3 py-1 text-xs text-slate-600 backdrop-blur">
              <Shield size={14} /> Secure • Scalable • Interoperable
            </div>
            <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Smart City Intelligence for a Connected India
            </h1>
            <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed">
              Auralis blends IoT, AI, and cloud to power safer, cleaner, and more efficient urban experiences.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#/solutions"
                className="group inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-white shadow-lg shadow-indigo-500/20 transition hover:shadow-xl hover:translate-y-[-1px]"
              >
                Explore Solutions <ArrowRight className="transition group-hover:translate-x-0.5" size={18} />
              </a>
              <a
                href="#/contact"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300/70 bg-white/70 px-5 py-3 text-slate-800 backdrop-blur hover:border-slate-400"
              >
                Talk to us <Cloud size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div style={{ y: y2, opacity }} className="relative h-[60vh] md:h-[70vh] rounded-2xl overflow-hidden border border-slate-200/60 bg-white/30 backdrop-blur">
            <Spline
              scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            {/* subtle gradient overlay for depth; allow interaction with pointer-events-none */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/10 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
