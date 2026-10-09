import { useEffect, useState } from 'react'
import './PopupWithForm.css'

const POPUP_COPY = {
  login: {
    title: 'Que bom ter você de volta',
    description: 'Entre para continuar descobrindo novas músicas.',
    submit: 'Entrar',
    switchText: 'Ainda não tem uma conta?',
    switchLabel: 'Criar conta',
  },
  register: {
    title: 'Vamos começar?',
    description: 'Crie sua conta para acompanhar suas descobertas.',
    submit: 'Criar conta',
    switchText: 'Já tem uma conta?',
    switchLabel: 'Entrar',
  },
}

function PopupWithForm({ type, onClose, onSubmit, onSwitch }) {
  const [email, setEmail] = useState('')
  const copy = POPUP_COPY[type]
  const nextType = type === 'login' ? 'register' : 'login'

  useEffect(() => {
    function handleEscape(event) {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [onClose])

  function handleSubmit(event) {
    event.preventDefault()
    onSubmit({ email })
  }

  if (!copy) {
    return null
  }

  return (
    <div
      className="popup"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose()
        }
      }}
    >
      <section
        className="popup__panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="popup-title"
        aria-describedby="popup-description"
      >
        <button className="popup__close" onClick={onClose} type="button" aria-label="Fechar janela">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="m6 6 12 12M18 6 6 18" />
          </svg>
        </button>
        <p className="popup__eyebrow">ESCUTAÍ</p>
        <h2 className="popup__title" id="popup-title">{copy.title}</h2>
        <p className="popup__description" id="popup-description">{copy.description}</p>
        <form className="popup__form" onSubmit={handleSubmit}>
          <label className="popup__label" htmlFor="account-email">E-mail</label>
          <input
            className="popup__input"
            id="account-email"
            type="email"
            name="email"
            placeholder="voce@email.com"
            autoComplete="email"
            required
            maxLength={120}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <label className="popup__label" htmlFor="account-password">Senha</label>
          <input
            className="popup__input"
            id="account-password"
            type="password"
            name="password"
            placeholder="Mínimo de 8 caracteres"
            autoComplete={type === 'login' ? 'current-password' : 'new-password'}
            required
            minLength={8}
            maxLength={72}
          />
          <button className="popup__submit" type="submit">{copy.submit}</button>
        </form>
        <p className="popup__switch">
          {copy.switchText}{' '}
          <button className="popup__switch-button" onClick={() => onSwitch(nextType)} type="button">
            {copy.switchLabel}
          </button>
        </p>
        <p className="popup__disclaimer">Demonstração visual: nenhuma conta é criada ou autenticada.</p>
      </section>
    </div>
  )
}

export default PopupWithForm
