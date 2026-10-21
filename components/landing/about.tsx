import Image from 'next/image'


export function About() {
  return (
    <section id="sobre" className="bg-ivory" aria-labelledby="sobre-titulo">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:py-24">
        <figure className="mx-auto w-full max-w-sm lg:col-span-4 lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-espresso">
            <Image
              src="/images/joao-moralins-bastidores.jpg"
              alt="Bastidores de uma gravação: a tela da câmera mostra João Moralins sentado, de camisa social, conversando"
              fill
              sizes="(min-width: 1024px) 33vw, 90vw"
              className="object-cover object-[50%_55%]"
            />
          </div>

        </figure>

        <div className="lg:col-span-8">
          <p className="eyebrow flex items-center gap-4 text-bordeaux">
            <span aria-hidden="true" className="h-px w-10 bg-bronze" />
            Sobre João
          </p>
          <h2
            id="sobre-titulo"
            className="mt-5 font-serif text-3xl font-bold leading-tight text-balance text-espresso sm:text-4xl lg:text-[2.75rem]"
          >
            Firme no diagnóstico. Próximo no trato.
          </h2>
          <div className="mt-6 max-w-2xl space-y-5 text-lg leading-relaxed text-ink-soft">
            <p>
              Sou João Moralins, consultor de novos negócios. Ajudo
              empreendedores a avaliar ideias, estruturar agências e tomar
              decisões com mais critério.
            </p>
            <p>
              Meu trabalho começa entendendo o que você pretende construir e
              por que acredita que pode funcionar. Depois, examinamos as
              premissas, as limitações e os pontos que ainda não estão bem
              resolvidos.
            </p>
            <p>
              Isso significa fazer perguntas difíceis, apontar inconsistências
              e reconhecer quando faltam informações para chegar a uma
              conclusão.
            </p>
            <p>
              Não estou aqui para confirmar toda ideia nem para decidir por
              você. Estou aqui para ajudar a enxergar o cenário com mais
              clareza, entender os riscos e escolher os próximos passos com
              fundamento.
            </p>
          </div>
          <p className="mt-8 max-w-2xl border-l-2 border-bronze pl-5 font-serif text-xl font-bold leading-snug text-espresso">
            Não prometo que um negócio dará certo. Meu compromisso é oferecer
            uma análise criteriosa e indicar o que merece atenção antes de você
            avançar.
          </p>
        </div>
      </div>
    </section>
  )
}
