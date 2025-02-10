import Link from "next/link"

export default function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Welcome to Streamlist</h1>
      <p className="text-xl">Your personal movie library and watchlist manager.</p>
      <div className="space-x-4">
        <Link href="/movies" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Browse Movies
        </Link>
        <Link href="/about" className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
          About Us
        </Link>
      </div>
    </div>
  )
}

