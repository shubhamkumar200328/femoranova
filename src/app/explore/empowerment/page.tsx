import style from "@/app/explore/empowerment/empowerment.module.css"
import Image from "next/image"
import Link from "next/link"
import empower from "@/assets/women's empowerment.webp"

export default function Empowerment() {
  return (
    <>
      <div className={style.empowermentContainer}>
        <Image
          src={empower.src}
          alt="logo"
          width={450}
          height={480}
          priority
          className={style.imgSafety}
        />
        <h2 className=" text-4xl text-purple-700 font-semibold">Empowerment</h2>
        <ul>
          <li className={style.liSafety}>
            <Link
              href="/explore/empowerment/girltoschool"
              className="text-gray-700 hover:text-purple-600"
            >
              Send A Girl To School
            </Link>
          </li>
          <li className={style.liSafety}>
            <Link
              href="/explore/empowerment/exploremore"
              className="text-gray-700 hover:text-purple-600"
            >
              Explore More
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}
