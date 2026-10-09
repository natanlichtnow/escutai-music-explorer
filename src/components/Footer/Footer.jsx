import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <Link className="footer__brand" to="/">
          escutaí
        </Link>
        <p className="footer__credit">
          Um projeto de descoberta musical para quem gosta de ouvir com curiosidade.
        </p>
        <a
          className="footer__external-link"
          href="https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/"
          target="_blank"
          rel="noreferrer"
        >
          Fonte do catálogo: iTunes Search API
        </a>
        <span className="footer__copyright">© 2026 Escutaí</span>
      </div>
    </footer>
  )
}

export default Footer
