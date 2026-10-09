import { Link } from 'react-router-dom'
import About from '../../components/About/About'
import './HomePage.css'

const FEATURES = [
  {
    number: '01',
    title: 'Pesquise sem complicação',
    description: 'Digite o nome de uma música, artista ou estilo e deixe a curiosidade guiar.',
    icon: '⌕',
  },
  {
    number: '02',
    title: 'Descubra novas faixas',
    description: 'Explore capas, álbuns, gêneros e detalhes de cada resultado encontrado.',
    icon: '♫',
  },
  {
    number: '03',
    title: 'Dê o play na prévia',
    description: 'Quando disponível no catálogo, escute um trecho diretamente no cartão.',
    icon: '▶',
  },
]

function HomePage() {
  return (
    <div className="home">
      <section className="home__hero">
        <div className="home__hero-content">
          <p className="home__eyebrow">
            <span className="home__eyebrow-dot" />
            SUA PRÓXIMA MÚSICA ESTÁ POR AÍ
          </p>
          <h1 className="home__title">
            O que você vai <span>ouvir hoje?</span>
          </h1>
          <p className="home__description">
            Um lugar simples para encontrar artistas, conhecer novas faixas e seguir o fio da sua curiosidade musical.
          </p>
          <Link className="home__cta" to="/music">
            Explorar músicas
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h14m-6-6 6 6-6 6" />
            </svg>
          </Link>
          <p className="home__note">Gratuito, sem cadastro e sempre pronto para o próximo play.</p>
        </div>
        <div className="home__art" aria-hidden="true">
          <div className="home__art-glow" />
          <div className="home__record home__record--back" />
          <div className="home__record">
            <div className="home__record-label">
              <span className="home__record-mark">♫</span>
              <span>PLAY<br />SOMETHING<br />NEW</span>
            </div>
          </div>
          <div className="home__floating-note home__floating-note--top">♪</div>
          <div className="home__floating-note home__floating-note--bottom">♫</div>
          <div className="home__sound-line home__sound-line--one" />
          <div className="home__sound-line home__sound-line--two" />
        </div>
      </section>
      <section className="home__features" aria-labelledby="features-title">
        <div className="home__section-heading">
          <p className="home__section-eyebrow">COMO FUNCIONA</p>
          <h2 className="home__section-title" id="features-title">Uma descoberta de cada vez</h2>
          <p className="home__section-description">
            Da busca ao play, tudo o que você precisa para encontrar sua próxima faixa favorita.
          </p>
        </div>
        <ul className="home__feature-list">
          {FEATURES.map((feature) => (
            <li className="home__feature" key={feature.number}>
              <span className="home__feature-icon" aria-hidden="true">{feature.icon}</span>
              <span className="home__feature-number">{feature.number}</span>
              <h3 className="home__feature-title">{feature.title}</h3>
              <p className="home__feature-description">{feature.description}</p>
            </li>
          ))}
        </ul>
      </section>
      <About />
      <section className="home__bottom-cta">
        <div>
          <p className="home__section-eyebrow">SEU PRÓXIMO PLAY COMEÇA AQUI</p>
          <h2>Vamos encontrar uma música?</h2>
        </div>
        <Link className="home__cta home__cta--light" to="/music">
          Começar a explorar
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5 12h14m-6-6 6 6-6 6" />
          </svg>
        </Link>
      </section>
    </div>
  )
}

export default HomePage
