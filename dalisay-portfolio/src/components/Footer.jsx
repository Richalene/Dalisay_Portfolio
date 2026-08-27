function Footer() {
  return (
    <footer className="relative z-10 border-t border-purple-400/15 px-8 py-8">
      <div className="max-w-5xl mx-auto flex items-center justify-between flex-wrap gap-4">
        <p className="text-xs font-mono text-white/40 tracking-wide">
          © {new Date().getFullYear()} Mary Dalisay. Built with React & Tailwind. + ReactBits Library.
        </p>

        <div className="flex items-center gap-2 text-xs font-mono text-purple-400/50">
          made with love, red bull, and <a href="https://media.discordapp.net/attachments/1444774902702805067/1542467828743933952/3647743584.png?ex=6a91569c&is=6a90051c&hm=f81017012b2c812c68ebf0bb0d5102906fb4806a23373e27ff202995bc311eae&=&format=webp&quality=lossless&width=640&height=360" target="_blank" rel="noopener noreferrer">Nataniel Nemes</a> for legal support :3
        </div>
      </div>
    </footer>
  )
}

export default Footer