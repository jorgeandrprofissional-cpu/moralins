'use client'

import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { buildWhatsAppUrl } from '@/lib/whatsapp'

type Errors = Partial<Record<'nome' | 'whatsapp' | 'ideia' | 'email', string>>

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, '').slice(0, 11)
  if (digits.length <= 2) return digits
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  if (digits.length <= 10)
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
}

const inputClass =
  'mt-2 w-full rounded-sm border border-espresso/30 bg-ivory px-4 py-3.5 text-base text-espresso placeholder:text-ink-soft/60 transition-colors focus:border-bronze focus:outline-none focus:ring-2 focus:ring-bronze/40 aria-[invalid=true]:border-bordeaux'

export function LeadForm() {
  const [errors, setErrors] = useState<Errors>({})
  const [phone, setPhone] = useState('')
  const [whatsappUrl, setWhatsappUrl] = useState<string | null>(null)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const nome = String(data.get('nome') ?? '').trim()
    const whatsapp = String(data.get('whatsapp') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const ideia = String(data.get('ideia') ?? '').trim()

    const nextErrors: Errors = {}
    if (nome.length < 2) nextErrors.nome = 'Informe como prefere ser chamado.'
    if (whatsapp.replace(/\D/g, '').length < 10)
      nextErrors.whatsapp = 'Informe um WhatsApp com DDD.'
    if (email && !/^\S+@\S+\.\S+$/.test(email))
      nextErrors.email = 'Esse e-mail parece incompleto.'
    if (ideia.length < 10)
      nextErrors.ideia = 'Descreva sua ideia em pelo menos uma frase.'

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    const lines = [
      'Olá João! Quero garantir minha vaga na sessão de validação de ideia.',
      '',
      `Nome: ${nome}`,
      `WhatsApp: ${whatsapp}`,
      email ? `E-mail: ${email}` : null,
      `Minha ideia: ${ideia}`,
    ].filter((line): line is string => line !== null)

    const url = buildWhatsAppUrl(lines.join('\n'))
    setWhatsappUrl(url)
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  if (whatsappUrl) {
    return (
      <div role="status" className="text-center">
        <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-espresso text-bronze">
          <Check aria-hidden="true" className="size-6" />
        </span>
        <h3 className="mt-5 font-serif text-2xl font-bold text-espresso">
          Sua mensagem está pronta no WhatsApp
        </h3>
        <p className="mt-3 text-ink-soft">
          Abrimos o WhatsApp com os seus dados preenchidos. Basta enviar a
          mensagem para o João combinar o melhor horário com você.
        </p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex min-h-12 items-center justify-center gap-3 rounded-sm bg-bordeaux px-7 py-3.5 text-[0.95rem] font-semibold text-ivory transition-colors hover:bg-espresso"
        >
          O WhatsApp não abriu? Clique aqui
        </a>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <label htmlFor="nome" className="text-sm font-semibold text-espresso">
          Seu nome
        </label>
        <input
          id="nome"
          name="nome"
          type="text"
          autoComplete="name"
          required
          placeholder="Como prefere ser chamado"
          aria-invalid={Boolean(errors.nome)}
          aria-describedby={errors.nome ? 'nome-erro' : undefined}
          className={inputClass}
        />
        {errors.nome && (
          <p id="nome-erro" className="mt-1.5 text-sm text-bordeaux">
            {errors.nome}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="whatsapp" className="text-sm font-semibold text-espresso">
          WhatsApp
        </label>
        <input
          id="whatsapp"
          name="whatsapp"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          required
          value={phone}
          onChange={(event) => setPhone(formatPhone(event.target.value))}
          placeholder="(21) 99999-9999"
          aria-invalid={Boolean(errors.whatsapp)}
          aria-describedby={errors.whatsapp ? 'whatsapp-erro' : 'whatsapp-dica'}
          className={inputClass}
        />
        {errors.whatsapp ? (
          <p id="whatsapp-erro" className="mt-1.5 text-sm text-bordeaux">
            {errors.whatsapp}
          </p>
        ) : (
          <p id="whatsapp-dica" className="mt-1.5 text-xs text-ink-soft">
            Usaremos este número para combinar o horário.
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-semibold text-espresso">
          E-mail <span className="font-normal text-ink-soft">(opcional)</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="seu@email.com"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? 'email-erro' : undefined}
          className={inputClass}
        />
        {errors.email && (
          <p id="email-erro" className="mt-1.5 text-sm text-bordeaux">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="ideia" className="text-sm font-semibold text-espresso">
          Qual é a sua ideia de negócio?
        </label>
        <textarea
          id="ideia"
          name="ideia"
          required
          rows={4}
          placeholder="Descreva em poucas linhas o que você quer validar..."
          aria-invalid={Boolean(errors.ideia)}
          aria-describedby={errors.ideia ? 'ideia-erro' : undefined}
          className={`${inputClass} resize-y`}
        />
        {errors.ideia && (
          <p id="ideia-erro" className="mt-1.5 text-sm text-bordeaux">
            {errors.ideia}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="group inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-sm bg-bordeaux px-7 py-3.5 text-base font-semibold text-ivory transition-colors hover:bg-espresso"
      >
        Quero garantir minha vaga
        <ArrowRight
          aria-hidden="true"
          className="size-4 transition-transform group-hover:translate-x-1"
        />
      </button>

      <p className="text-xs leading-relaxed text-ink-soft">
        Seus dados não são armazenados neste site. Ao enviar, o WhatsApp abre
        com uma mensagem já preenchida para o João, e só é enviada se você
        confirmar.
      </p>
    </form>
  )
}
