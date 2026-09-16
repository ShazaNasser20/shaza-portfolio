const variants = {
  primary:
    'bg-signal-500 text-ink-950 hover:bg-signal-400 border border-transparent',
  ghost:
    'bg-transparent text-mist-100 border border-mist-600/60 hover:border-signal-500/70 hover:text-signal-400',
  subtle:
    'bg-ink-800 text-mist-100 border border-ink-700 hover:border-signal-500/50',
}

export default function Button({
  as = 'a',
  href,
  onClick,
  icon: Icon,
  children,
  variant = 'primary',
  className = '',
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-medium transition-colors duration-200 ${variants[variant]} ${className}`

  if (as === 'a') {
    return (
      <a href={href} onClick={onClick} className={classes} {...props}>
        {Icon && <Icon size={16} strokeWidth={2} />}
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={classes} {...props}>
      {Icon && <Icon size={16} strokeWidth={2} />}
      {children}
    </button>
  )
}
