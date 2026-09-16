import { MapPin } from 'lucide-react'
import { experience } from '../../data/profile'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-28">
      <div className="section-shell">
        <SectionHeading
          index="03"
          title="Experience"
          description="Training programs and internships that shaped how I approach ML workflows."
        />

        <div className="relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-ink-700 hidden sm:block" />

          <div className="space-y-10">
            {experience.map((job, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="relative sm:pl-10">
                  <span className="hidden sm:block absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full bg-ink-950 border-2 border-signal-500" />

                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                    <h3 className="text-mist-100 font-medium text-lg">{job.role}</h3>
                    <span className="font-mono text-sm text-signal-500">{job.date}</span>
                  </div>

                  <p className="text-mist-300 text-sm mb-3">{job.org}</p>

                  {job.location && (
                    <p className="flex items-center gap-1.5 text-mist-400 text-xs mb-3">
                      <MapPin size={12} /> {job.location}
                    </p>
                  )}

                  <ul className="space-y-1.5 text-mist-300 text-sm leading-relaxed">
                    {job.points.map((point, j) => (
                      <li key={j} className="flex gap-2">
                        <span className="text-signal-500 mt-1.5 w-1 h-1 rounded-full bg-signal-500 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {job.tech.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {job.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs font-mono px-2 py-0.5 rounded bg-ink-800 border border-ink-700 text-mist-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
