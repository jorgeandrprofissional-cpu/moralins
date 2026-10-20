import { MessageCircle } from 'lucide-react'
import { buildWhatsAppUrl } from '@/lib/whatsapp'
import { LeadForm } from './lead-form'

const steps = [
  'Me chame no direct ou preencha o formulário',
  'Combinamos o melhor horário',
  'Você faz a sessão e recebe o PDF completo',
]

export function Booking() {
  return (
    <section id="vaga" className="bg-espresso text-ivory" aria-labelledby="vaga-titulo">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:py-28">
        <div className="lg:col-span-6">
          <p className="eyebrow flex items-center gap-4 text-bronze">
            <span aria-hidden="true" className="h-px w-10 bg-bronze" />
            Como garantir sua vaga
          </p>
          <h2
            id="vaga-titulo"
            className="mt-5 font-serif text-3xl font-bold leading-tight text-balance sm:text-4xl lg:text-[2.75rem]"
          >
            Vagas limitadas. Saia sabendo o que fazer nos próximos 30 dias.
          </h2>

          <ol className="mt-10 space-y-6">
            {steps.map((step, index) => (
              <li key={step} className="flex items-start gap-5">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-bronze font-serif text-lg font-bold text-bronze">
                  {index + 1}
                </span>
                <span className="pt-1.5 text-lg leading-snug text-cream">{step}</span>
              </li>
            ))}
          </ol>

          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex min-h-12 items-center gap-3 rounded-sm border border-bronze px-6 py-3 text-[0.95rem] font-semibold text-cream transition-colors hover:bg-bronze hover:text-espresso"
          >
            <MessageCircle aria-hidden="true" className="size-4" />
            Chamar no WhatsApp
          </a>
        </div>

        <div className="lg:col-span-6">
          <div className="rounded-sm bg-cream p-6 shadow-xl sm:p-10">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  )
}
