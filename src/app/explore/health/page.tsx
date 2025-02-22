import style from "@/app/explore/health/health.module.css"
import Image from "next/image"
import Link from "next/link"
import health from "@/assets/women's health.webp"

export default function Safety() {
  return (
    <>
      <div className={style.healthContainer}>
        <Image
          src={health.src}
          alt="logo"
          width={450}
          height={480}
          priority
          className={style.imgSafety}
        />
        <h2 className=" text-4xl text-purple-700 font-semibold">Health</h2>
        <ul>
          <li className={style.liSafety}>
            <Link
              href="/explore/health/physical"
              className="text-gray-700 hover:text-purple-600"
            >
              Physical Health
            </Link>
          </li>
          <li className={style.liSafety}>
            <Link
              href="/explore/health/mental"
              className="text-gray-700 hover:text-purple-600"
            >
              Mental Health
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}
