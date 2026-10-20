const stages = [
  {
    title: 'Estou validando uma ideia',
    situation:
      'Tenho uma ideia de agência ou de um novo serviço, mas ainda não sei se vale a pena investir nela.',
    need: 'Precisamos avaliar as hipóteses, os riscos e o que deve ser testado antes de avançar.',
  },
  {
    title: 'Estou estruturando minha agência',
    situation:
      'Já tenho clientes, mas ainda dependo muito do improviso e tenho dificuldade para definir meu diferencial.',
    need: 'Precisamos identificar o que organizar primeiro para construir uma operação mais coerente.',
  },
  {
    title: 'Quero crescer com mais critério',
    situation:
      'Minha agência já funciona, mas não sei qual caminho priorizar: ampliar a oferta, conquistar novos clientes ou estruturar a operação.',
    need: 'Precisamos entender os principais gargalos e identificar onde concentrar esforços.',
  },
]

export function Stages() {
  return (
    <section id="momento" className="bg-cream" aria-labelledby="momento-titulo">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-24">
        <div className="max-w-2xl">
          <p className="eyebrow flex items-center gap-4 text-bordeaux">
            <span aria-hidden="true" className="h-px w-10 bg-bronze" />
            Seu momento
          </p>
          <h2
            id="momento-titulo"
            className="mt-5 font-serif text-3xl font-bold leading-tight text-balance text-espresso sm:text-4xl"
          >
            Qual decisão você precisa tomar agora?
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            Cada fase de um negócio traz desafios diferentes. O primeiro passo
            é entender seu momento para identificar o que merece atenção.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {stages.map((stage) => (
            <li
              key={stage.title}
              className="flex flex-col border-t-2 border-bronze bg-ivory p-7"
            >
              <h3 className="font-serif text-xl font-bold leading-snug text-espresso">
                {stage.title}
              </h3>
              <p className="mt-4 leading-relaxed text-ink-soft">
                {stage.situation}
              </p>
              <p className="mt-5 border-t border-espresso/15 pt-5 italic leading-relaxed text-espresso">
                {stage.need}
              </p>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-ink-soft">
          Não sabe exatamente em qual momento está?{' '}
          <a
            href="#contato"
            className="font-semibold text-espresso underline decoration-bronze decoration-2 underline-offset-4 hover:text-bordeaux"
          >
            Conte sua situação e vamos entender por onde começar.
          </a>
        </p>
      </div>
    </section>
  )
}
