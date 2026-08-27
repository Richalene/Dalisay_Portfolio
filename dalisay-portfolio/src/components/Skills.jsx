const skillGroups = [
  {
    category: 'Systems',
    items: [
      'Linux (Arch-based)',
      'Installing & configuring distros',
      'System customization (ricing, WMs)',
      'Package management & env tuning',
      'Shell scripting (Bash, zsh, fish)',
    ],
  },
  {
    category: 'Development',
    items: ['JavaScript / React', 'Python', 'Java', 'Data parsing & automation scripts'],
  },
  {
    category: 'Networking',
    items: ['Basic networking concepts', 'Hamachi', 'Local server setup', 'DNS & routing fundamentals'],
  },
  {
    category: 'Livestreaming & Media',
    items: ['OBS Studio', 'Camera & audio setup', 'Overlays & scene management'],
  },
  {
    category: 'Graphics & Design',
    items: ['GIMP', 'Canva', 'Figma'],
  },
]

const certifications = [
  { name: 'IC3 Digital Literacy Certification GS6 Level 1', issuer: 'Certiport, a Pearson VUE business', date: 'Issued May 29, 2024' },
  { name: 'Introduction to Cybersecurity', issuer: 'Cisco', date: 'Issued Aug 15, 2025' },
  { name: 'IT Specialist - Device Configuration and Management', issuer: 'Certiport, a Pearson VUE business', date: 'Expires Mar 14, 2031' },
  { name: 'IT Specialist - HTML and CSS', issuer: 'Certiport, a Pearson VUE business', date: 'Issued Jan 11, 2024' },
  { name: 'Linux Essentials', issuer: 'Cisco', date: 'Issued Oct 16, 2025' },
  { name: 'Operating Systems Basics', issuer: 'Cisco', date: 'Issued Aug 21, 2025' },
]

function Skills() {
  return (
    <section id="skills" className="relative z-10 px-8 py-32">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex items-baseline gap-4 mb-12 max-w-xl">
          <span className="text-sm font-mono text-purple-400/60">03</span>
          <span className="h-px flex-1 max-w-16 bg-gradient-to-r from-purple-400/50 to-transparent" />
          <span className="text-xs font-semibold tracking-[0.2em] text-purple-300/70 uppercase">
            Skills
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 tracking-tight">
          What I work with.
        </h2>

<div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12 mb-24">
  {skillGroups.map((group) => (
    <div key={group.category}>
      <h3 className="text-sm font-mono tracking-widest text-purple-300/80 uppercase mb-4 pb-2 border-b border-purple-400/20">
        {group.category}
      </h3>
      <div className="grid grid-cols-1 gap-2">
        {group.items.map((item) => (
<div
  key={item}
  className="
    text-xs font-mono
    px-3 py-2.5
    border border-purple-400/25
    bg-[#0d0715]/70
    text-white/80
    transition-all duration-200
    hover:border-cyan-400/60 hover:bg-[#150a24]
    hover:text-white
    hover:shadow-[0_0_15px_rgba(150,100,255,0.3)]
  "
  style={{
    clipPath:
      'polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)',
  }}
>
  {item}
</div>
        ))}
      </div>
    </div>
  ))}
</div>

        {/* Certifications */}
        <div>
          <h3 className="text-sm font-mono tracking-widest text-purple-300/80 uppercase mb-6 pb-2 border-b border-purple-400/20">
            Certifications
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="
                  border border-purple-400/15
                  bg-[#0d0715]/50 backdrop-blur-sm
                  p-4
                  transition-colors duration-200
                  hover:border-purple-400/40
                "
                style={{
                  clipPath:
                    'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)',
                }}
              >
                <h4 className="text-sm font-semibold text-white mb-1 leading-snug">
                  {cert.name}
                </h4>
                <p className="text-xs text-purple-300/60 mb-2">{cert.issuer}</p>
                <p className="text-xs font-mono text-white/40">{cert.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills