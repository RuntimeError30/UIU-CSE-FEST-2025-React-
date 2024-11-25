import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Navbar from './components/Navbar'
import Events from './components/Events'
import Organizers from './components/Organizers'



const App = () => {
  return (
    <main className='relative  min-h-screen w-screen overflow-x-hidden'>
      <Navbar />
      <Hero />
      <About />
      <Events />
      <Organizers />

    </main>
  )
}

export default App