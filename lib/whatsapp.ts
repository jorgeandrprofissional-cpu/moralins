// Substitua pelo número real (com DDI + DDD) em NEXT_PUBLIC_WHATSAPP_NUMBER. O valor padrão é apenas um marcador.
const PLACEHOLDER_NUMBER = '5521999999999'

export const WHATSAPP_NUMBER = (
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || PLACEHOLDER_NUMBER
).replace(/\D/g, '')

export const DEFAULT_MESSAGE =
  'Olá João! Vi sua página e quero validar minha ideia de negócio.'

export function buildWhatsAppUrl(message: string = DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
