import Link from "next/link"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { FaHeartbeat, FaShieldAlt, FaUsers } from "react-icons/fa"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="flex-grow flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
        <div className="text-center max-w-2xl">
          <h1 className="text-5xl font-bold mb-6">Welcome to Femora</h1>
          <p className="text-xl mb-8">
            Empowering women through safety, health, and community. Join us in
            creating a better future for every woman.
          </p>
          <div className="space-x-4">
            <Link
              href="/signup"
              className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-purple-50 transition duration-300"
            >
              Get Started
            </Link>
            <Link
              href="/about"
              className="border-2 border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12 text-neutral-950 my-1">
            What We Offer
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
              <FaShieldAlt className="text-pink-500 text-4xl mb-3" />
              <h3 className="text-xl font-semibold text-neutral-950 my-1">
                Women's Safety
              </h3>
              <p className="text-gray-600">
                Ensuring security with smart technology.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
              <FaHeartbeat className="text-red-500 text-4xl mb-3" />
              <h3 className="text-xl font-semibold text-neutral-950 my-1">
                Women's Health
              </h3>
              <p className="text-gray-600">
                Providing health insights and resources.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
              <FaUsers className="text-purple-500 text-4xl mb-3" />
              <h3 className="text-xl font-semibold  text-neutral-950 my-1">
                Women's Empowerment
              </h3>
              <p className="text-gray-600">
                Fostering education and opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-purple-700 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join Femora?</h2>
          <p className="text-xl mb-8">
            Sign up today and take the first step towards a safer, healthier,
            and empowered life.
          </p>
          <Link
            href="/signup"
            className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-purple-50 transition duration-300"
          >
            Sign Up Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
