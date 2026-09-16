import { Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer className="border-t border-ink-700/60 py-10">
      <div className="section-shell flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <p className="font-display text-mist-100 font-medium">{profile.name}</p>
          <p className="text-mist-400 text-sm mt-0.5">AI & Data Science Student</p>
        </div>

        <div className="flex items-center gap-5">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-mist-400 hover:text-signal-400 transition-colors">
            <Github size={18} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-mist-400 hover:text-signal-400 transition-colors">
            <Linkedin size={18} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="text-mist-400 hover:text-signal-400 transition-colors">
            <Mail size={18} />
          </a>
        </div>

        <p className="text-mist-500 text-xs">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
