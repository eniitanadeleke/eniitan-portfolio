import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target

    try {
      const response = await fetch('https://formspree.io/f/mwvjwnva', {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      })

      if (response.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2 className="contact-heading">Get In Touch</h2>
        <p className="contact-subtext">
          I'm currently open to new opportunities. Whether you have a 
          question, a project in mind, or just want to say hi — my 
          inbox is always open!
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Name</label>
              <input type="text" name="name" placeholder="Your name" required />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" name="email" placeholder="your@email.com" required />
            </div>
          </div>
          <div className="form-group">
            <label>Subject</label>
            <input type="text" name="subject" placeholder="What's this about?" required />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea rows="6" name="message" placeholder="Your message here..." required></textarea>
          </div>

          {status === 'success' && (
            <p className="form-success">Message sent successfully! I'll get back to you soon 😊</p>
          )}
          {status === 'error' && (
            <p className="form-error">Something went wrong. Please try again or email me directly.</p>
          )}

          <button type="submit" className="contact-btn">Send Message</button>
        </form>

        <div className="contact-links">
          <a href="mailto:eniitanadeleke@gmail.com" className="contact-link">
            eniitanadeleke@gmail.com
          </a>
          <a href="https://github.com/eniitanadeleke" target="_blank" rel="noreferrer" className="contact-link">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/adeleke-eniitan-12959b335/" target="_blank" rel="noreferrer" className="contact-link">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact