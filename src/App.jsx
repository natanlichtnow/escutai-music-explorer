import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import PopupWithForm from './components/PopupWithForm/PopupWithForm'
import HomePage from './pages/HomePage/HomePage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import SearchPage from './pages/SearchPage/SearchPage'
import { RESULTS_PER_PAGE } from './utils/constants'
import { searchMusic } from './utils/musicApi'

function AppContent() {
  const [user, setUser] = useState(null)
  const [activePopup, setActivePopup] = useState('')
  const [tracks, setTracks] = useState([])
  const [visibleCount, setVisibleCount] = useState(RESULTS_PER_PAGE)
  const [searchStatus, setSearchStatus] = useState('idle')
  const [searchError, setSearchError] = useState('')
  const [currentQuery, setCurrentQuery] = useState('')

  function handleSearch(searchTerm) {
    if (!searchTerm) {
      return
    }

    setCurrentQuery(searchTerm)
    setSearchStatus('loading')
    setSearchError('')
    setTracks([])
    setVisibleCount(RESULTS_PER_PAGE)

    searchMusic(searchTerm)
      .then((results) => {
        setTracks(results)
        setSearchStatus(results.length > 0 ? 'success' : 'empty')
      })
      .catch((error) => {
        setSearchStatus('error')
        setSearchError(
          error instanceof TypeError
            ? 'Não foi possível conectar ao catálogo musical. Verifique sua conexão e tente novamente.'
            : error instanceof Error
              ? error.message
              : 'Algo deu errado ao buscar. Tente novamente.',
        )
      })
  }

  function handleShowMore() {
    setVisibleCount((count) => count + RESULTS_PER_PAGE)
  }

  function handleDemoLogin({ email }) {
    const name = email.split('@')[0].replace(/[._-]/g, ' ')
    setUser(name || 'Visitante')
    setActivePopup('')
  }

  function handleLogout() {
    setUser(null)
  }

  return (
    <div className="app">
      <Header
        user={user}
        onLogin={() => setActivePopup('login')}
        onLogout={handleLogout}
      />
      <Main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/music"
            element={(
              <SearchPage
                tracks={tracks}
                visibleCount={visibleCount}
                status={searchStatus}
                errorMessage={searchError}
                currentQuery={currentQuery}
                onSearch={handleSearch}
                onShowMore={handleShowMore}
              />
            )}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Main>
      <Footer />
      {activePopup && (
        <PopupWithForm
          type={activePopup}
          onClose={() => setActivePopup('')}
          onSubmit={handleDemoLogin}
          onSwitch={(nextType) => setActivePopup(nextType)}
        />
      )}
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App
