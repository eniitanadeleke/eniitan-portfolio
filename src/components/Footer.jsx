import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-logo">Eniitan.</p>
        <p className="footer-text">
          Designed & Built by Adeleke Eniitan
        </p>
        <div className="footer-links">
          <a href="https://github.com/eniitanadeleke" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/adeleke-eniitan-12959b335/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:eniitanadeleke@gmail.com">Email</a>
        </div>
        <p className="footer-copy">© {new Date().getFullYear()} Adeleke Eniitan. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer