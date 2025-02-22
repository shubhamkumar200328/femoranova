"use client"
import { useState } from "react"
import style from "@/app/explore/sos/sos.module.css"
import "@/app/explore/sos/sos.css"
import { ToastContainer, toast } from "react-toastify"
import Navbar from "@/components/Navbar"
import Image from "next/image"
import sos from "@/assets/sos_girl.webp"

export default function Sos() {
  const [clicked, setClicked] = useState(false)

  const notify = () => toast.success("Location shared successfully!")
  const notifyEnter = () => toast("Message sended successfully!")

  const [isInputVisible, setIsInputVisible] = useState(false)

  // Function to toggle the visibility
  const handleButtonClick = () => {
    setIsInputVisible(true) // Toggle between true and false
  }

  const handleClick = () => {
    setClicked(true) // Trigger the transition
    setTimeout(() => setClicked(false), 1500) // Reset after all transitions are done
  }

  const handleClickFunctions = () => {
    handleClick()
    notify()
    setClicked(true)
    handleButtonClick()
  }

  return (
    <>
      <Navbar />
      <div className={style.sosbody}>
        <div className={style.container}>
          <div className={style.column1}>
            <Image
              src={sos.src}
              alt="logo"
              width={400}
              height={400}
              priority
              className={style.imgSos}
            />
          </div>
          <div className={style.column2}>
            <div
              className={`${style.sosDiv} ${clicked ? style.clicked : ""}`}
              onClick={handleClickFunctions}
            >
              <p className={style.sosPara}>SOS</p>

              {/* Smaller divs that appear when clicked */}
              <div className={`${style.sosSide} ${clicked ? style.show1 : ""}`}>
                Father
              </div>
              <div className={`${style.sosSide} ${clicked ? style.show2 : ""}`}>
                Mother
              </div>
              <div className={`${style.sosSide} ${clicked ? style.show3 : ""}`}>
                Bro/Frnd
              </div>
            </div>
            <p className=" mt-9 text-4xl text-center">
              Press ☝️ for <label className=" text-purple-400">Help</label>
            </p>
          </div>
          <div className={style.column3}>
            {isInputVisible && (
              <div
                className={`${style.inputsection} ${
                  clicked ? style.inputShow : style.inputShow
                }`}
              >
                <h3 className="text-white mb-3">
                  Double click on the button below👇 if you&apos;re safe.
                </h3>
                <button className="btnfos btnfos-3" onDoubleClick={notifyEnter}>
                  I am Safe
                </button>
              </div>
            )}
          </div>
        </div>
        <ToastContainer /> {/* for notification alert */}
      </div>
    </>
  )
}
