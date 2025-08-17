import React from 'react'
import Hero from './sections/Hero'
import AppShowcase from './sections/ShowcaseSection'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <main>
      <div>
        <NavBar />
        <Hero />
        <AppShowcase />
      </div>
    </main>
  )
}

export default App