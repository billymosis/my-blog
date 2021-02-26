import React, { useEffect, useState } from "react"
import { FaAngleUp } from "react-icons/fa"

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    document.addEventListener("scroll", () => {
      let scrolled = typeof window !== "undefined" && window.pageYOffset
      if (scrolled >= 1200) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    })
  }, [])

  return (
    isVisible && (
      <div
        className={
          "sticky float-right inline-block bottom-8 right-0 rounded-full cursor-pointer border-gray-400 border"
        }
      >
        <div onClick={scrollToTop}>
          <FaAngleUp size={40} className="opacity-50" />
        </div>
      </div>
    )
  )
}
