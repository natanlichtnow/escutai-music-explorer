import MusicCard from '../../components/MusicCard/MusicCard'
import Preloader from '../../components/Preloader/Preloader'
import SearchForm from '../../components/SearchForm/SearchForm'
import './SearchPage.css'

function SearchPage({
  tracks,
  visibleCount,
  status,
  errorMessage,
  currentQuery,
  onSearch,
  onShowMore,
}) {
  return (
    <div className="search-page">
      <section className="search-page__intro">
        <p className="search-page__eyebrow">CATÁLOGO MUSICAL</p>
        <h1 className="search-page__title">Encontre o próximo som da sua vida.</h1>
        <p className="search-page__description">
          Pesquise faixas e artistas e descubra o que combina com o seu momento.
        </p>
      </section>
      <section className="search-page__search" aria-label="Busca de músicas">
        <SearchForm
          onSearch={onSearch}
          isLoading={status === 'loading'}
          initialQuery={currentQuery}
        />
      </section>
      <section className="search-page__results" aria-live="polite" aria-busy={status === 'loading'}>
        {status === 'idle' && (
          <div className="search-page__empty-state">
            <span className="search-page__empty-icon" aria-hidden="true">♫</span>
            <h2>Seu próximo play começa com uma busca</h2>
            <p>Experimente pesquisar um artista, uma música ou um estilo.</p>
          </div>
        )}
        {status === 'loading' && <Preloader />}
        {status === 'error' && (
          <div className="search-page__message search-page__message--error" role="alert">
            <span className="search-page__message-icon" aria-hidden="true">!</span>
            <h2>Não conseguimos carregar os resultados</h2>
            <p>{errorMessage}</p>
            <button
              className="search-page__retry"
              onClick={() => onSearch(currentQuery)}
              type="button"
            >
              Tentar novamente
            </button>
          </div>
        )}
        {status === 'empty' && (
          <div className="search-page__message">
            <span className="search-page__empty-icon" aria-hidden="true">⌕</span>
            <h2>Nada encontrado</h2>
            <p>Não encontramos músicas para “{currentQuery}”. Tente outra busca.</p>
          </div>
        )}
        {status === 'success' && (
          <>
            <div className="search-page__results-heading">
              <div>
                <p className="search-page__results-eyebrow">RESULTADOS DA BUSCA</p>
                <h2 className="search-page__results-title">
                  Músicas para “{currentQuery}”
                </h2>
              </div>
              <span className="search-page__count">
                {tracks.length} {tracks.length === 1 ? 'resultado' : 'resultados'}
              </span>
            </div>
            <div className="search-page__grid">
              {tracks.slice(0, visibleCount).map((track) => (
                <MusicCard track={track} key={track.trackId} />
              ))}
            </div>
            {visibleCount < tracks.length && (
              <button className="search-page__show-more" onClick={onShowMore} type="button">
                Mostrar mais
                <span aria-hidden="true">↓</span>
              </button>
            )}
          </>
        )}
      </section>
    </div>
  )
}

export default SearchPage
