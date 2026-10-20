import Image from 'next/image'

export function About() {
  return (
    <section className="bg-cream" aria-labelledby="sobre-titulo">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:py-28">
        <div className="relative lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-espresso">
            <Image
              src="/images/joao-moralins-bastidores.jpg"
              alt="Bastidores de uma gravação: a tela da câmera mostra João Moralins sentado, de camisa social, conversando"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover object-[50%_55%]"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute -left-3 -top-3 h-16 w-16 border-l border-t border-bronze"
          />
        </div>

        <div className="lg:col-span-7">
          <p className="eyebrow flex items-center gap-4 text-bordeaux">
            <span aria-hidden="true" className="h-px w-10 bg-bronze" />
            Quem conduz a sessão
          </p>
          <h2
            id="sobre-titulo"
            className="mt-5 font-serif text-3xl font-bold leading-tight text-balance text-espresso sm:text-4xl lg:text-[2.75rem]"
          >
            Firme no diagnóstico. Próximo no trato.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            Eu sou João Moralins, consultor de negócios. Trato a sua ideia com
            respeito e com critério: quero entender o que você enxerga nela e,
            ao mesmo tempo, dizer com clareza o que se sustenta e o que não.
          </p>

          <figure className="mt-10 grid gap-px overflow-hidden border border-bronze/60 bg-bronze/60 sm:grid-cols-2">
            <blockquote className="bg-cream p-6">
              <p className="eyebrow text-bordeaux">No diagnóstico</p>
              <p className="mt-3 font-serif text-xl font-bold leading-snug text-espresso">
                “Vale ou não vale. Eu te mostro por quê.”
              </p>
            </blockquote>
            <blockquote className="bg-cream p-6">
              <p className="eyebrow text-bordeaux">No trato</p>
              <p className="mt-3 font-serif text-xl font-bold leading-snug text-espresso">
                “Conta sua ideia. Eu quero entender o que você enxerga nela.”
              </p>
            </blockquote>
          </figure>
        </div>
      </div>
    </section>
  )
}
