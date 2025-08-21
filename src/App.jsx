import React from 'react'
import Hero from './sections/Hero'
import AppShowcase from './sections/AppShowcase'
import NavBar from './components/NavBar'
import LogoShowcase from './sections/LogoShowcase'
import FeatureCards from './sections/FeatureCards'
import Experience from './sections/Experience'
import TechStack from './sections/TechStack'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

const App = () => {
  return (
    <main>
      <div>
        <NavBar />
        <Hero />
        <AppShowcase />
        <LogoShowcase />
        <FeatureCards />
        <Experience />
        <TechStack />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}

export default App