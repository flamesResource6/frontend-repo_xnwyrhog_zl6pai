import { useState } from 'react'
import { Send } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    // No backend requirement was specified. Simulate a send for now.
    await new Promise((r) => setTimeout(r, 800))
    setSent(true)
    setLoading(false)
  }

  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Let’s build something</h2>
          <p className="mt-2 text-gray-600">Tell me about your project and timeline.</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <form onSubmit={handleSubmit} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="grid gap-4">
              <input name="name" required placeholder="Your name" value={form.name} onChange={handleChange} className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <input type="email" name="email" required placeholder="Email" value={form.email} onChange={handleChange} className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <textarea name="message" required rows={5} placeholder="Project details" value={form.message} onChange={handleChange} className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <button disabled={loading} className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-white shadow hover:brightness-110 disabled:opacity-60">
                <Send className="h-4 w-4" />
                {loading ? 'Sending...' : 'Send message'}
              </button>
              {sent && <p className="text-sm text-green-700">Thanks! I’ll get back to you shortly.</p>}
            </div>
          </form>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <ul className="space-y-4">
              <li><span className="font-medium">Email:</span> <a href="mailto:hello@example.com" className="text-indigo-600">hello@example.com</a></li>
              <li><span className="font-medium">Location:</span> Remote • GMT±2</li>
              <li><span className="font-medium">Freelance:</span> Available for new projects</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
