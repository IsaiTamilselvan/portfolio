import React from 'react'
import Navbar   from './components/Navbar'
import Hero     from './components/Hero'
import About    from './components/About'
import Skills   from './components/Skills'
import Projects from './components/Projects'
import Journey  from './components/Journey'
import Platforms from './components/Platforms'
import Contact  from './components/Contact'
import Footer   from './components/Footer'

// App is the "master" component
// It just stacks all the sections in order

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Journey />
      <Platforms />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
