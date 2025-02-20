import Link from "next/link"
import logo from "@/assets/femoranova_logo.png"
import Image from "next/image"

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-lg fixed top-0 z-50">
      <div className="container mx-auto px-6 py-1 flex justify-between items-center">
        <div className="logoClass space-x-6 flex flex-row items-center">
          <Image src={logo.src} alt="logo" width={54} height={54} priority />
          <Link href="/" className="text-2xl font-bold text-purple-600">
            Femora
            <label className="text-2xl font-bold text-pink-600">nova</label>
          </Link>
        </div>
        <div className="space-x-6">
          <Link href="/explore" className="text-gray-700 hover:text-purple-600">
            Explore
          </Link>
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
          <Link href="/login" className="text-gray-700 hover:text-purple-600">
            login
          </Link>
        </div>
      </div>
    </nav>
  )
}
