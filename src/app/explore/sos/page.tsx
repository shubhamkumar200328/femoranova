"use client"
import { useState } from "react"
import style from "@/app/explore/sos/sos.module.css"
import { ToastContainer, toast } from "react-toastify"

export default function Sos() {
  const [clicked, setClicked] = useState(false)

  const notify = () => toast.success("Location shared successfully!")

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
    <div className={style.sosbody}>
      <div className={style.container1}>
        <h1>Hi, this is explore section.</h1>

        <div className={style.container11}>
          <div className="inputDiv">
            <p></p>
            {/* {isInputVisible ? "Hide Input" : "Show Input"} */}

            {/* Conditionally render the input field based on the state */}
            {isInputVisible && (
              <div
                className={`${style.inputsection} ${
                  clicked ? style.inputShow : style.inputShow
                }`}
              >
                <input
                  type="text"
                  id="userInput"
                  placeholder="type 'safe' if you are safe."
                  className={style.inputArea}
                />
                <button>Enter</button>
              </div>
            )}
          </div>
          <div className={style.container2}>
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
        </div>
      </div>
      <ToastContainer /> {/* for notification alert */}
    </div>
  )
}
