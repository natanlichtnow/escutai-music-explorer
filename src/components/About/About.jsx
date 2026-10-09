import './About.css'

function About() {
  return (
    <section className="about" aria-labelledby="about-title">
      <div className="about__icon" aria-hidden="true">♫</div>
      <div className="about__content">
        <p className="about__eyebrow">SOBRE O PROJETO</p>
        <h2 className="about__title" id="about-title">Feito para ouvir com curiosidade.</h2>
        <p className="about__description">
          O Escutaí é um projeto independente criado como exercício de desenvolvimento web.
          Ele reúne uma interface em React e dados públicos da iTunes Search API para tornar
          a descoberta musical simples e acessível.
        </p>
      </div>
    </section>
  )
}

export default About
