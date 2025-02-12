import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <section className="flex-grow flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
        <div className="text-center max-w-2xl">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl mb-8">
            We&apos;d love to hear from you! Reach out to us for any questions,
            feedback, or collaborations.
          </p>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>
          <form className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-gray-700 font-semibold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="Your Message"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  )
}
