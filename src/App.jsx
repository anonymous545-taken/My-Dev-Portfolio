import React, { useEffect, useState, useRef } from 'react'
import Navbar from './components/Navbar'
import LoadingScreen from './components/LoadingScreen'
import Home from './sections/Home'
import About from './sections/About'
import Skills from './sections/Skills'
import Certificates from './sections/Certificates'
import Contact from './sections/Contact'
import Footer from './components/Footer'

export default function App(){
  const [loading, setLoading] = useState(true)
  const [theme, setTheme] = useState('light') // light: green/black, dark: blue tones

  useEffect(() => {
    const root = document.documentElement
    if(theme === 'light'){
      root.style.setProperty('--primary', '#00ff66')
      root.style.setProperty('--bg', '#0b0b0b')
      root.style.setProperty('--text', '#e6ffe8')
    } else {
      root.style.setProperty('--primary', '#6fb3ff')
      root.style.setProperty('--bg', '#0b1226')
      root.style.setProperty('--text', '#e6f3ff')
    }
  }, [theme])

  return (
    <div className="min-h-screen" style={{background: 'var(--bg)', color: 'var(--text)'}}>
      {loading ? <LoadingScreen onFinish={() => setLoading(false)} /> : (
        <>
          <Navbar theme={theme} setTheme={setTheme} />
          <main className="max-w-6xl mx-auto px-4 py-8 space-y-28">
            <section id="home"><Home /></section>
            <section id="about"><About /></section>
            <section id="skills"><Skills /></section>
            <section id="certificates"><Certificates /></section>
            <section id="contact"><Contact /></section>
          </main>
          <Footer />
        </>
      )}
    </div>
  )
}
