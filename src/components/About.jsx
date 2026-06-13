import './About.css'

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-left">
          <div className="about-image-wrapper">
            <div className="about-image-placeholder">AE</div>
          </div>
        </div>

        <div className="about-right">
          <p className="section-tag">About Me</p>
          <h2 className="about-heading">Passionate about building great web experiences</h2>
          <p className="about-text">
            I'm a Frontend Developer based in Ibadan, Nigeria, with hands-on experience 
            building responsive and user-friendly web applications. I transitioned into 
            tech with a strong drive to create things that make a real impact.
          </p>
          <p className="about-text">
            Currently completing a Software Development Fellowship at Tech4Dev (Women 
            Techsters), where I've deepened my skills in React, JavaScript, and modern 
            frontend workflows.
          </p>
          <div className="about-stats">
            <div className="stat">
              <h3>2+</h3>
              <p>Year Experience</p>
            </div>
            <div className="stat">
              <h3>3+</h3>
              <p>Projects Built</p>
            </div>
            <div className="stat">
              <h3>3</h3>
              <p>Certifications</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About