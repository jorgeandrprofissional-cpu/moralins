export function SiteFooter() {
  return (
    <footer className="bg-espresso text-cream">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 border-t border-bronze/40 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
        <p className="font-label text-[0.8rem] font-semibold uppercase tracking-[0.24em] text-ivory">
          João Moralins <span className="text-bronze">|</span> Consultor de Negócios
        </p>
        <p className="text-sm text-cream/70">
          Consultoria de Validação de Ideia de Negócio
        </p>
      </div>
    </footer>
  )
}
