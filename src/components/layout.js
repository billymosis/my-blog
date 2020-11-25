import React from "react"
import { Nav } from "../components/nav"
import Footer from "../components/footer"
import { ThemeProvider } from "./themeContext"

const Layout = ({ children }) => {
  return (
    <ThemeProvider>
      <body className="bg-gray-100 font-sans leading-normal tracking-normal dark:text-white dark:bg-black transition duration-75 ease-in-out">
        <Nav />

        <Main>{children}</Main>

        <Footer />
      </body>
    </ThemeProvider>
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
