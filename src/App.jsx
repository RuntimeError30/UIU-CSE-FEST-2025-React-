import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Navbar from './components/Navbar'
import Events from './components/Events'
import Organizers from './components/Organizers'
import Announcements from './components/Announcements'
import { Footer } from './components/Footer'


const App = () => {
  return (
    <main className='relative  min-h-screen w-screen overflow-x-hidden'>
      <Navbar />
      <Hero />
      <About />
      <Events />
      <Announcements />
      <Organizers />
      <Footer />

    </main>
  )
}

export default App