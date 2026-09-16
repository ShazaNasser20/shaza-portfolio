export default function SectionHeading({ index, title, description, align = 'left' }) {
  return (
    <div className={`mb-12 flex flex-col gap-3 ${align === 'center' ? 'items-center text-center' : ''}`}>
      <div className="flex items-baseline gap-3">
        {index && (
          <span className="font-mono text-sm text-signal-500/80">{index}</span>
        )}
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">{title}</h2>
      </div>
      {description && (
        <p className="max-w-prose text-mist-300 leading-relaxed">{description}</p>
      )}
      <div className="h-px w-16 bg-gradient-to-r from-signal-500 to-transparent" />
    </div>
  )
}
