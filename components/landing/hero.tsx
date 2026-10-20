import Image from 'next/image'
import { buildWhatsAppUrl } from '@/lib/whatsapp'
import { CtaLink } from './cta-link'

const facts = [
  { value: '90 min', label: 'Sessão individual' },
  { value: '1 PDF', label: 'Com tudo organizado' },
  { value: '30 dias', label: 'Plano de testes reais' },
]

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden bg-ivory">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-12 sm:px-8 lg:grid-cols-12 lg:gap-10 lg:pb-24 lg:pt-20">
        <div className="lg:col-span-7">
          <p className="eyebrow rise flex items-center gap-4 text-bordeaux">
            <span aria-hidden="true" className="h-px w-10 bg-bronze" />
            Para quem tem uma ideia no papel
          </p>

          <h1 className="rise rise-delay-1 mt-6 font-serif text-[2.6rem] font-bold leading-[1.06] text-balance text-espresso sm:text-6xl lg:text-[4.25rem]">
            Descubra se sua ideia vale a pena
            <span className="mt-3 block text-[0.5em] leading-tight text-ink-soft">
              (antes de perder tempo e dinheiro)
            </span>
          </h1>

          <p className="rise rise-delay-2 mt-7 max-w-xl text-lg leading-relaxed text-ink-soft">
            Chega de perder meses e dinheiro no escuro. Em uma sessão
            individual, você sai sabendo se sua ideia vale a pena, o que testar
            primeiro e o que fazer nos próximos 30 dias.
          </p>

          <div className="rise rise-delay-3 mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <CtaLink href="#vaga">Quero validar minha ideia</CtaLink>
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-espresso underline decoration-bronze decoration-2 underline-offset-8 transition-colors hover:text-bordeaux"
            >
              Prefiro chamar no WhatsApp
            </a>
          </div>

          <dl className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-bronze/60 pt-6">
            {facts.map((fact) => (
              <div key={fact.value}>
                <dt className="font-serif text-2xl font-bold text-espresso sm:text-3xl">
                  {fact.value}
                </dt>
                <dd className="mt-1 text-xs leading-snug text-ink-soft sm:text-sm">
                  {fact.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute -bottom-4 -right-4 h-full w-full rounded-sm border border-bronze"
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-cream">
            <Image
              src="/images/joao-moralins-retrato.jpg"
              alt="João Moralins, consultor de negócios, sentado em uma poltrona, de camisa social clara, com a mão apoiada no queixo"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover object-[50%_28%]"
            />
          </div>
          <div className="absolute -bottom-6 left-4 max-w-[15rem] bg-espresso px-5 py-4 text-ivory shadow-lg sm:left-[-1.5rem]">
            <p className="eyebrow text-bronze">João Moralins</p>
            <p className="mt-1 text-sm leading-snug text-cream">
              Consultor de negócios. Firme no diagnóstico, próximo no trato.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
