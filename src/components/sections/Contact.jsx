import { useState } from 'react'
import { Mail, Github, Linkedin, MapPin, Send } from 'lucide-react'
import { profile } from '../../data/profile'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const mailtoHref = () => {
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || 'your website'}`)
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name || ''} ${form.email ? `(${form.email})` : ''}`
    )
    return `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="py-24 sm:py-28">
      <div className="section-shell">
        <SectionHeading
          index="07"
          title="Contact"
          description="Open to internships, junior AI/ML roles, and collaboration on data-driven projects."
        />

        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10">
          <Reveal>
            <div className="space-y-5">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 text-mist-200 hover:text-signal-400 transition-colors"
              >
                <Mail size={18} /> {profile.email}
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-mist-200 hover:text-signal-400 transition-colors"
              >
                <Linkedin size={18} /> linkedin.com/in/shaza-abdulnaser
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-mist-200 hover:text-signal-400 transition-colors"
              >
                <Github size={18} /> github.com/ShazaNasser20
              </a>
              <p className="flex items-center gap-3 text-mist-400">
                <MapPin size={18} /> {profile.location}
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="rounded-xl border border-ink-700 bg-ink-900/70 p-6 space-y-4"
            >
              <p className="text-xs text-mist-400 -mt-1 mb-1">
                This form opens your email client with the message pre-filled — it does not send automatically.
              </p>

              <div>
                <label htmlFor="name" className="block text-sm text-mist-300 mb-1.5">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-md bg-ink-800 border border-ink-700 px-3 py-2.5 text-mist-100 text-sm focus:border-signal-500 outline-none"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-mist-300 mb-1.5">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-md bg-ink-800 border border-ink-700 px-3 py-2.5 text-mist-100 text-sm focus:border-signal-500 outline-none"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-mist-300 mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full rounded-md bg-ink-800 border border-ink-700 px-3 py-2.5 text-mist-100 text-sm focus:border-signal-500 outline-none resize-none"
                  placeholder="What would you like to talk about?"
                />
              </div>

              <a
                href={mailtoHref()}
                className="inline-flex items-center gap-2 rounded-md bg-signal-500 text-ink-950 px-5 py-2.5 text-sm font-medium hover:bg-signal-400 transition-colors"
              >
                <Send size={15} /> Open in email
              </a>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
