import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-sm font-semibold text-slate-900">Dgen Technologies Pvt. Ltd.</h3>
          <p className="mt-2 text-sm text-slate-600">
            Operating under the brand name Auralis to deliver future-ready smart city solutions across India.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-slate-900">Reach us</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-indigo-600" /> India • Serving cities nationwide</li>
            <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5 text-indigo-600" /> contact@auralis.city</li>
            <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 text-indigo-600" /> +91 00000 00000</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-slate-900">Let’s collaborate</h4>
          <p className="mt-2 text-sm text-slate-600">Tell us about your city’s goals. We’ll share a tailored roadmap within 48 hours.</p>
          <form className="mt-4 grid gap-3">
            <input type="text" required placeholder="Your name" className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300" />
            <input type="email" required placeholder="Email" className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300" />
            <textarea required placeholder="How can we help?" rows={3} className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300" />
            <button type="submit" className="inline-flex justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-indigo-700">Request a callback</button>
          </form>
        </div>
      </div>
      <div className="border-t border-slate-200 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Dgen Technologies Pvt. Ltd. • Auralis
      </div>
    </footer>
  )
}
