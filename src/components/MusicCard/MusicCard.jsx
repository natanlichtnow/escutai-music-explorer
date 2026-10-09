import './MusicCard.css'

function formatDuration(milliseconds) {
  if (!Number.isFinite(milliseconds) || milliseconds <= 0) {
    return ''
  }

  const totalSeconds = Math.floor(milliseconds / 1000)
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = String(totalSeconds % 60).padStart(2, '0')
  return `${minutes}:${seconds}`
}

function MusicCard({ track }) {
  const artwork = track.artworkUrl100?.replace('100x100bb', '300x300bb')
  const releaseYear = track.releaseDate
    ? new Date(track.releaseDate).getFullYear()
    : null
  const duration = formatDuration(track.trackTimeMillis)

  return (
    <article className="music-card">
      <div className="music-card__artwork-wrap">
        {artwork ? (
          <img
            className="music-card__artwork"
            src={artwork}
            alt={`Capa do álbum ${track.collectionName || track.trackName}`}
            loading="lazy"
            width="300"
            height="300"
          />
        ) : (
          <div className="music-card__artwork music-card__artwork--missing" aria-hidden="true">
            ♪
          </div>
        )}
        {track.primaryGenreName && (
          <span className="music-card__genre">{track.primaryGenreName}</span>
        )}
      </div>
      <div className="music-card__content">
        <h3 className="music-card__title" title={track.trackName}>
          {track.trackName}
        </h3>
        <p className="music-card__artist">{track.artistName}</p>
        <p className="music-card__album">{track.collectionName || 'Single'}</p>
        <div className="music-card__details">
          {releaseYear && <span>{releaseYear}</span>}
          {duration && <span>{duration}</span>}
        </div>
        {track.previewUrl ? (
          <audio
            className="music-card__audio"
            controls
            preload="none"
            src={track.previewUrl}
            aria-label={`Prévia de ${track.trackName}, por ${track.artistName}`}
          >
            Seu navegador não oferece suporte à reprodução de áudio.
          </audio>
        ) : (
          <p className="music-card__no-preview">Prévia de áudio indisponível</p>
        )}
      </div>
    </article>
  )
}

export default MusicCard
