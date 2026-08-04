import { useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import WorksModal from '../components/WorksModal.jsx'
import AboutModal from '../components/AboutModal.jsx'
import TechModal from '../components/TechModal.jsx'
import ContactModal from '../components/ContactModal.jsx'
import './App.css'

export default function App() {
  const [activeModal, setActiveModal] = useState(null) // 'works' | 'about' | 'tech' | 'contact' | null

  const openModal = (name) => setActiveModal(name)
  const closeModal = () => setActiveModal(null)

  return (
    <div className="app">
      <Navbar onNavigate={openModal} />
      <Hero onNavigate={openModal} />

      <WorksModal isOpen={activeModal === 'works'} onClose={closeModal} />
      <AboutModal isOpen={activeModal === 'about'} onClose={closeModal} />
      <TechModal isOpen={activeModal === 'tech'} onClose={closeModal} />
      <ContactModal isOpen={activeModal === 'contact'} onClose={closeModal} />
    </div>
  )
}
