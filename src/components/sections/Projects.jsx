import { useMemo, useState } from 'react'
import { Github } from 'lucide-react'
import { projects, projectCategories } from '../../data/profile'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'

function ProjectCard({ project }) {
  return (
    <div className="group h-full rounded-xl border border-ink-700 bg-ink-900/70 p-6 flex flex-col transition-colors hover:border-signal-500/50">
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="text-mist-100 font-medium leading-snug">{project.name}</h3>
        <span className="shrink-0 text-[11px] font-mono px-2 py-1 rounded bg-ink-800 border border-ink-700 text-signal-400">
          {project.category}
        </span>
      </div>

      <p className="text-mist-300 text-sm leading-relaxed mb-4">{project.description}</p>

      {project.metrics?.length > 0 && (
        <div className="grid grid-cols-2 gap-2 mb-4">
          {project.metrics.map((m) => (
            <div key={m.label} className="rounded-lg bg-ink-800/70 border border-ink-700 px-3 py-2">
              <p className="text-signal-400 font-mono text-base leading-none">{m.value}</p>
              <p className="text-mist-400 text-[11px] mt-1 leading-snug">{m.label}</p>
            </div>
          ))}
        </div>
      )}

      {project.highlight && (
        <p className="text-ember-400 text-xs mb-4 leading-relaxed">{project.highlight}</p>
      )}

      <div className="mt-auto flex flex-wrap gap-2 mb-4">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs font-mono px-2 py-0.5 rounded bg-ink-800 border border-ink-700 text-mist-300"
          >
            {t}
          </span>
        ))}
      </div>

      {project.github ? (
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm text-mist-200 hover:text-signal-400 transition-colors"
        >
          <Github size={15} /> View repository
        </a>
      ) : (
        <span className="inline-flex items-center gap-2 text-sm text-mist-500">
          <Github size={15} /> Repository link on request
        </span>
      )}
    </div>
  )
}

export default function Projects() {
  const [active, setActive] = useState('All')

  const filtered = useMemo(
    () => (active === 'All' ? projects : projects.filter((p) => p.category === active)),
    [active]
  )

  return (
    <section id="projects" className="py-24 sm:py-28 bg-ink-900/40 border-y border-ink-700/60">
      <div className="section-shell">
        <SectionHeading
          index="04"
          title="Projects"
          description="Selected work, each built around comparing approaches rather than accepting the first working result."
        />

        <div className="flex flex-wrap gap-2 mb-10">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`text-sm px-4 py-2 rounded-md border transition-colors ${
                active === cat
                  ? 'border-signal-500 text-signal-400 bg-signal-500/10'
                  : 'border-ink-700 text-mist-300 hover:border-mist-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((project, i) => (
            <Reveal key={project.name} delay={i * 70}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
