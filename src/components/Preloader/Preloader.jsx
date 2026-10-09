import './Preloader.css'

function Preloader() {
  return (
    <div className="preloader" role="status" aria-live="polite">
      <span className="preloader__spinner" aria-hidden="true" />
      <p className="preloader__message">Procurando músicas para você...</p>
    </div>
  )
}

export default Preloader
