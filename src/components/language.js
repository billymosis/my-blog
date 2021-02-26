import React, { useContext, useState } from "react"
import { Context } from "./layout"
import { navigate } from "gatsby"

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
          {myContext.locale === "id" ? "ID" : "EN"} ▼
        </button>
        <div
          className={
            isOpen
              ? "lg:absolute right-0 mt-2 w-48 bg-white dark:bg-gray-900 rounded-lg py-2"
              : "hidden"
          }
        >
          <ul>
            <li>
              <button
                className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white w-full dark:text-white "
                onClick={() => {
                  toggleDropdown()
                  if (myContext.locale !== "id") {
                    myContext.selectLanguage("id")
                    let wp = window.location.pathname
                    if (
                      wp === "/en/about" ||
                      wp === "/en/project" ||
                      wp === "/en/blog"
                    ) {
                      navigate(window.location.href.replace("/en", ""))
                    } else {
                      navigate(window.location.origin)
                    }
                  }
                }}
              >
                Indonesia
              </button>
            </li>
            <li>
              <button
                className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white w-full dark:text-white "
                onClick={() => {
                  toggleDropdown()
                  if (myContext.locale !== "en") {
                    myContext.selectLanguage("en")
                    let wp = window.location.pathname
                    if (
                      wp === "/about" ||
                      wp === "/project" ||
                      wp === "/blog"
                    ) {
                      navigate(window.location.href.replace(wp, "/en" + wp))
                    } else {
                      navigate(window.location.origin + "/en")
                    }
                  }
                }}
              >
                English
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Language
