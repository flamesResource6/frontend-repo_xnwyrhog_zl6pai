import { useState } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/20 bg-white/60 backdrop-blur-xl px-4 py-3 shadow-sm">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500" />
            <span className="font-semibold tracking-tight">RN Developer</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a aria-label="GitHub" href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-gray-100">
              <Github className="h-5 w-5" />
            </a>
            <a aria-label="LinkedIn" href="https://linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-gray-100">
              <Linkedin className="h-5 w-5" />
            </a>
            <a aria-label="Email" href="#contact" className="p-2 rounded-lg hover:bg-gray-100">
              <Mail className="h-5 w-5" />
            </a>
          </div>

          <button className="md:hidden p-2 rounded-lg hover:bg-gray-100" onClick={() => setOpen((v) => !v)} aria-label="Toggle Menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 rounded-2xl border border-white/20 bg-white/70 backdrop-blur-xl px-4 py-4">
            <nav className="flex flex-col gap-3">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm text-gray-800">
                  {l.label}
                </a>
              ))}
            </nav>
            <div className="mt-4 flex items-center gap-3">
              <a aria-label="GitHub" href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-gray-100">
                <Github className="h-5 w-5" />
              </a>
              <a aria-label="LinkedIn" href="https://linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-gray-100">
                <Linkedin className="h-5 w-5" />
              </a>
              <a aria-label="Email" href="#contact" className="p-2 rounded-lg hover:bg-gray-100">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
