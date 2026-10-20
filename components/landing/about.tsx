import Image from 'next/image'

export function About() {
  return (
    <section className="bg-cream" aria-labelledby="sobre-titulo">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:py-28">
        <figure className="lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-espresso">
            <Image
              src="/images/joao-moralins-bastidores.jpg"
              alt="Bastidores de uma gravação: a tela da câmera mostra João Moralins sentado, de camisa social, conversando"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover object-[50%_55%]"
            />
          </div>
          <figcaption className="mt-4 text-sm text-ink-soft">
            Bastidores de uma gravação.
          </figcaption>
        </figure>

        <div className="lg:col-span-7">
          <p className="eyebrow flex items-center gap-4 text-bordeaux">
            <span aria-hidden="true" className="h-px w-10 bg-bronze" />
            Quem conduz a conversa
          </p>
          <h2
            id="sobre-titulo"
            className="mt-5 font-serif text-3xl font-bold leading-tight text-balance text-espresso sm:text-4xl lg:text-[2.75rem]"
          >
            Firme no diagnóstico. Próximo no trato.
          </h2>
          <div className="mt-6 max-w-xl space-y-5 text-lg leading-relaxed text-ink-soft">
            <p>
              Sou João Moralins, consultor de novos negócios. Meu trabalho é
              ajudar quem está abrindo ou tocando uma agência a decidir com
              mais critério e menos suposição.
            </p>
            <p>
              Quando você me conta a sua ideia, quero entender o que você
              enxerga nela. Depois faço as perguntas difíceis: quais premissas
              ainda não foram testadas, onde o modelo não fecha, o que falta
              para a ideia se sustentar. Digo com clareza o que está de pé e o
              que não está. A decisão continua sendo sua.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
