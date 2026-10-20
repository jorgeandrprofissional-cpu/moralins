// Defina o número real (DDI + DDD + número) em NEXT_PUBLIC_WHATSAPP_NUMBER. O valor padrão é apenas um marcador.
const PLACEHOLDER_NUMBER = '5521975471296'

export const WHATSAPP_NUMBER = (
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || PLACEHOLDER_NUMBER
).replace(/\D/g, '')

export const DEFAULT_MESSAGE =
  'Olá João! Vi sua página e quero conversar sobre o momento do meu negócio.'

export function buildWhatsAppUrl(message: string = DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
