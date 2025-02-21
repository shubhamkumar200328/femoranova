import Navbar from "@/components/Navbar"
import Sos from "@/app/explore/sos/page"
import Safety from "@/app/explore/safety/page"
import Footer from "@/components/Footer"
import Health from "@/app/explore/health/page"
import Empowerment from "@/app/explore/empowerment/page"

export default function explore() {
  return (
    <>
      <Navbar />
      <Sos />
      <hr />
      <div className="sh flex flex-row">
        <Safety />
        <Health />
        <Empowerment />
      </div>
      <hr />
      <Footer />
    </>
  )
}
