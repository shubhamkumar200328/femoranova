import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-lg fixed top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-purple-600">
          Femora
        </Link>
        <div className="space-x-6">
          <Link href="/about" className="text-gray-700 hover:text-purple-600">
            About
          </Link>
          <Link
            href="/features"
            className="text-gray-700 hover:text-purple-600"
          >
            Features
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-purple-600">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}
