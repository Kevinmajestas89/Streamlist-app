import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-gray-800 text-white">
      <nav className="container mx-auto px-4 py-4">
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/movies" className="hover:text-gray-300">
              Movies
            </Link>
          </li>
          <li>
            <Link href="/cart" className="hover:text-gray-300">
              Cart
            </Link>
          </li>
          <li>
            <Link href="/events" className="hover:text-gray-300">
              Events
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-300">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

