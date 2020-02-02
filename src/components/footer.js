import { Link } from "gatsby"
import React from "react"
import Logo from "./logo"

const Footer = () => (
  <div className="footer-container" style={{
      backgroundColor: '#1B1B1B',
      width: '100%',
      padding: '75px 0',
      bottom: '0px',
      position: 'absolute'
    }}>
    <div className="footer" style={{
        color: 'white',
        maxWidth: '960px',
        padding: '0 1rem',
        margin: 'auto',
        textAlign: 'center'
      }}>
      <div className="footer-column">
        <div style={{ maxWidth: '60px' }}>
          <Logo/>
        </div>
      </div>
      <div className="footer-column">
        <Link to="/pricing/" className="footer-link" title="pricing">Pricing</Link>
        <Link to="/tutorials/" className="footer-link" title="tutorials">Tutorials</Link>
        <Link to="/contact/" className="footer-link" title="contact">Contact</Link>
      </div>
      <div className="footer-column">
        <a title="twitter" href="https://twitter.com/Spart_xyz" target="_blank" rel="noopener noreferrer" className="social-media">Twitter</a>
        <a title="instagram" href="https://www.instagram.com/spart_xyz/" target="_blank" rel="noopener noreferrer" className="social-media">Instagram</a>
        <a title="discord" href="https://invite.gg/spart" target="_blank" rel="noopener noreferrer" className="social-media">Discord</a>
      </div>
      <div className="footer-column">
        <a title="termsandconditions" href="https://www.termsfeed.com/terms-conditions/97c00a1dabd1b42b067919c18f66ef41" target="_blank" rel="noopener noreferrer" className="footer-link">Terms and Conditions</a>
        <a title="privacypolicy" href="https://www.termsfeed.com/privacy-policy/a73aca3759d6d3cd07465dfc7b54cdfe" target="_blank" rel="noopener noreferrer" className="footer-link">Privacy Policy</a>
      </div>
    </div>
  </div>
)

export default Footer
