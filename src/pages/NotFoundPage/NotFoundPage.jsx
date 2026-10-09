import { Link } from 'react-router-dom'
import './NotFoundPage.css'

function NotFoundPage() {
  return (
    <section className="not-found">
      <p className="not-found__code">404</p>
      <h1 className="not-found__title">Essa faixa não está por aqui.</h1>
      <p className="not-found__description">
        A página que você procura não existe ou mudou de endereço.
      </p>
      <Link className="not-found__link" to="/">Voltar para o início</Link>
    </section>
  )
}

export default NotFoundPage
