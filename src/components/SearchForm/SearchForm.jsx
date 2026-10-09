import { useState } from 'react'
import './SearchForm.css'

function SearchForm({ onSearch, isLoading, initialQuery = '' }) {
  const [searchTerm, setSearchTerm] = useState(initialQuery)

  function handleSubmit(event) {
    event.preventDefault()
    onSearch(searchTerm.trim())
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <label className="search-form__label" htmlFor="music-search">
        Busque por música ou artista
      </label>
      <div className="search-form__controls">
        <div className="search-form__input-wrap">
          <svg
            className="search-form__icon"
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle cx="10.8" cy="10.8" r="6.8" stroke="currentColor" strokeWidth="1.8" />
            <path d="m16 16 4.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
          <input
            className="search-form__input"
            id="music-search"
            type="search"
            name="query"
            placeholder="Ex.: Liniker, MPB, Velha Infância..."
            autoComplete="off"
            required
            minLength={2}
            maxLength={80}
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </div>
        <button className="search-form__button" type="submit" disabled={isLoading}>
          {isLoading ? 'Buscando...' : 'Buscar músicas'}
        </button>
      </div>
      <p className="search-form__hint">Explore faixas e artistas disponíveis no catálogo.</p>
    </form>
  )
}

export default SearchForm
