import { skills } from '../../data/profile'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-28 bg-ink-900/40 border-y border-ink-700/60">
      <div className="section-shell">
        <SectionHeading
          index="02"
          title="Skills"
          description="Grouped by the part of the pipeline each tool supports — from raw data to a trained, evaluated model."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((group, i) => (
            <Reveal key={group.category} delay={i * 60}>
              <div className="h-full rounded-xl border border-ink-700 bg-ink-900/70 p-6 hover:border-signal-500/40 transition-colors">
                <h3 className="text-mist-100 font-medium mb-4">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-ink-800 border border-ink-700 text-mist-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
