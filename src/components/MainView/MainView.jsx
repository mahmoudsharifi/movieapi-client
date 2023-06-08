import { useState, useEffect } from 'react'
import { MovieCard } from '../MovieCard/MovieCard'
import { MovieView } from '../MovieView/MovieView'

export const MainView = () => {
  // movies data array
  const [movies, setMovies] = useState([])

  // API Call
  useEffect(() => {
    fetch('http://localhost:8081/movies').then((response) =>
      response.json().then((data) => {
        console.log(data)
        const movies = data.map((m) => ({
          id: m.Title,
          Title: m.Title,
          Description: m.Description,
          Genre: m.Genre.Name,
          Director: m.Director.Name,
          ImageURL: m.ImageURL,
          Year: m.Year,
        }))

        setMovies(movies)
      })
    )
  }, [])

  const [selectedMovie, setSelectedMovie] = useState(null)

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
