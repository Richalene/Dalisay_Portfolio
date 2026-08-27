import { useState } from 'react'

function Nav() {
  const [active, setActive] = useState('HOME')

  const items = [
    { label: 'ABOUT', href: '#about' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'SKILLS', href: '#skills' },
    { label: 'CONTACT', href: '#contact' },
  ]

  return (
    <nav
      className="
        fixed top-6 left-1/2 -translate-x-1/2
        z-[100]
        flex items-center gap-1
        px-1 py-1
        border border-purple-400/20
        bg-[#0d0715]/70
        backdrop-blur-xl
      "
      style={{
        clipPath:
          'polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)',
      }}
    >
{items.map((item, i) => (
  <a
          key={item.label}
          href={item.href}
          onClick={() => setActive(item.label)}
          className={`
            group relative flex items-center gap-1.5
            px-4 py-2.5
            text-xs font-mono font-semibold tracking-widest
            transition-colors duration-200
            ${active === item.label ? 'text-white' : 'text-white/40 hover:text-white/80'}
          `}
        >
          <span className="text-purple-400/60 group-hover:text-purple-300">
            {String(i + 1).padStart(2, '0')}
          </span>
          {item.label}
          {active === item.label && (
            <span className="absolute -bottom-1 left-4 right-4 h-px bg-gradient-to-r from-purple-400 to-cyan-400" />
          )}
        </a>
      ))}
    </nav>
  )
}

export default Nav