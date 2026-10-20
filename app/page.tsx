import { About } from '@/components/landing/about'
import { Against } from '@/components/landing/against'
import { Booking } from '@/components/landing/booking'
import { Deliverables } from '@/components/landing/deliverables'
import { Faq } from '@/components/landing/faq'
import { Hero } from '@/components/landing/hero'
import { HonestPromise } from '@/components/landing/promise'
import { HowItWorks } from '@/components/landing/how-it-works'
import { Problem } from '@/components/landing/problem'
import { SiteFooter } from '@/components/landing/site-footer'
import { SiteHeader } from '@/components/landing/site-header'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Deliverables />
        <Against />
        <About />
        <HonestPromise />
        <Faq />
        <Booking />
      </main>
      <SiteFooter />
    </>
  )
}
