import { about, education } from '../../data/profile'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-28">
      <div className="section-shell">
        <SectionHeading
          index="01"
          title="About"
          description="Academic background, technical focus, and the kind of problems I work on."
        />

        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-12">
          <Reveal>
            <div className="space-y-5 max-w-prose">
              {about.paragraphs.map((p, i) => (
                <p key={i} className="text-mist-300 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-xl border border-ink-700 bg-ink-900/60 p-6">
              <p className="text-sm font-mono text-signal-500 mb-3">Currently</p>
              <p className="text-mist-100 font-medium">{education.degree}</p>
              <p className="text-mist-300 text-sm mt-1">{education.university}</p>
              <p className="text-mist-400 text-sm mt-1">{education.date}</p>

              <div className="h-px bg-ink-700 my-5" />

              <p className="text-sm font-mono text-signal-500 mb-3">Focus areas</p>
              <ul className="text-mist-300 text-sm space-y-2">
                <li>Deep learning for image classification</li>
                <li>Real-time computer vision & object tracking</li>
                <li>Applied data preprocessing & analysis</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
