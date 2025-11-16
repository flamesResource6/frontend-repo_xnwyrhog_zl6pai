import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] grid place-items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/90" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/70 px-3 py-1 text-xs font-medium text-gray-700 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500" />
            React Native Developer
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
            I build delightful mobile apps with React Native
          </h1>
          <p className="mt-4 text-gray-700 text-lg">
            From rapid prototypes to polished production apps — I ship fast, pixel-perfect, and accessible experiences for iOS and Android.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="pointer-events-auto inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-3 text-white shadow-lg shadow-indigo-600/20 transition hover:brightness-110">
              View Projects
            </a>
            <a href="#contact" className="pointer-events-auto inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-5 py-3 text-gray-800 shadow-sm hover:bg-gray-50">
              Get in touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
