function Footer() {
  return (
    <footer className="relative z-10 border-t border-purple-400/15 px-8 py-8">
      <div className="max-w-5xl mx-auto flex items-center justify-between flex-wrap gap-4">
        <p className="text-xs font-mono text-white/40 tracking-wide">
          © {new Date().getFullYear()} Mary Dalisay. Built with React & Tailwind. + ReactBits Library.
        </p>

        <div className="flex items-center gap-2 text-xs font-mono text-purple-400/50">
          made with love and red bull :p
        </div>
      </div>
    </footer>
  )
}

export default Footer