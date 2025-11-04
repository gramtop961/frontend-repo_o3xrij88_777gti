import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Solutions from './components/Solutions'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Solutions />
        {/* About section */}
        <section id="about" className="py-20 bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold tracking-tight">About Auralis</h2>
              <p className="mt-3 text-slate-600 leading-relaxed">
                Auralis is the smart city solutions brand from Dgen Technologies. We combine IoT, cloud,
                and urban analytics to help Indian cities become safer, cleaner, and more efficient.
                Our approach is outcome-driven, interoperable, and aligned with national standards.
              </p>
              <ul className="mt-6 grid gap-2 text-sm text-slate-700">
                <li>• Interoperable platforms that avoid vendor lock‑in</li>
                <li>• Privacy-by-design and strong security posture</li>
                <li>• Rapid pilot-to-scale execution model</li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-500 p-1 shadow-lg">
                <div className="h-full w-full rounded-xl bg-white" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
