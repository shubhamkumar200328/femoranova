import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function Features() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <section className="flex-grow flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
        <div className="text-center max-w-2xl">
          <h1 className="text-5xl font-bold mb-6">Features</h1>
          <p className="text-xl mb-8">
            Explore the tools and resources designed to empower women in every
            aspect of their lives.
          </p>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Women&apos;s Safety</h3>
              <p className="text-gray-600">
                Tools and resources to ensure your safety, wherever you are.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Health & Wellness</h3>
              <p className="text-gray-600">
                Access to health tips, tracking, and expert advice.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Empowerment</h3>
              <p className="text-gray-600">
                Join a community that supports and uplifts women.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
