"use client"

import { useState } from "react"
import type { Movie } from "@/types"

type AddMovieFormProps = {
  onAddMovie: (movie: Omit<Movie, "id">) => void
}

export default function AddMovieForm({ onAddMovie }: AddMovieFormProps) {
  const [title, setTitle] = useState("")
  const [director, setDirector] = useState("")
  const [year, setYear] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onAddMovie({ title, director, year: Number.parseInt(year) })
    setTitle("")
    setDirector("")
    setYear("")
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
      <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Add Movie
      </button>
    </form>
  )
}

