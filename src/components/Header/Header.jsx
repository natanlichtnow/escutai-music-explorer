import { Link } from 'react-router-dom'
import brandMark from '../../images/brand-mark.svg'
import Navigation from '../Navigation/Navigation'
import './Header.css'

function Header({ user, onLogin, onLogout }) {
  return (
    <header className="header">
      <div className="header__content">
        <Link className="header__brand" to="/" aria-label="Escutaí, página inicial">
          <img className="header__logo" src={brandMark} alt="" />
          <span>escutaí</span>
        </Link>
        <Navigation />
        {user ? (
          <div className="header__account">
            <span className="header__greeting">Oi, {user}</span>
            <button className="header__account-button" onClick={onLogout} type="button">
              Sair
            </button>
          </div>
        ) : (
          <button className="header__login" onClick={onLogin} type="button">
            Entrar
          </button>
        )}
      </div>
    </header>
  )
}

export default Header
