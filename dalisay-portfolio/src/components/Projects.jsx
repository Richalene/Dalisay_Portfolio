const projects = [
  {
    name: 'SenyaSabi',
    description: 'Filipino Sign Language learning system with real-time recognition via MediaPipe landmark extraction and CNN classification.',
    tech: ['PySide6', 'MediaPipe', 'CNN'],
  },
  {
    name: 'Starlink Data Scraper',
    description: 'Live-session scraper extracting structured data directly from Chrome and exporting to CSV pipelines.',
    tech: ['Selenium', 'pandas'],
  },
  {
    name: 'Self-Hosted Media Server',
    description: 'Arch Linux-based media system with Flask backend for streaming at home.',
    tech: ['Python', 'Flask', 'Arch Linux'],
  },
  {
    name: 'Auto-Companion',
    description: 'Java based desktop application that is a Point of Sale System for a car parts store.',
    tech: ['Java', 'Swing'],
  },
  {
    name: 'CineArchive',
    description: 'A comprehensive movie database application for organizing and managing personal film collections.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Flask', 'MySQL'],
  },
]

function Projects() {
  return (
    <section id="projects" className="relative z-10 min-h-screen px-8 py-32">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-baseline gap-4 mb-12 max-w-xl">
          <span className="text-sm font-mono text-purple-400/60">02</span>
          <span className="h-px flex-1 max-w-16 bg-gradient-to-r from-purple-400/50 to-transparent" />
          <span className="text-xs font-semibold tracking-[0.2em] text-purple-300/70 uppercase">
            Projects
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 tracking-tight">
          Things I've built.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.name}
              className="group relative border border-purple-400/15 bg-[#0d0715]/50 backdrop-blur-sm p-6 transition-colors hover:border-purple-400/40"
              style={{
                clipPath:
                  'polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)',
              }}
            >
              <span className="text-xs font-mono text-purple-400/50">
                {String(i + 1).padStart(2, '0')}
              </span>

              <h3 className="text-xl font-bold text-white mt-2 mb-3">
                {project.name}
              </h3>

              <p className="text-sm text-white/60 leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-2 py-1 border border-purple-400/20 text-purple-300/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects