import { MessageCircle } from 'lucide-react'
import { buildWhatsAppUrl } from '@/lib/whatsapp'
import { LeadForm } from './lead-form'

export function Booking() {
  return (
    <section
      id="contato"
      className="bg-espresso text-ivory"
      aria-labelledby="contato-titulo"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:py-24">
        <div className="lg:col-span-5">
          <p className="eyebrow flex items-center gap-4 text-bronze">
            <span aria-hidden="true" className="h-px w-10 bg-bronze" />
            Contato
          </p>
          <h2
            id="contato-titulo"
            className="mt-5 font-serif text-3xl font-bold leading-tight text-balance sm:text-4xl lg:text-[2.5rem]"
          >
            Qual decisão seu negócio precisa tomar agora?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-cream/85">
            Conte brevemente o que está construindo ou o que precisa resolver.
            Vamos entender seu momento e avaliar se a sessão faz sentido para
            você.
          </p>

          <p className="mt-10 text-cream/85">Prefere conversar diretamente?</p>
          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex min-h-12 items-center gap-3 rounded-sm border border-bronze px-6 py-3 text-[0.95rem] font-semibold text-cream transition-colors hover:bg-bronze hover:text-espresso"
          >
            <MessageCircle aria-hidden="true" className="size-4" />
            Fale comigo pelo WhatsApp
          </a>
        </div>

        <div className="lg:col-span-7">
          <div className="rounded-sm bg-cream p-6 sm:p-10">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  )
}
