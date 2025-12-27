import { setRequestLocale } from 'next-intl/server'
import { Header, Hero, About, Services, Coffee, Contact, Footer } from '@/components'

type Props = {
  params: Promise<{ locale: string }>
}

export default async function Home({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Coffee />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
