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
            Consultoria para novos negócios
            
          </p>

          <h1 className="rise rise-delay-1 mt-6 font-serif text-[2.5rem] font-bold leading-[1.08] text-balance text-espresso sm:text-6xl lg:text-[3.6rem]">
            Da ideia à negócio que cresce, com decisões que têm critério.
          </h1>

          <p className="rise rise-delay-2 mt-7 max-w-xl text-lg leading-relaxed text-espresso">
            Uma sessão individual de 90 minutos para avaliar seu modelo de
            negócio, identificar os pontos que precisam de atenção e definir os
            próximos passos para os 30 dias seguintes.
          </p>

          {/* <p className="rise rise-delay-2 mt-5 max-w-xl leading-relaxed text-ink-soft">
            Sou João Moralins, consultor de novos negócios. Ajudo empreendedores
            a avaliar ideias, estruturar agências e tomar decisões com mais
            critério, antes de comprometer tempo e dinheiro.
          </p> */}

          <div className="rise rise-delay-3 mt-9">
            <CtaLink href="#contato">Quero avaliar minha ideia</CtaLink>
            <p className="mt-6 text-sm text-ink-soft">
              Prefere conversar primeiro?{' '}
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-espresso underline decoration-bronze decoration-2 underline-offset-4 transition-colors hover:text-bordeaux"
              >
                Fale comigo pelo WhatsApp
              </a>
            </p>
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
              alt="João Moralins, consultor de novos negócios, sentado em uma poltrona, de camisa social clara, com a mão apoiada no queixo"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover object-[50%_28%]"
            />
          </div>
        </figure>
      </div>
    </section>
  )
}
