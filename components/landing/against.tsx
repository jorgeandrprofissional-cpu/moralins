import { X } from 'lucide-react'

const enemies = [
  'Ficar meses pensando sozinho sem chegar a lugar nenhum',
  'Gastar dinheiro antes de testar (logo, estoque, site, equipamento)',
  'Achismo: “tenho certeza que vai dar certo” sem ter falado com nenhum cliente',
  'O “todo mundo é meu cliente”',
  'Descobrir tarde demais que não havia demanda',
]

export function Against() {
  return (
    <section className="bg-ivory" aria-labelledby="contra-titulo">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:py-28">
        <div className="lg:col-span-5">
          <p className="eyebrow flex items-center gap-4 text-bordeaux">
            <span aria-hidden="true" className="h-px w-10 bg-bronze" />
            Contra o que esta sessão trabalha
          </p>
          <h2
            id="contra-titulo"
            className="mt-5 font-serif text-3xl font-bold leading-tight text-balance text-espresso sm:text-4xl"
          >
            Menos achismo. Mais decisão com critério.
          </h2>
        </div>
        <ul className="lg:col-span-7">
          {enemies.map((enemy) => (
            <li
              key={enemy}
              className="flex items-start gap-4 border-b border-bronze/50 py-5 first:border-t"
            >
              <X
                aria-hidden="true"
                className="mt-1 size-4 shrink-0 text-bordeaux"
                strokeWidth={2.5}
              />
              <span className="text-lg leading-snug text-espresso">{enemy}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
