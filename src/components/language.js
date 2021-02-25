import React, { useContext, useState } from "react"
import { Context } from "./layout"
import { Link } from "gatsby"

const Language = ({ className }) => {
  const myContext = useContext(Context)
  const [isOpen, setOpen] = useState(false)

  const toggleDropdown = () => {
    setOpen(!isOpen)
  }
  return (
    <div className={className}>
      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="relative z-10 block overflow-hidden focus:outline-none focus:border-white"
        >
          {myContext.locale.toUpperCase()} ▼
        </button>
        <div
          className={
            isOpen
              ? "lg:absolute right-0 mt-2 w-48 bg-white rounded-lg py-2 shadow-xl"
              : "hidden"
          }
        >
          <ul>
            <li>
              <Link
                className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
                to={"/"}
                onClick={() => {
                  toggleDropdown()
                  myContext.selectLanguage("id")
                }}
              >
                Indonesia
              </Link>
            </li>
            <li>
              <Link
                className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
                to={"/en"}
                onClick={() => {
                  toggleDropdown()
                  myContext.selectLanguage("en")
                }}
              >
                English
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Language
