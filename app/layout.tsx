import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Montserrat, Playfair_Display } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['600'],
  variable: '--font-montserrat',
  display: 'swap',
})

const title = 'João Moralins | Consultor de novos negócios para agências'
const description =
  'Consultoria para quem quer abrir uma agência e para quem já tem uma. Comece por uma sessão individual de 90 minutos que termina com modelo de negócio, nota por bloco, veredito e plano de 30 dias.'

export const metadata: Metadata = {
  title,
  description,
  applicationName: 'João Moralins | Consultor de Novos Negócios',
  authors: [{ name: 'João Moralins' }],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    title,
    description,
    siteName: 'João Moralins | Consultor de Novos Negócios',
    images: [
      {
        url: '/images/joao-moralins-retrato.jpg',
        width: 854,
        height: 1280,
        alt: 'João Moralins, consultor de negócios',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/images/joao-moralins-retrato.jpg'],
  },
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#FAF6EF',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${playfair.variable} ${inter.variable} ${montserrat.variable}`}
    >
      <body>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
