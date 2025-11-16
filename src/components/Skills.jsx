import { motion } from 'framer-motion'
import { Smartphone, Rocket, Cpu, Layers, FlaskConical, Palette } from 'lucide-react'

const skills = [
  { icon: Smartphone, title: 'Mobile UX', desc: 'Native-feel interfaces with smooth navigation and gestures.' },
  { icon: Rocket, title: 'Performance', desc: 'Skia, Reanimated, and profiling for 60fps experiences.' },
  { icon: Cpu, title: 'Native Modules', desc: 'Bridging, Bluetooth, sensors, and platform APIs.' },
  { icon: Layers, title: 'Architecture', desc: 'Type-safe codebases with modular, scalable patterns.' },
  { icon: FlaskConical, title: 'CI/CD', desc: 'Expo EAS, Fastlane, automated testing and releases.' },
  { icon: Palette, title: 'Design Systems', desc: 'Token-driven themes and component libraries.' },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">What I Do</h2>
          <p className="mt-2 text-gray-600">End-to-end mobile development, tuned for reliability and speed.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.06 }}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
              <p className="mt-3 text-gray-600">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
