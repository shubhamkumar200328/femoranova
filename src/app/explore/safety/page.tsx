import style from "@/app/explore/safety/safety.module.css"
import Image from "next/image"
import Link from "next/link"
import safety from "@/assets/women's safety.webp"

export default function Safety() {
  return (
    <>
      <div className={style.safetyContainer}>
        <Image
          src={safety.src}
          alt="logo"
          width={450}
          height={480}
          priority
          className={style.imgSafety}
        />
        <h2 className=" text-4xl text-purple-700 font-semibold">Safety</h2>
        <ul>
          <li className={style.liSafety}>
            <Link
              href="/explore/safety/askforhelp"
              className="text-gray-700 hover:text-purple-600"
            >
              Ask For Help!
            </Link>
          </li>
          <li className={style.liSafety}>
            <Link
              href="/explore/safety/letmeassist"
              className="text-gray-700 hover:text-purple-600"
            >
              Let Me Assist!
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}
