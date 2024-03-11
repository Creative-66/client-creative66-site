export const metadata = {
  title: 'custom maps, plugins & configs - creative66',
  description: 'creative66 - place where awesome Counter-Strike projects are made.',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import ContactForm from '@/components/contact'
import Zigzag from '@/components/zigzag'
import Showcases from '@/components/showcases'

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Features /> */}
      <Zigzag />
      <Showcases />
      <ContactForm />
    </>
  )
}
