const links = [
  {
    label: 'GitHub',
    value: 'github.com/richalene',
    href: 'https://github.com/richalene',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.69 1.25 3.34.96.1-.75.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.4-5.27 5.69.42.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.2.66.79.55A10.52 10.52 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'Mary Richalene Dalisay',
    href: 'https://www.linkedin.com/in/mary-richalene-dalisay-35b1a5244/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    value: 'dalisaymary18@gmail.com',
    href: 'mailto:dalisaymary18@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    ),
  },
]

function Contact() {
  return (
    <section
      id="contact"
      className="relative z-10 min-h-screen flex items-center justify-center px-8 py-32"
    >
      <div className="w-full max-w-5xl mx-auto flex items-center justify-between gap-12 flex-wrap">
        {/* Left: Contact info */}
        <div className="flex flex-col items-start text-left max-w-md w-full">
          <div className="flex items-baseline gap-4 mb-4">
            <span className="text-sm font-mono text-purple-400/60">04</span>
            <span className="h-px w-16 bg-gradient-to-r from-purple-400/50 to-transparent" />
            <span className="text-xs font-semibold tracking-[0.2em] text-purple-300/70 uppercase">
              Contact
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-wide mb-3">
            LET'S CONNECT!
          </h2>

          <p className="text-purple-300/70 text-sm mb-10 tracking-wide">
            I'd love to work with you!
          </p>

          <div className="flex flex-col gap-3 w-full">
            {links.map(({ label, value, href, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="
                  group flex items-center gap-4
                  px-5 py-3.5
                  border border-purple-400/25
                  bg-[#0d0715]/60 backdrop-blur-sm
                  transition-all duration-200
                  hover:border-cyan-400/60 hover:bg-[#150a24]
                "
                style={{
                  clipPath:
                    'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)',
                }}
              >
                <div className="w-9 h-9 flex items-center justify-center border border-purple-400/30 bg-purple-400/10 flex-shrink-0 text-purple-300 group-hover:border-cyan-400/50 group-hover:text-cyan-300 transition-colors">
                  {icon}
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[10px] font-mono tracking-widest text-purple-400/60 uppercase">
                    {label}
                  </span>
                  <span className="text-sm text-white/85 truncate">{value}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Right: Character + speech bubble */}


          <div className="text-8xl">
            <img src="https://api.fstik.app/file/CAACAgIAAxUAAWqLuGt8b8g8Nz8J2J-t_2lL-bYyAAKUfAAC9euBSEe28TMjqJtIPQQ/sticker.webp" alt="Character" />
          </div>
        </div>
    </section>
  )
}

export default Contact