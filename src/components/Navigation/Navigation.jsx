import { NavLink } from 'react-router-dom'
import './Navigation.css'

function Navigation() {
  const navLinkClass = ({ isActive }) =>
    `navigation__link${isActive ? ' navigation__link--active' : ''}`

  return (
    <nav className="navigation" aria-label="Navegação principal">
      <NavLink className={navLinkClass} to="/" end>
        Início
      </NavLink>
      <NavLink className={navLinkClass} to="/music">
        Explorar músicas
      </NavLink>
    </nav>
  )
}

export default Navigation
