import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks, profile } from '../data/profile'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-ink-950/85 backdrop-blur-md border-b border-ink-700/60' : 'bg-transparent'
      }`}
    >
      <nav className="section-shell flex items-center justify-between h-16">
        <a href="#top" className="font-display text-lg font-semibold tracking-tight text-mist-100">
          Shaza<span className="text-signal-500">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm text-mist-300">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-signal-400 transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={`mailto:${profile.email}`}
          className="hidden md:inline-flex items-center rounded-md border border-mist-600/60 px-4 py-2 text-sm text-mist-100 hover:border-signal-500/70 hover:text-signal-400 transition-colors"
        >
          Contact
        </a>

        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-mist-100 p-2"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-ink-950 border-t border-ink-700/60">
          <ul className="section-shell flex flex-col py-6 gap-5 text-base">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-mist-200 hover:text-signal-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${profile.email}`}
                onClick={() => setOpen(false)}
                className="inline-block text-signal-400"
              >
                {profile.email}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
