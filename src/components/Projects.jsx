import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const items = [
  {
    title: 'FitTrack — Fitness Tracker',
    desc: 'Cross-platform app with offline-first sync, charts, and Bluetooth device integration.',
    tags: ['React Native', 'Expo', 'SQLite', 'Reanimated'],
    link: 'https://example.com/fittrack'
  },
  {
    title: 'ShopEase — E-commerce',
    desc: 'High-perf storefront with deep linking, push notifications and Stripe.',
    tags: ['React Native', 'TypeScript', 'Stripe', 'Deep Links'],
    link: 'https://example.com/shopease'
  },
  {
    title: 'Chatter — Messaging',
    desc: 'Real-time chat with end-to-end encryption and rich media attachments.',
    tags: ['React Native', 'WebSockets', 'Firebase', 'E2E'],
    link: 'https://example.com/chatter'
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Selected Projects</h2>
          <p className="mt-2 text-gray-600">A few mobile apps I loved building.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.05 }}
              className="group block rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold tracking-tight group-hover:text-indigo-600">{p.title}</h3>
                <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-indigo-600" />
              </div>
              <p className="mt-2 text-gray-600">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700">{t}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
