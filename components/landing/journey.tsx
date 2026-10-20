const steps = [
  {
    name: 'Validação',
    decision: 'Investir, ajustar ou parar.',
    defined: 'Se a ideia se sustenta e se cabe na sua realidade.',
  },
  {
    name: 'Direcionamento',
    decision: 'Para quem trabalhar e o que oferecer de diferente.',
    defined: 'Público, posicionamento e proposta de valor.',
  },
  {
    name: 'Estruturação',
    decision: 'Como o negócio funciona no dia a dia.',
    defined: 'Modelo de negócio e operação que não dependem de improviso.',
  },
  {
    name: 'Desenvolvimento',
    decision: 'Quais gargalos corrigir e quais oportunidades perseguir primeiro.',
    defined: 'Uma ordem de prioridades com critério.',
  },
  {
    name: 'Crescimento',
    decision: 'Quando e como ampliar a capacidade do negócio.',
    defined: 'Decisões de expansão apoiadas em fatos, não em suposição.',
  },
]

export function Journey() {
  return (
    <section className="bg-ivory" aria-labelledby="jornada-titulo">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="max-w-3xl">
          <p className="eyebrow flex items-center gap-4 text-bordeaux">
            <span aria-hidden="true" className="h-px w-10 bg-bronze" />
            A jornada
          </p>
          <h2
            id="jornada-titulo"
            className="mt-5 font-serif text-3xl font-bold leading-tight text-balance text-espresso sm:text-4xl lg:text-[2.75rem]"
          >
            Cinco etapas, cada uma com a sua decisão.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">
            Nem toda agência passa por todas, nem na mesma ordem. A conversa
            começa pela etapa em que você está.
          </p>
        </div>

        <ol className="relative mt-16 grid gap-12 lg:grid-cols-5 lg:gap-8">
          <div
            aria-hidden="true"
            className="absolute bottom-2 left-[5.5px] top-2 w-px bg-bronze lg:hidden"
          />
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-[5.5px] hidden h-px bg-bronze lg:block"
          />

          {steps.map((step, index) => (
            <li key={step.name} className="relative pl-9 lg:pl-0 lg:pt-10">
              <span
                aria-hidden="true"
                className={`absolute left-0 top-1.5 size-3 rounded-full border border-bronze lg:top-0 ${
                  index === 0 ? 'bg-bordeaux' : 'bg-ivory'
                }`}
              />
              <p className="eyebrow text-bordeaux">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-2 font-serif text-xl font-bold text-espresso">
                {step.name}
              </h3>
              <p className="mt-3 text-[0.95rem] font-semibold leading-snug text-espresso">
                {step.decision}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                <span className="block text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-espresso/70">
                  O que fica definido
                </span>
                <span className="mt-1 block">{step.defined}</span>
              </p>
            </li>
          ))}
        </ol>

        <p className="mt-14 max-w-2xl border-l-2 border-bronze pl-5 text-ink-soft leading-relaxed">
          <a
            href="#sessao"
            className="font-semibold text-espresso underline decoration-bronze decoration-2 underline-offset-4 hover:text-bordeaux"
          >
            A sessão de validação
          </a>{' '}
          é o ponto de entrada e cobre a primeira etapa. Para as demais, o
          formato é combinado depois da primeira conversa.
        </p>
      </div>
    </section>
  )
}
