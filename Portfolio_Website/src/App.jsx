import { useContext } from 'react'
import {Route, Routes, Navigate } from 'react-router';
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Experience from './components/Experience/experience'
import './App.css'

const App = () => {
  const { themeName } = useContext(ThemeContext)
  return (
    <div id='top' className={`${themeName} app`}>
        <Routes>
          <Route path="/resume" element={<Navigate to="/resume.pdf" />} />
        </Routes>
      <Header />
      <main>
        <About />
        <Experience/>
        <Projects />
        <Skills />
        <Contact />
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  )
}

export default App
