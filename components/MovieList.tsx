import type { Movie } from "@/types"
import { useState } from "react"
import EditMovieForm from "./EditMovieForm"

type MovieListProps = {
  movies: Movie[]
  onEditMovie: (id: number, updatedMovie: Omit<Movie, "id">) => void
}

export default function MovieList({ movies, onEditMovie }: MovieListProps) {
  const [editingId, setEditingId] = useState<number | null>(null)

  return (
    <ul className="space-y-4">
      {movies.map((movie) => (
        <li key={movie.id} className="bg-white shadow rounded-lg p-4">
          {editingId === movie.id ? (
            <EditMovieForm
              movie={movie}
              onSave={(updatedMovie) => {
                onEditMovie(movie.id, updatedMovie)
                setEditingId(null)
              }}
              onCancel={() => setEditingId(null)}
            />
          ) : (
            <>
              <h3 className="text-xl font-semibold">{movie.title}</h3>
              <p className="text-gray-600">Director: {movie.director}</p>
              <p className="text-gray-600">Year: {movie.year}</p>
              <button
                onClick={() => setEditingId(movie.id)}
                className="mt-2 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-2 rounded text-sm"
              >
                Edit
              </button>
            </>
          )}
        </li>
      ))}
    </ul>
  )
}

