import { useState, useEffect } from 'react'
import { MovieCard } from '../MovieCard/MovieCard'
import { MovieView } from '../MovieView/MovieView'
import LoginView from '../LoginView/LoginView'
import SignupView from '../SignupView/SignupView'

export const MainView = () => {
  // movies data array
  const [movies, setMovies] = useState([])
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)

  // API Call
  useEffect(() => {}, [])

  const [selectedMovie, setSelectedMovie] = useState(null)

  if (!user) return <LoginView onLoggedIn={(user) => setUser(user)} />

  if (selectedMovie) {
    return (
      <MovieView
        movie={selectedMovie}
        onBackClick={() => setSelectedMovie(null)}
      />
    )
  }

  if (movies.length === 0) {
    return <div>The list is empty!</div>
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie)
          }}
        />
      ))}
    </div>
  )
}
