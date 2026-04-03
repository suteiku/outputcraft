import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Differenciateurs from '../components/Differenciateurs'
import Offres from '../components/Offres'
import PourQui from '../components/PourQui'
import Process from '../components/Process'
import About from '../components/About'
import Garanties from '../components/Garanties'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import RevealProvider from '../components/RevealProvider'

export default function Home() {
  return (
    <RevealProvider>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Differenciateurs />
        <Offres />
        <PourQui />
        <Process />
        <About />
        <Garanties />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </RevealProvider>
  )
}
