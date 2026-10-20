import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

type CtaLinkProps = {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'light' | 'outline'
  external?: boolean
  arrow?: boolean
  className?: string
}

const variants = {
  primary:
    'bg-bordeaux text-ivory hover:bg-espresso focus-visible:outline-bronze',
  light: 'bg-cream text-espresso hover:bg-ivory',
  outline:
    'border border-espresso/40 text-espresso hover:border-espresso hover:bg-espresso hover:text-ivory',
}

export function CtaLink({
  href,
  children,
  variant = 'primary',
  external = false,
  arrow = true,
  className,
}: CtaLinkProps) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={cn(
        'group inline-flex min-h-12 items-center justify-center gap-3 rounded-sm px-7 py-3.5 text-[0.95rem] font-semibold tracking-wide transition-colors duration-200',
        variants[variant],
        className,
      )}
    >
      <span>{children}</span>
      {arrow && (
        <ArrowRight
          aria-hidden="true"
          className="size-4 transition-transform duration-200 group-hover:translate-x-1"
        />
      )}
    </a>
  )
}
