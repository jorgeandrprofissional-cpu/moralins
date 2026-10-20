const canvasBlocks = [
  'Segmentos de clientes',
  'Proposta de valor',
  'Canais',
  'Relacionamento com clientes',
  'Fontes de receita',
  'Recursos principais',
  'Atividades principais',
  'Parcerias principais',
  'Estrutura de custos',
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
    <section id="como-funciona" className="bg-ivory" aria-labelledby="como-funciona-titulo">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="max-w-3xl">
          <p className="eyebrow flex items-center gap-4 text-bordeaux">
            <span aria-hidden="true" className="h-px w-10 bg-bronze" />
            Como funciona
          </p>
          <h2
            id="como-funciona-titulo"
            className="mt-5 font-serif text-3xl font-bold leading-tight text-balance text-espresso sm:text-4xl lg:text-[2.75rem]"
          >
            Uma sessão individual de 90 minutos, só sua.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">
            Passamos pelos 9 blocos do seu modelo de negócio e testamos se eles
            se conectam. Depois, avaliamos você como fundador.
          </p>
        </div>

        <div className="mt-14 grid gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <h3 className="font-serif text-2xl font-bold text-espresso">
              <span className="mr-3 text-bronze">01</span>O modelo de negócio
            </h3>
            <p className="mt-3 text-ink-soft">
              Os nove blocos do Business Model Canvas, analisados um a um e em
              conjunto.
            </p>
            <ol className="mt-7 grid grid-cols-1 border-t border-bronze/60 sm:grid-cols-2">
              {canvasBlocks.map((block, index) => (
                <li
                  key={block}
                  className="flex items-baseline gap-4 border-b border-bronze/40 py-3.5 text-espresso"
                >
                  <span className="font-label text-xs font-semibold tracking-widest text-bordeaux">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[0.95rem] font-medium">{block}</span>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h3 className="font-serif text-2xl font-bold text-espresso">
              <span className="mr-3 text-bronze">02</span>Você como fundador
            </h3>
            <p className="mt-3 text-ink-soft">
              Uma boa ideia só funciona se couber na sua realidade. Avaliamos
              cinco dimensões.
            </p>
            <ul className="mt-7 border-t border-bronze/60">
              {founderDimensions.map((item) => (
                <li key={item.title} className="border-b border-bronze/40 py-4">
                  <p className="font-semibold text-espresso">{item.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
