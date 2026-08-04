import './Hero.css'

export default function Hero({ onNavigate }) {
  return (
    <section className="hero">
      <img className="hero__image" src="/public/hero.png" alt="" aria-hidden="true" />
      <div className="hero__overlay" />

      <div className="hero__content">
        <p className="eyebrow hero__eyebrow">FILE // PORTFOLIO-2026</p>

        <h1 className="hero__title">
          MARY
          <br />
          DALISAY
        </h1>

        <p className="hero__body">
          I'm a Computer Science student focused on practical, real-world builds.
          I enjoy learning new technologies and applying them to projects that solve problems or improve processes.
          My interests include Linux ricing, web development, and machine learning.
        </p>

        <div className="hero__actions">
          <button className="hero__cta" onClick={() => onNavigate('works')}>
            View Works
          </button>
          <button className="hero__cta hero__cta--ghost" onClick={() => onNavigate('contact')}>
            Get in Touch
          </button>
        </div>
      </div>

      {/*
      <div className="hero__meta">
        <span>NO. 004 / RACK-01</span>
        <span className="hero__meta-rule" />
        <span>UPTIME 412D</span>
      </div>
      */}
    </section>
  )
}
