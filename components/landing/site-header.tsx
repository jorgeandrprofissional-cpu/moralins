import { MessageCircle } from 'lucide-react'
import { buildWhatsAppUrl } from '@/lib/whatsapp'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-espresso/10 bg-ivory/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#topo" className="flex flex-col leading-none" aria-label="João Moralins, início">
          <span className="font-label text-[0.8rem] font-semibold uppercase tracking-[0.24em] text-espresso">
            João Moralins
          </span>
          <span className="mt-1 hidden text-[0.7rem] tracking-wide text-ink-soft sm:block">
            Consultor de Negócios
          </span>
        </a>

        <a
          href={buildWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-10 items-center gap-2 rounded-sm border border-espresso/40 px-4 text-sm font-semibold text-espresso transition-colors hover:border-espresso hover:bg-espresso hover:text-ivory"
        >
          <MessageCircle aria-hidden="true" className="size-4" />
          Chamar no WhatsApp
        </a>
      </div>
    </header>
  )
}
