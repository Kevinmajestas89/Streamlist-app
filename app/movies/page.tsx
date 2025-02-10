"use client"

import { useState, useEffect } from "react"
import MovieList from "@/components/MovieList"
import AddMovieForm from "@/components/AddMovieForm"
import type { Movie, Event } from "@/types"

export default function Movies() {
  const [movies, setMovies] = useState<Movie[]>([
    { id: 1, title: "Inception", director: "Christopher Nolan", year: 2010 },
    { id: 2, title: "The Shawshank Redemption", director: "Frank Darabont", year: 1994 },
    { id: 3, title: "The Godfather", director: "Francis Ford Coppola", year: 1972 },
  ])

  const addMovie = (movie: Omit<Movie, "id">) => {
    const newMovie = { ...movie, id: movies.length + 1 }
    setMovies([...movies, newMovie])
    addEvent({ type: "ADD_MOVIE", data: newMovie })
  }

  const editMovie = (id: number, updatedMovie: Omit<Movie, "id">) => {
    const newMovies = movies.map((movie) => (movie.id === id ? { ...movie, ...updatedMovie } : movie))
    setMovies(newMovies)
    addEvent({ type: "EDIT_MOVIE", data: { id, ...updatedMovie } })
  }

  const addEvent = (event: Event) => {
    const events = JSON.parse(localStorage.getItem("events") || "[]")
    const newEvents = [...events, { ...event, timestamp: new Date().toISOString() }]
    localStorage.setItem("events", JSON.stringify(newEvents))
  }

  useEffect(() => {
    addEvent({ type: "VIEW_MOVIES", data: null })
  }, [addEvent]) // Added addEvent to the dependency array

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Movies</h1>
      <AddMovieForm onAddMovie={addMovie} />
      <MovieList movies={movies} onEditMovie={editMovie} />
    </div>
  )
}

