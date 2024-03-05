export const metadata = {
  title: 'Creative66 - CS Maps, Plugins & Configs',
  description: 'Creative66 - Place where awesome Counter-Strike projects are made.',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import ContactForm from '@/components/contact'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Features /> */}
      <Zigzag />
      <Testimonials />
      <ContactForm />
    </>
  )
}
