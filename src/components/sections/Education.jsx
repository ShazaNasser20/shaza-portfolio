import { GraduationCap } from 'lucide-react'
import { education } from '../../data/profile'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'

export default function Education() {
  return (
    <section id="education" className="py-24 sm:py-28">
      <div className="section-shell">
        <SectionHeading index="05" title="Education" />

        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-start gap-5 rounded-xl border border-ink-700 bg-ink-900/70 p-6 max-w-2xl">
            <div className="shrink-0 w-11 h-11 rounded-lg bg-signal-500/10 border border-signal-500/30 flex items-center justify-center">
              <GraduationCap size={20} className="text-signal-400" />
            </div>
            <div>
              <h3 className="text-mist-100 font-medium text-lg">{education.degree}</h3>
              <p className="text-mist-300 mt-1">{education.university}</p>
              <p className="font-mono text-sm text-signal-500 mt-2">{education.date}</p>
              <p className="text-mist-400 text-sm mt-1">{education.location}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
