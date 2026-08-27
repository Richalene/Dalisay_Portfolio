function About() {
  return (
    <section id="about" className="flex flex-col justify-center max-w-xl">
      <div className="flex items-baseline gap-4 mb-8">
        <span className="text-sm font-mono text-purple-400/60">01</span>
        <span className="h-px flex-1 max-w-16 bg-gradient-to-r from-purple-400/50 to-transparent" />
        <span className="text-xs font-semibold tracking-[0.2em] text-purple-300/70 uppercase">
          About Me
        </span>
      </div>

      <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
        Keeping systems<br />alive and running.
      </h2>

      <div className="space-y-5 text-white/70 leading-relaxed text-base md:text-lg">
        <p>
          I'm an aspiring <span className="text-white font-medium">Linux System Administrator</span> —
          I like tweaking systems and figuring out why
          something broke at 2am. Be it mine or a friend's, I like to keep things running smoothly and efficiently.
        </p>

        <p>
          Most of my time goes into <span className="text-purple-300 font-medium">Arch-based systems</span>,
          reading into the system, keeping them up-to-date, and automating the repetitive stuff so I
          don't have to think about it twice.
        </p>

        <p>
          Outside of that, I run <span className="text-white font-medium">self-hosted home servers for my family</span>{' '}
          and tinker with livestreaming setups on OBS.
        </p>
      </div>
    </section>
  )
}

export default About