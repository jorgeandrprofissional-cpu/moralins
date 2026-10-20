import Image from 'next/image'
import { buildWhatsAppUrl } from '@/lib/whatsapp'
import { CtaLink } from './cta-link'

export function Hero() {
  return (
    <section id="topo" className="bg-ivory">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-12 sm:px-8 lg:grid-cols-12 lg:gap-14 lg:pb-24 lg:pt-20">
        <div className="lg:col-span-7">
          <p className="eyebrow rise flex items-center gap-4 text-bordeaux">
            <span aria-hidden="true" className="h-px w-10 bg-bronze" />
            Consultoria para agências e novos negócios
          </p>

          <h1 className="rise rise-delay-1 mt-6 font-serif text-[2.5rem] font-bold leading-[1.08] text-balance text-espresso sm:text-6xl lg:text-[4rem]">
            Da ideia à agência que cresce, com decisões que têm critério.
          </h1>

          <p className="rise rise-delay-2 mt-7 max-w-xl text-lg leading-relaxed text-ink-soft">
            Sou João Moralins, consultor de novos negócios. Acompanho quem quer
            abrir uma agência e quem já tem uma funcionando, avaliando a ideia,
            a oferta e as prioridades, e dizendo com clareza o que se sustenta
            e o que não.
          </p>

          <div className="rise rise-delay-3 mt-9 flex flex-col gap-5 sm:flex-row sm:items-center">
            <CtaLink href="#contato">Conversar sobre o meu negócio</CtaLink>
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-espresso underline decoration-bronze decoration-2 underline-offset-8 transition-colors hover:text-bordeaux"
            >
              Prefiro chamar no WhatsApp
            </a>
          </div>

          <p className="mt-10 max-w-md border-l-2 border-bronze pl-4 text-sm leading-relaxed text-ink-soft">
            O primeiro passo é uma{' '}
            <a
              href="#sessao"
              className="font-semibold text-espresso underline decoration-bronze underline-offset-4 hover:text-bordeaux"
            >
              sessão individual de 90 minutos
            </a>{' '}
            para analisar seu negócio e definir os próximos passos, e chegar a um veredito e definir seu plano de ação para os próximos 30 dias.
            {' '} 
          </p>
        </div>

        <figure className="mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
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
          <figcaption className="mt-4 flex items-center gap-4 text-sm text-ink-soft">
            <span aria-hidden="true" className="h-px w-8 bg-bronze" />
            João Moralins, consultor de novos negócios
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
