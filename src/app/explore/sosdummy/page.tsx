"use client"
import { useState } from "react"
import style from "@/app/explore/sosdummy/sosdummy.module.css"
import "@/app/explore/sosdummy/sosdummy.css"
import { ToastContainer, toast } from "react-toastify"
import Navbar from "@/components/Navbar"

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
            <p>Emergency</p>
          </div>
          <div className={style.column2}>
            <div
              className={`${style.sosDiv} ${clicked ? style.clicked : ""}`}
              onClick={handleClickFunctions}
            >
              <div className="transiDiv">
                <p className={style.sosPara}>SOS</p>
                {/* Smaller divs that appear when clicked */}
                <div
                  className={`${style.sosSide} ${clicked ? style.show1 : ""}`}
                >
                  Father
                </div>
                <div
                  className={`${style.sosSide} ${clicked ? style.show2 : ""}`}
                >
                  Mother
                </div>
                <div
                  className={`${style.sosSide} ${clicked ? style.show3 : ""}`}
                >
                  Bro/Frnd
                </div>
              </div>
            </div>
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
