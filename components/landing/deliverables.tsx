import {
  BarChart3,
  CalendarCheck,
  LayoutGrid,
  MessageCircle,
  Scale,
  UserCheck,
} from 'lucide-react'

const items = [
  {
    icon: LayoutGrid,
    title: 'Seu modelo de negócio',
    text: 'BMC completo, com os 9 blocos preenchidos.',
  },
  {
    icon: BarChart3,
    title: 'Nota por bloco',
    text: 'De 0 a 10, mostrando onde sua ideia está forte e onde está frágil.',
  },
  {
    icon: UserCheck,
    title: 'Adequação fundador-negócio',
    text: 'Pontuação de 0 a 10 sobre o encaixe entre você e o negócio.',
  },
  {
    icon: Scale,
    title: 'Veredito claro',
    text: 'Vale a pena, vale com ajustes ou não vale como está. Se não valer, pensamos juntos em um caminho mais viável.',
  },
  {
    icon: CalendarCheck,
    title: 'Plano de 30 dias',
    text: 'Testes reais: conversar com clientes potenciais, tentar uma pré-venda e rodar um piloto pequeno.',
  },
  {
    icon: MessageCircle,
    title: 'Follow-up',
    text: 'Acompanhamento pelo WhatsApp para saber como foi a execução.',
  },
]

export function Deliverables() {
  return (
    <section className="bg-espresso text-ivory" aria-labelledby="entregas-titulo">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="max-w-3xl">
          <p className="eyebrow flex items-center gap-4 text-bronze">
            <span aria-hidden="true" className="h-px w-10 bg-bronze" />
            O que você recebe
          </p>
          <h2
            id="entregas-titulo"
            className="mt-5 font-serif text-3xl font-bold leading-tight text-balance sm:text-4xl lg:text-[2.75rem]"
          >
            Tudo em um único PDF, claro e pronto para usar.
          </h2>
        </div>

        <ul className="mt-14 grid gap-px overflow-hidden border border-bronze/40 bg-bronze/40 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <li key={item.title} className="bg-espresso p-8">
              <item.icon aria-hidden="true" className="size-6 text-bronze" strokeWidth={1.5} />
              <h3 className="mt-6 font-serif text-xl font-bold">{item.title}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-cream/80">
                {item.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
