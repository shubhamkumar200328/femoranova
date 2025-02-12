import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <section className="flex-grow flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
        <div className="text-center max-w-2xl">
          <h1 className="text-5xl font-bold mb-6">About Femora</h1>
          <p className="text-xl mb-8">
            Femora is a platform dedicated to empowering women through safety,
            health, and community. Our mission is to create a safe and
            supportive space for women to thrive.
          </p>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Our Mission</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We believe in empowering women by providing tools and resources that
            enhance their safety, health, and overall well-being. Femora is more
            than just a platform—it&apos;s a movement.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  )
}
