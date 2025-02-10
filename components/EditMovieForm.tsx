"use client"

import { useState } from "react"
import type { Movie } from "@/types"

type EditMovieFormProps = {
  movie: Movie
  onSave: (updatedMovie: Omit<Movie, "id">) => void
  onCancel: () => void
}

export default function EditMovieForm({ movie, onSave, onCancel }: EditMovieFormProps) {
  const [title, setTitle] = useState(movie.title)
  const [director, setDirector] = useState(movie.director)
  const [year, setYear] = useState(movie.year.toString())

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave({ title, director, year: Number.parseInt(year) })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="director" className="block text-sm font-medium text-gray-700">
          Director
        </label>
        <input
          type="text"
          id="director"
          value={director}
          onChange={(e) => setDirector(e.target.value)}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="year" className="block text-sm font-medium text-gray-700">
          Year
        </label>
        <input
          type="number"
          id="year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div className="flex space-x-2">
        <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
          Save
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
        >
          Cancel
        </button>
      </div>
    </form>
  )
}

