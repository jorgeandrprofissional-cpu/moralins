const verdicts = ['Vale a pena.', 'Vale com ajustes.', 'Não vale como está.']

const items = [
  {
    title: 'Seu modelo de negócio',
    text: 'O Business Model Canvas completo, com os nove blocos preenchidos.',
  },
  {
    title: 'Nota por bloco',
    text: 'De 0 a 10, mostrando onde a ideia está forte e onde está frágil.',
  },
  {
    title: 'Adequação fundador-negócio',
    text: 'Uma pontuação de 0 a 10 sobre o encaixe entre você e o negócio.',
  },
  {
    title: 'Plano de 30 dias',
    text: 'Testes reais: conversar com clientes potenciais, tentar uma pré-venda e rodar um piloto pequeno.',
  },
  {
    title: 'Follow-up',
    text: 'Acompanhamento pelo WhatsApp para saber como foi a execução.',
  },
]

export function Deliverables() {
  return (
    <section className="bg-espresso text-ivory" aria-labelledby="entregas-titulo">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:py-28">
        <div className="lg:col-span-5">
          <p className="eyebrow flex items-center gap-4 text-bronze">
            <span aria-hidden="true" className="h-px w-10 bg-bronze" />
            O que você recebe
          </p>
          <h2
            id="entregas-titulo"
            className="mt-5 font-serif text-3xl font-bold leading-tight text-balance sm:text-4xl"
          >
            Um PDF com o veredito e os próximos 30 dias.
          </h2>
          <p className="mt-6 leading-relaxed text-cream/80">
            O veredito é um destes três.
          </p>
          <ul className="mt-5 border-l-2 border-bronze pl-6">
            {verdicts.map((verdict) => (
              <li
                key={verdict}
                className="py-1.5 font-serif text-2xl font-bold leading-tight text-ivory sm:text-3xl"
              >
                {verdict}
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-sm leading-relaxed text-cream/80">
            Se for o terceiro, pensamos juntos em um caminho mais viável.
          </p>
        </div>

        <ol className="border-t border-bronze/50 lg:col-span-7">
          {items.map((item, index) => (
            <li
              key={item.title}
              className="grid grid-cols-[3rem_1fr] gap-4 border-b border-bronze/50 py-6"
            >
              <span className="font-serif text-2xl font-bold text-bronze">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="font-serif text-xl font-bold">{item.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-cream/80">
                  {item.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
