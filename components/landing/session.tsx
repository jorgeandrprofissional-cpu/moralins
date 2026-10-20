import {
  CalendarCheck,
  FileText,
  Gauge,
  MessageCircle,
  Route,
  Scale,
  type LucideIcon,
} from 'lucide-react'
import { CtaLink } from './cta-link'

const analysis = [
  {
    title: 'Modelo de negócio',
    text: 'Clientes, proposta de valor, canais, receitas, custos e os demais elementos necessários para entender como o negócio funciona.',
  },
  {
    title: 'Adequação ao seu momento',
    text: 'Tempo disponível, recursos financeiros, competências, rede de contatos e estilo de vida.',
  },
]

const deliverables: { icon: LucideIcon; text: string }[] = [
  {
    icon: FileText,
    text: 'Um Documento Estratégico com seu modelo de negócio estruturado.',
  },
  {
    icon: Gauge,
    text: 'Avaliações de 0 a 10 para cada bloco, acompanhadas dos pontos relevantes.',
  },
  {
    icon: Scale,
    text: 'Uma análise da adequação entre você e o negócio.',
  },
  {
    icon: Route,
    text: 'Uma recomendação fundamentada sobre os caminhos possíveis.',
  },
  {
    icon: CalendarCheck,
    text: 'Um plano de ação para os próximos 30 dias, com testes e prioridades.',
  },
  {
    icon: MessageCircle,
    text: 'Acompanhamento pelo WhatsApp, conforme as condições combinadas.',
  },
]

export function Session() {
  return (
    <section
      id="sessao"
      className="bg-espresso text-ivory"
      aria-labelledby="sessao-titulo"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-24">
        <div className="max-w-3xl">
          <p className="eyebrow flex items-center gap-4 text-bronze">
            <span aria-hidden="true" className="h-px w-10 bg-bronze" />
            A sessão de validação
          </p>
          <h2
            id="sessao-titulo"
            className="mt-5 font-serif text-3xl font-bold leading-tight text-balance sm:text-4xl lg:text-[2.75rem]"
          >
            Noventa minutos para analisar sua ideia e definir os próximos
            passos.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-cream/85">
            Em uma conversa individual, analisamos seu modelo de negócio e sua
            realidade como fundador. O objetivo é identificar inconsistências,
            avaliar riscos e entender o que precisa ser comprovado antes de
            avançar.
          </p>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <h3 className="eyebrow text-bronze">O que analisamos</h3>
            <ul className="mt-6 space-y-8">
              {analysis.map((item) => (
                <li key={item.title} className="border-l-2 border-bronze pl-5">
                  <p className="font-serif text-xl font-bold">{item.title}</p>
                  <p className="mt-2 leading-relaxed text-cream/80">
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-8">
            <h3 className="eyebrow text-bronze">O que você recebe</h3>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {deliverables.map((item) => (
                <li
                  key={item.text}
                  className="flex items-start gap-4 border border-bronze/40 bg-ivory/[0.04] p-5"
                >
                  <item.icon
                    aria-hidden="true"
                    className="mt-0.5 size-6 shrink-0 text-bronze"
                    strokeWidth={1.5}
                  />
                  <span className="leading-relaxed text-cream">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-8 border-t border-bronze/40 pt-10 lg:flex-row lg:items-center lg:justify-between lg:gap-14">
          <p className="max-w-2xl leading-relaxed text-cream/85">
            A análise pode indicar que vale a pena seguir, que são necessários
            ajustes ou que a ideia precisa ser reconsiderada nas condições
            atuais. Não é uma garantia de sucesso, mas uma avaliação
            estruturada para ajudar você a decidir com mais critério.
          </p>
          <CtaLink href="#contato" variant="light" className="shrink-0">
            Quero analisar meu negócio
          </CtaLink>
        </div>
      </div>
    </section>
  )
}
