import { ArrowDownToLine, Github, Linkedin, FolderGit2 } from 'lucide-react'
import { profile } from '../../data/profile'
import Button from '../ui/Button'
import photo from '../../assets/shaza-photo.jpg'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div className="absolute inset-0 grid-backdrop bg-grid-fade pointer-events-none" />

      {/* Decorative node graph, hidden from screen readers */}
      <svg
        aria-hidden="true"
        className="absolute -right-24 top-16 hidden lg:block w-[520px] h-[520px] opacity-70"
        viewBox="0 0 500 500"
        fill="none"
      >
        <g className="animate-drift">
          <circle cx="120" cy="90" r="3" fill="#2FD9C4" />
          <circle cx="260" cy="60" r="2.5" fill="#8B96AA" />
          <circle cx="380" cy="140" r="3.5" fill="#F0A85A" />
          <circle cx="330" cy="260" r="2.5" fill="#2FD9C4" />
          <circle cx="180" cy="220" r="2" fill="#8B96AA" />
          <circle cx="90" cy="300" r="3" fill="#2FD9C4" />
          <circle cx="420" cy="320" r="2.5" fill="#8B96AA" />
          <path
            d="M120 90 L260 60 M260 60 L380 140 M380 140 L330 260 M330 260 L180 220 M180 220 L120 90 M180 220 L90 300 M330 260 L420 320"
            stroke="#28344A"
            strokeWidth="1"
          />
        </g>
      </svg>

      <div className="section-shell relative grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
        <div>
          <p className="font-mono text-sm text-signal-500 mb-5">
            AI & Data Science · Assiut, Egypt
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-semibold leading-[1.1] tracking-tight text-mist-100">
            Shaza Abdulnaser Sayed
          </h1>

          <p className="mt-5 text-xl text-mist-200 leading-snug max-w-xl">
            {profile.headline}
          </p>

          <p className="mt-6 text-mist-300 leading-relaxed max-w-xl">
            {profile.summary}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Button href="#projects" icon={FolderGit2}>
              View projects
            </Button>
            <Button href={profile.cvFile} variant="ghost" icon={ArrowDownToLine} download>
              Download CV
            </Button>
            <Button href="#contact" variant="subtle">
              Contact me
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-5">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="text-mist-300 hover:text-signal-400 transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="text-mist-300 hover:text-signal-400 transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className="relative mx-auto lg:mx-0">
          <div className="absolute -inset-3 rounded-[1.75rem] bg-gradient-to-br from-signal-500/20 via-transparent to-ember-500/10 blur-xl" />
          <div className="relative w-64 sm:w-80 aspect-[4/5] rounded-[1.5rem] overflow-hidden border border-ink-700 shadow-2xl shadow-black/40">
            <img
              src={photo}
              alt="Portrait of Shaza Abdulnaser Sayed"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
