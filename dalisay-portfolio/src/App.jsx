import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <header>
    <p className="file-id">FILE // PORTFOLIO-2026</p>
    <h1>Mary Dalisay</h1>
    <p className="role">BS Computer Science student. </p>
   </header>

  <nav>
    <ul>
      <li><a href="#about">About</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>

  <main>

    <section id="about">
      <p className="section-label">01 &mdash; ABOUT</p>
      <h2>About Me</h2>
      <p>
        I'm a Computer Science student focused on practical, real-world builds. 
        I enjoy learning new technologies and applying them to projects that solve problems or improve processes. 
        My interests include Linux ricing, web development, and machine learning.
      </p>
    </section>

    <section id="projects">
      <p className="section-label">02 &mdash; PROJECTS</p>
      <h2>Projects</h2>

      <article>
        <div className="article-head">
          <h3>SenyaSabi</h3>
          <span className="status">IN DEVELOPMENT</span>
        </div>

        <div className="specs">
          <div className="spec"><span className="spec-key">STACK</span>PySide6, MediaPipe</div>
          <div className="spec"><span className="spec-key">TYPE</span>Thesis / desktop app</div>
        </div>
        <p className="desc">
          A Filipino Sign Language (FSL) learning application using MediaPipe
          for landmark extraction and a CNN-based classifier for real-time
          sign recognition.
        </p>
      </article>

      <article>
        <div className="article-head">
          <h3>Starlink Data Scraper</h3>
          <span className="status">COMPLETE</span>
        </div>

        <div className="specs">
          <div className="spec"><span className="spec-key">STACK</span>Selenium, pandas</div>
          <div className="spec"><span className="spec-key">TYPE</span>Automation script</div>
        </div>
        <p className="desc">
          A scraper that attaches to a live Chrome session to collect and
          export structured data to CSV.
        </p>
      </article>

      <article>
        <div className="article-head">
          <h3>Self Hosted Home Media Server</h3>
          <span className="status">In Development</span>
        </div>
        <div className="specs">
          <div className="spec"><span className="spec-key">STACK</span>Python, Flask</div>
          <div className="spec"><span className="spec-key">TYPE</span>Web application</div>
        </div>
        <p className="desc">
          A self-hosted home media server built with Python and Flask.
        </p>
      </article>

    </section>

  </main>

  <footer>
    <div>
      <h2>Contact</h2>
      <p id="contact">Email: <a href="mailto:dalisaymary18@gmail.com">dalisaymary18@gmail.com</a></p>
    </div>
    <div>
      <p>&copy; 2026 Mary Dalisay</p>
    </div>
  </footer>
    </>
  )
}

export default App
