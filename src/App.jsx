import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import SelectedExplorations from './components/SelectedExplorations'
import Overview from './components/Overview'
import AboutPreview from './components/AboutPreview'
import ContactPreview from './components/ContactPreview'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Navigation />
      <main>
        <Hero />
        <SelectedExplorations />
        <Overview />
        <AboutPreview />
        <ContactPreview />
      </main>
      <Footer />
    </div>
  )
}

export default App
