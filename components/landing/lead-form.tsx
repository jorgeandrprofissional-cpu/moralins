'use client'

import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { buildWhatsAppUrl } from '@/lib/whatsapp'

type Errors = Partial<Record<'nome' | 'whatsapp' | 'ideia', string>>

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
    const momento = String(data.get('momento') ?? '').trim()
    const ideia = String(data.get('ideia') ?? '').trim()

    const nextErrors: Errors = {}
    if (nome.length < 2) nextErrors.nome = 'Informe como prefere ser chamado.'
    if (whatsapp.replace(/\D/g, '').length < 10)
      nextErrors.whatsapp = 'Informe um WhatsApp com DDD.'
    if (ideia.length < 10)
      nextErrors.ideia = 'Descreva em pelo menos uma frase o que você quer decidir.'

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    const lines = [
      'Olá João! Quero avaliar se a sessão de validação faz sentido para o meu negócio.',
      '',
      `Nome: ${nome}`,
      `WhatsApp: ${whatsapp}`,
      momento ? `Momento do negócio: ${momento}` : null,
      `O que quero avaliar ou decidir: ${ideia}`,
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
          mensagem para o João combinar os próximos passos com você.
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
          Seu WhatsApp
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
          aria-describedby={errors.whatsapp ? 'whatsapp-erro' : undefined}
          className={inputClass}
        />
        {errors.whatsapp && (
          <p id="whatsapp-erro" className="mt-1.5 text-sm text-bordeaux">
            {errors.whatsapp}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="momento" className="text-sm font-semibold text-espresso">
          Em que momento está seu negócio?{' '}
          <span className="font-normal text-ink-soft">(opcional)</span>
        </label>
        <select
          id="momento"
          name="momento"
          defaultValue=""
          className={inputClass}
        >
          <option value="">Prefiro explicar na mensagem</option>
          <option value="Estou validando uma ideia">
            Estou validando uma ideia
          </option>
          <option value="Estou estruturando minha agência">
            Estou estruturando minha agência
          </option>
          <option value="Quero crescer com mais critério">
            Quero crescer com mais critério
          </option>
        </select>
      </div>

      <div>
        <label htmlFor="ideia" className="text-sm font-semibold text-espresso">
          O que você quer avaliar ou decidir neste momento?
        </label>
        <textarea
          id="ideia"
          name="ideia"
          required
          rows={4}
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
        Enviar mensagem para o João pelo WhatsApp
        <ArrowRight
          aria-hidden="true"
          className="size-4 transition-transform group-hover:translate-x-1"
        />
      </button>

      <p className="text-xs leading-relaxed text-ink-soft">
        Seus dados não são armazenados neste site. Ao enviar, o WhatsApp abre
        com uma mensagem já preenchida, e ela só é enviada se você confirmar.
      </p>
    </form>
  )
}
