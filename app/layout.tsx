import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Montserrat, Playfair_Display } from 'next/font/google'
import Script from 'next/script'
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

const title = 'João Moralins | Consultoria de validação de ideia de negócio'
const description =
  'Sessão individual de 90 minutos para avaliar seu modelo de negócio, identificar os pontos que precisam de atenção e definir os próximos passos para os 30 dias seguintes.'

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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SP4YGPPSZ6"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SP4YGPPSZ6');
          `}
        </Script>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
