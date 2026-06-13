import './Hero.css'

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <p className="hero-greeting">Hi, I'm</p>
        <h1 className="hero-name">Adeleke Eniitan</h1>
        <h2 className="hero-title">Frontend Developer</h2>
        <p className="hero-description">
          I build responsive, user-friendly web applications 
          that are clean, accessible, and enjoyable to use.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">View My Work</a>
          <a href="#contact" className="btn-secondary">Contact Me</a>
        </div>
      </div>
    </section>
  )
}

export default Hero