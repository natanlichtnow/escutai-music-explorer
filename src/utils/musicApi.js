import {
  API_BASE_URL,
  DEFAULT_COUNTRY,
  MAX_API_RESULTS,
} from './constants'

export function searchMusic(searchTerm) {
  const params = new URLSearchParams({
    term: searchTerm,
    media: 'music',
    entity: 'song',
    country: DEFAULT_COUNTRY,
    limit: String(MAX_API_RESULTS),
  })

  return fetch(`${API_BASE_URL}?${params.toString()}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Não foi possível consultar o catálogo musical.')
      }

      return response.json()
    })
    .then((data) => {
      if (!Array.isArray(data.results)) {
        throw new Error('A resposta recebida não contém uma lista de músicas.')
      }

      return data.results
    })
}
