import './Navbar.css'

export default function Navbar({ onNavigate }) {
  return (
    <header className="navbar">
      <div className="navbar__mark">
        <span className="navbar__index"></span> M. DAL
      </div>
      <nav className="navbar__links" aria-label="Primary">
        <button onClick={() => onNavigate('works')}>Works</button>
        <span className="navbar__divider" aria-hidden="true">/</span>
        <button onClick={() => onNavigate('about')}>About</button>
        <span className="navbar__divider" aria-hidden="true">/</span>
        <button onClick={() => onNavigate('tech')}>Extra</button>
        <span className="navbar__divider" aria-hidden="true">/</span>
        <button onClick={() => onNavigate('contact')}>Contact</button>
      </nav>
    </header>
  )
}
