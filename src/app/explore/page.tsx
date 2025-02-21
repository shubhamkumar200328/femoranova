import Navbar from "@/components/Navbar"
import Sos from "@/app/explore/sos/page"
import Safety from "@/app/explore/safety/page"

export default function explore() {
  return (
    <>
      <Navbar />
      <Sos />
      <hr />
      <Safety />
    </>
  )
}
