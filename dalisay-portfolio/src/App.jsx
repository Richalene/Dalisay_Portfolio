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
        backgroundImage: "url('https://media.discordapp.net/attachments/1101141739596697601/1542397189802954853/bgurple.png?ex=6a9114d2&is=6a8fc352&hm=ab530e3c88f05bea672abf40ccfa4fb4d2f44cdfe0212f62839d75dbbc6def2d&=&format=webp&quality=lossless&width=512&height=1024')",
        backgroundSize: '50%',
      }}
    >
      <img src="https://media.discordapp.net/attachments/1101141739596697601/1542376070907433051/sidebarright.png?ex=6a910127&is=6a8fafa7&hm=168489a757ee5a6d4cd3ae8fe3b82127c3a84a11fd468bee7e5ee510e8d8ea14&=&format=webp&quality=lossless&width=230&height=1024" alt="" className="fixed top-0 left-0 h-screen z-50" />
      <img src="https://media.discordapp.net/attachments/1101141739596697601/1542376017761669211/sidebarright1.png?ex=6a91011a&is=6a8faf9a&hm=c6101b02cfe482b6a7c78529d3a0616465ad261cb7ae15c32b9954c9f129f77f&=&format=webp&quality=lossless&width=230&height=1024" alt="" className="fixed top-0 right-0 h-screen z-50" />

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