import React from "react"
import { Nav, BottomNav } from "../components/nav"
import Footer from "../components/footer"

const Layout = ({ location, title, children }) => {
  return (
    <body className="bg-gray-100 font-sans leading-normal tracking-normal">
      <Nav />

      <Main>{children}</Main>

      <Footer />
    </body>
  )
}

const Main = ({ children }) => {
  return (
    <main className="container w-full md:max-w-6xl mx-auto pt-20 px-2">
      {children}
    </main>
  )
}

export { Layout, Main }
