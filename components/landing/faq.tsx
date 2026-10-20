import { Plus } from 'lucide-react'

const questions = [
  {
    q: 'Para quem é esta sessão?',
    a: 'Para quem tem uma ideia de negócio ainda no papel e quer saber se ela se sustenta antes de investir tempo e dinheiro.',
  },
  {
    q: 'Como é a sessão?',
    a: 'É uma conversa individual de 90 minutos. Passamos pelos 9 blocos do Business Model Canvas, testamos se eles se conectam e avaliamos o seu encaixe como fundador: tempo, dinheiro, habilidades, rede e estilo de vida.',
  },
  {
    q: 'O que eu recebo no final?',
    a: 'Um único PDF com o seu modelo de negócio, a nota de 0 a 10 por bloco, a pontuação de adequação fundador-negócio, o veredito e o plano de 30 dias. Depois, há um follow-up pelo WhatsApp.',
  },
  {
    q: 'Você garante que meu negócio vai dar certo?',
    a: 'Não. Eu garanto clareza sobre se a ideia tem chance e sobre o que fazer a seguir. Se ela não valer como está, pensamos juntos em um caminho mais viável.',
  },
  {
    q: 'Como reservo minha vaga?',
    a: 'Me chame no WhatsApp ou preencha o formulário desta página. Combinamos o melhor horário e você faz a sessão.',
  },
]

export function Faq() {
  return (
    <section className="bg-ivory" aria-labelledby="faq-titulo">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:py-28">
        <div className="lg:col-span-4">
          <p className="eyebrow flex items-center gap-4 text-bordeaux">
            <span aria-hidden="true" className="h-px w-10 bg-bronze" />
            Perguntas frequentes
          </p>
          <h2
            id="faq-titulo"
            className="mt-5 font-serif text-3xl font-bold leading-tight text-balance text-espresso sm:text-4xl"
          >
            Antes de decidir
          </h2>
        </div>

        <div className="lg:col-span-8">
          {questions.map((item) => (
            <details
              key={item.q}
              className="group border-b border-bronze/50 first:border-t"
            >
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-6 py-5 text-lg font-semibold text-espresso marker:content-none [&::-webkit-details-marker]:hidden">
                {item.q}
                <Plus
                  aria-hidden="true"
                  className="size-5 shrink-0 text-bordeaux transition-transform duration-200 group-open:rotate-45"
                />
              </summary>
              <p className="max-w-2xl pb-6 leading-relaxed text-ink-soft">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
