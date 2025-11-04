import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react'

export default function Contact() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(34,197,94,0.05),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10">
          <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Get in touch</h2>
            <p className="mt-3 text-slate-600">Tell us about your city initiative. We’ll get back within 1 business day.</p>

            <div className="mt-8 space-y-4 text-sm">
              <a href="mailto:hello@dgen.tech" className="flex items-center gap-3 text-slate-700 hover:text-indigo-600">
                <Mail size={18} /> hello@dgen.tech
              </a>
              <a href="tel:+911234567890" className="flex items-center gap-3 text-slate-700 hover:text-indigo-600">
                <Phone size={18} /> +91 12345 67890
              </a>
              <div className="flex items-start gap-3 text-slate-700">
                <MapPin size={18} className="mt-0.5" /> Bengaluru, India
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            onSubmit={(e) => {
              e.preventDefault()
              const data = new FormData(e.currentTarget)
              const subject = encodeURIComponent('Auralis — Contact')
              const body = encodeURIComponent(
                `Name: ${data.get('name')}\nEmail: ${data.get('email')}\nMessage: ${data.get('message')}`
              )
              window.location.href = `mailto:hello@dgen.tech?subject=${subject}&body=${body}`
            }}
            className="rounded-2xl border border-slate-200/70 bg-white/80 p-6 backdrop-blur shadow-sm"
          >
            <div className="grid gap-4">
              <div>
                <label className="text-sm text-slate-600">Name</label>
                <input name="name" required className="mt-1 w-full rounded-lg border border-slate-300/70 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500/40" />
              </div>
              <div>
                <label className="text-sm text-slate-600">Email</label>
                <input type="email" name="email" required className="mt-1 w-full rounded-lg border border-slate-300/70 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500/40" />
              </div>
              <div>
                <label className="text-sm text-slate-600">Message</label>
                <textarea name="message" rows={4} required className="mt-1 w-full rounded-lg border border-slate-300/70 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500/40" />
              </div>
              <button type="submit" className="group inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-white hover:bg-slate-800">
                Send message <ArrowRight size={16} className="transition group-hover:translate-x-0.5" />
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
