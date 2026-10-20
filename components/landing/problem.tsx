export function Problem() {
  return (
    <section className="bg-cream" aria-labelledby="problema-titulo">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:py-28">
        <div className="lg:col-span-4">
          <p className="eyebrow flex items-center gap-4 text-bordeaux">
            <span aria-hidden="true" className="h-px w-10 bg-bronze" />
            O problema
          </p>
        </div>
        <div className="lg:col-span-8">
          <h2
            id="problema-titulo"
            className="font-serif text-3xl font-bold leading-tight text-balance text-espresso sm:text-4xl lg:text-[2.75rem]"
          >
            Você tem uma ideia, mas ainda não sabe se ela se sustenta.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
            O caminho comum é começar mesmo assim, gastar tempo e dinheiro, e
            só depois descobrir o que estava errado.
          </p>
          <p className="mt-6 border-l-2 border-bronze pl-5 font-serif text-xl font-bold leading-snug text-espresso">
            Esta sessão existe para você descobrir isso antes.
          </p>
        </div>
      </div>
    </section>
  )
}
