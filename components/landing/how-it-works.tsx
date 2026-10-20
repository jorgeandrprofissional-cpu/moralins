const canvasCells = [
  { name: 'Segmentos de clientes', placement: 'lg:col-span-2 lg:col-start-9 lg:row-span-2 lg:row-start-1' },
  { name: 'Proposta de valor', placement: 'bg-cream lg:col-span-2 lg:col-start-5 lg:row-span-2 lg:row-start-1' },
  { name: 'Canais', placement: 'lg:col-span-2 lg:col-start-7 lg:row-start-2' },
  { name: 'Relacionamento com clientes', placement: 'lg:col-span-2 lg:col-start-7 lg:row-start-1' },
  { name: 'Fontes de receita', placement: 'lg:col-span-5 lg:col-start-6 lg:row-start-3' },
  { name: 'Recursos principais', placement: 'lg:col-span-2 lg:col-start-3 lg:row-start-2' },
  { name: 'Atividades principais', placement: 'lg:col-span-2 lg:col-start-3 lg:row-start-1' },
  { name: 'Parcerias principais', placement: 'lg:col-span-2 lg:col-start-1 lg:row-span-2 lg:row-start-1' },
  { name: 'Estrutura de custos', placement: 'col-span-2 lg:col-span-5 lg:col-start-1 lg:row-start-3' },
]

const founderDimensions = [
  {
    title: 'Tempo disponível',
    text: 'Quantas horas por semana você consegue dedicar e se isso conflita com emprego, família ou estudos.',
  },
  {
    title: 'Recursos financeiros',
    text: 'Quanto dinheiro você tem ou consegue acessar para validar e para os primeiros meses.',
  },
  {
    title: 'Habilidades e experiência',
    text: 'Se você já tem as competências que o negócio exige ou vai precisar aprender do zero.',
  },
  {
    title: 'Rede e recursos',
    text: 'Contatos, fornecedores, possíveis clientes e parceiros com quem você já pode contar.',
  },
  {
    title: 'Perfil e estilo de vida',
    text: 'Se o tipo de negócio combina com a sua personalidade e com a vida que você quer ter.',
  },
]

export function HowItWorks() {
  return (
    <section id="sessao" className="bg-ivory" aria-labelledby="sessao-titulo">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="max-w-3xl">
          <p className="eyebrow flex items-center gap-4 text-bordeaux">
            <span aria-hidden="true" className="h-px w-10 bg-bronze" />
            A sessão de validação
          </p>
          <h2
            id="sessao-titulo"
            className="mt-5 font-serif text-3xl font-bold leading-tight text-balance text-espresso sm:text-4xl lg:text-[2.75rem]"
          >
            Noventa minutos para saber se a ideia se sustenta.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">
            Uma conversa individual em duas partes: primeiro o modelo de
            negócio, depois você como fundador. Uma ideia boa no papel ainda
            precisa caber na sua vida.
          </p>
        </div>

        <div className="mt-14">
          <h3 className="font-serif text-2xl font-bold text-espresso">
            <span className="mr-3 text-bordeaux">01</span>O modelo de negócio
          </h3>
          <p className="mt-3 max-w-2xl text-ink-soft">
            Os nove blocos do Business Model Canvas, analisados um a um e
            testados em conjunto: a proposta de valor precisa fazer sentido
            para o cliente, e a receita precisa cobrir os custos.
          </p>

          <ul className="mt-8 grid grid-cols-2 gap-px border border-bronze/60 bg-bronze/60 lg:grid-cols-10 lg:grid-rows-[repeat(2,minmax(6.5rem,auto))_minmax(4.5rem,auto)]">
            {canvasCells.map((cell) => (
              <li
                key={cell.name}
                className={`flex items-end bg-ivory p-4 font-medium leading-snug text-espresso ${cell.placement}`}
              >
                {cell.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <h3 className="font-serif text-2xl font-bold text-espresso">
              <span className="mr-3 text-bordeaux">02</span>Você como fundador
            </h3>
            <p className="mt-3 text-ink-soft">
              Cinco dimensões que mostram se a ideia cabe na sua realidade.
            </p>
          </div>
          <ul className="border-t border-bronze/60 lg:col-span-8">
            {founderDimensions.map((item) => (
              <li
                key={item.title}
                className="grid gap-1 border-b border-bronze/40 py-4 sm:grid-cols-[13rem_1fr] sm:gap-6"
              >
                <p className="font-semibold text-espresso">{item.title}</p>
                <p className="text-sm leading-relaxed text-ink-soft">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
