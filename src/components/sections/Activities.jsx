import { Users } from 'lucide-react'
import { activities, languages } from '../../data/profile'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'

export default function Activities() {
  return (
    <section id="activities" className="py-24 sm:py-28 bg-ink-900/40 border-y border-ink-700/60">
      <div className="section-shell">
        <SectionHeading
          index="06"
          title="Activities & involvement"
          description="Community and media roles alongside my technical work."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14">
          {activities.map((a, i) => (
            <Reveal key={a.org} delay={i * 60}>
              <div className="h-full rounded-xl border border-ink-700 bg-ink-900/70 p-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="shrink-0 w-9 h-9 rounded-lg bg-ink-800 border border-ink-700 flex items-center justify-center">
                    <Users size={16} className="text-signal-400" />
                  </div>
                  <div>
                    <h3 className="text-mist-100 font-medium leading-snug">{a.org}</h3>
                    <p className="text-signal-500 text-xs font-mono mt-0.5">{a.role}</p>
                  </div>
                </div>
                <p className="text-mist-300 text-sm leading-relaxed">{a.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="flex flex-wrap gap-8">
            <div>
              <p className="font-mono text-xs text-signal-500 mb-2">Languages</p>
              <div className="flex gap-4">
                {languages.map((l) => (
                  <span key={l.name} className="text-mist-300 text-sm">
                    {l.name} <span className="text-mist-500">— {l.level}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
