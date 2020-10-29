import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
function Nav() {
  const [isActive, setActive] = useState(false)

  const toggleClass = () => {
    setActive(!isActive)
  }

  const [offset, setOffset] = useState(0)

  useEffect(() => {
    window.onscroll = () => {
      let winScroll = document.documentElement.scrollTop
      let maxPageY =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight
      let ScrollValue = (winScroll / maxPageY) * 100
      setOffset(ScrollValue)
    }
  }, [])

  return (
    <nav
      id="header"
      className={
        offset > 10
          ? "bg-white shadow fixed w-full z-10 top-0"
          : "fixed w-full z-10 top-0"
      }
    >
      <div
        id="progress"
        className="h-1 z-20 top-0"
        style={{
          background: `linear-gradient(to right,#4dc0b5 ${
            offset + "%"
          }, transparent 0)`,
        }}
      ></div>

      <div className="w-full md:max-w-6xl mx-auto flex flex-wrap items-center justify-between mt-0 py-3">
        <div className="pl-4">
          <Link to={"/"}>
            <a
              className="text-gray-900 no-underline hover:no-underline font-bold text-xl"
              href="#"
            >
              Billy's Blog
            </a>
          </Link>
        </div>

        <div className="block lg:hidden pr-4">
          <button
            id="nav-toggle"
            className={
              "flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-900 hover:border-teal-500 appearance-none focus:outline-none"
            }
            onClick={toggleClass}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div
          id="nav-content"
          className={
            offset > 10
              ? `w-full flex-grow lg:flex lg:items-center lg:w-auto ${
                  isActive ? "" : "hidden"
                } lg:block mt-2 lg:mt-0 bg-white md:bg-transparent z-20`
              : `w-full flex-grow lg:flex lg:items-center lg:w-auto ${
                  isActive ? "" : "hidden"
                } lg:block mt-2 lg:mt-0 bg-gray-100 md:bg-transparent z-20`
          }
        >
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            <li className="mr-3">
              <Link to={"/"} activeClassName="font-bold">
                <a
                  className="inline-block py-2 px-4 text-gray-900 no-underline hover:underline"
                  href="#"
                >
                  Home
                </a>
              </Link>
            </li>
            <li className="mr-3">
              <Link to={"/blog"} activeClassName="font-bold">
                <a
                  className="inline-block py-2 px-4 text-gray-900 no-underline hover:underline"
                  href="#"
                >
                  Blog
                </a>
              </Link>
            </li>
            <li className="mr-3">
              <Link to={"/project"} activeClassName="font-bold">
                <a
                  className="inline-block py-2 px-4 text-gray-900 no-underline hover:underline"
                  href="#"
                >
                  Project
                </a>
              </Link>
            </li>
            <li className="mr-3">
              <Link to={"/about"} activeClassName="font-bold">
                <a
                  className="inline-block py-2 px-4 text-gray-900 no-underline hover:underline"
                  href="#"
                >
                  About
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}


export { Nav }
