import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Certifications from './components/certifications/Certifications'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
const App = () => {
  return (
    <>
    <Header />
    <Nav />
    <About />
    <Experience />
    <Certifications />
    <Portfolio />
    <Contact />
    <Footer />
    </>
  )
}

export default App