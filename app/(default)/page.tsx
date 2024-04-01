export const metadata = {
  title: 'counter-strike custom maps, plugins & configs - creative66',
  description: 'place where awesome Counter-Strike projects are made - creative66',
}

import Hero from '@/components/hero'
import ContactForm from '@/components/contact'
import Zigzag from '@/components/zigzag'
import Showcases from '@/components/showcases'

export default function Home() {
  return (
    <>
      <Hero />
      <Zigzag />
      <Showcases />
      <ContactForm />
    </>
  )
}
