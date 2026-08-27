import Nav from './components/Nav.jsx'
import ProfileCardComponent from './components/ProfileCard.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import './index.css'

function App() {
  return (
    <main
      className="relative min-h-screen overflow-y-auto bg-scroll bg-cover bg-center"
      style={{
        backgroundImage: "url('/src/assets/bgpurple.png')",
        backgroundSize: '40%',
      }}
    >
      <img src="/src/assets/sidebarleft.png" alt="" className="fixed top-0 left-0 h-screen z-50" />
      <img src="/src/assets/sidebarright.png" alt="" className="fixed top-0 right-0 h-screen z-50" />

      <Nav />

      <section
        id="home"
        className="relative z-10 min-h-screen grid grid-cols-12 items-center px-24 pt-20"
      >
        <div className="col-span-5 flex justify-center pl-80">
          <ProfileCardComponent />
        </div>

        <div className="col-span-1 hidden md:flex justify-center">
          <div className="h-40 w-px bg-gradient-to-b from-transparent via-purple-400/40 to-transparent" />
        </div>

        <div className="col-span-4 self-center ml-8">
          <About />
        </div>
      </section>

      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}

export default App