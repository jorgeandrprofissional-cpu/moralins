import { About } from '@/components/landing/about'
import { Booking } from '@/components/landing/booking'
import { Faq } from '@/components/landing/faq'
import { Hero } from '@/components/landing/hero'
import { Session } from '@/components/landing/session'
import { SiteFooter } from '@/components/landing/site-footer'
import { SiteHeader } from '@/components/landing/site-header'
import { Stages } from '@/components/landing/stages'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Stages />
        <Session />
        <About />
        <Faq />
        <Booking />
      </main>
      <SiteFooter />
    </>
  )
}
