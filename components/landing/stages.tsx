const stages = [
  {
    label: 'Validando',
    situation:
      'Tenho uma ideia de agência, ou de um novo serviço, e ainda não sei se ela se sustenta.',
    decision:
      'Investir tempo e dinheiro agora, ajustar a ideia ou deixá-la de lado. Cada premissa é testada antes de custar caro.',
  },
  {
    label: 'Estruturando',
    situation:
      'Os clientes chegam, mas cada projeto é resolvido no improviso e não sei o que me diferencia de outras agências.',
    decision:
      'O que definir primeiro: para quem a agência trabalha, o que ela oferece ou como a operação roda.',
  },
  {
    label: 'Crescendo',
    situation:
      'A agência funciona, existem várias frentes possíveis e não sei qual delas merece prioridade.',
    decision:
      'Qual gargalo corrigir antes de ampliar a equipe, a oferta ou a carteira de clientes.',
  },
]

export function Stages() {
  return (
    <section className="bg-cream" aria-labelledby="momentos-titulo">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:py-28">
        <div className="lg:col-span-4">
          <p className="eyebrow flex items-center gap-4 text-bordeaux">
            <span aria-hidden="true" className="h-px w-10 bg-bronze" />
            Seu momento
          </p>
          <h2
            id="momentos-titulo"
            className="mt-5 font-serif text-3xl font-bold leading-tight text-balance text-espresso sm:text-4xl"
          >
            A pergunta certa depende da fase em que a agência está.
          </h2>
          <p className="mt-6 text-ink-soft leading-relaxed">
            Desorganização, oferta parecida com a de todo mundo e decisões que
            se contradizem costumam nascer de fundamentos mal definidos. Por
            isso a conversa começa pelo diagnóstico, antes de qualquer
            recomendação.
          </p>
        </div>

        <div className="lg:col-span-8">
          <p className="text-sm text-ink-soft">
            Três pontos de partida possíveis:
          </p>
          <ol className="mt-4 border-t border-espresso/30">
            {stages.map((stage) => (
              <li
                key={stage.label}
                className="grid gap-4 border-b border-espresso/30 py-8 sm:grid-cols-[9rem_1fr] sm:gap-8"
              >
                <p className="eyebrow pt-2 text-bordeaux">{stage.label}</p>
                <div>
                  <p className="font-serif text-xl font-bold leading-snug text-espresso sm:text-2xl">
                    {stage.situation}
                  </p>
                  <p className="mt-4 leading-relaxed text-ink-soft">
                    <span className="font-semibold text-espresso">
                      A decisão em jogo:{' '}
                    </span>
                    {stage.decision}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <p className="mt-8 text-ink-soft">
            Não sabe em qual está?{' '}
            <a
              href="#contato"
              className="font-semibold text-espresso underline decoration-bronze decoration-2 underline-offset-4 hover:text-bordeaux"
            >
              Conte como está hoje
            </a>{' '}
            e eu ajudo a identificar.
          </p>
        </div>
      </div>
    </section>
  )
}
