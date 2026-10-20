import { About } from '@/components/landing/about'
import { Booking } from '@/components/landing/booking'
import { Deliverables } from '@/components/landing/deliverables'
import { Faq } from '@/components/landing/faq'
import { Hero } from '@/components/landing/hero'
import { HonestPromise } from '@/components/landing/promise'
import { HowItWorks } from '@/components/landing/how-it-works'
import { Journey } from '@/components/landing/journey'
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
        <Journey />
        <HowItWorks />
        <Deliverables />
        <About />
        <HonestPromise />
        <Faq />
        <Booking />
      </main>
      <SiteFooter />
    </>
  )
}
