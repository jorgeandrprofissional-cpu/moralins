import { Plus } from 'lucide-react'

const questions = [
  {
    q: 'A sessão serve para quem ainda não abriu a empresa?',
    a: 'Sim. Você pode avaliar sua ideia antes de formalizar a empresa ou investir recursos significativos.',
  },
  {
    q: 'Minha agência já está funcionando. A sessão também serve para mim?',
    a: 'Depende do seu objetivo. Conte sua situação pelo formulário ou WhatsApp para avaliarmos se essa sessão é o melhor ponto de partida.',
  },
  {
    q: 'A sessão garante que minha ideia vai dar certo?',
    a: 'Não. A análise identifica riscos e hipóteses que precisam ser testadas, mas não substitui a validação com clientes reais nem garante resultados financeiros.',
  },
  {
    q: 'Preciso contratar uma consultoria depois?',
    a: 'Não. A sessão tem seus próprios objetivos e entregáveis. Qualquer trabalho posterior pode ser discutido separadamente.',

  },
  {
    q: 'Como faço para começar?',
    a: 'Preencha o formulário ou entre em contato pelo WhatsApp. Vamos entender seu momento e combinar os próximos passos.',
  },
]

export function Faq() {
  return (
    <section id="faq" className="bg-cream" aria-labelledby="faq-titulo">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-4">
          <p className="eyebrow flex items-center gap-4 text-bordeaux">
            <span aria-hidden="true" className="h-px w-10 bg-bronze" />
            FAQ
          </p>
          <h2
            id="faq-titulo"
            className="mt-5 font-serif text-3xl font-bold leading-tight text-balance text-espresso sm:text-4xl"
          >
            Perguntas frequentes
          </h2>
        </div>

        <div className="lg:col-span-8">
          {questions.map((item) => (
            <details
              key={item.q}
              className="group border-b border-bronze/60 first:border-t"
            >
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-6 py-5 text-lg font-semibold text-espresso marker:content-none [&::-webkit-details-marker]:hidden">
                {item.q}
                <Plus
                  aria-hidden="true"
                  className="size-5 shrink-0 text-bordeaux transition-transform duration-200 group-open:rotate-45"
                />
              </summary>
              <p className="max-w-2xl pb-6 leading-relaxed text-ink-soft">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
