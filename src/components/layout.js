import React from "react"
import { Nav } from "../components/nav"
import Footer from "../components/footer"

const Layout = ({ children }) => {
  return (
    <body className="bg-gray-100 font-sans leading-normal tracking-normal dark:text-white dark:bg-black transition duration-500 ease-in-out">
      <Nav />

      <Main>{children}</Main>

      <Footer />
    </body>
  )
}

const Main = ({ children }) => {
  return (
    <main className="container w-full md:max-w-4xl mx-auto pt-20 px-2">
      {children}
    </main>
  )
}

export { Layout, Main }
