import React, { useEffect, useState } from "react"
import { Nav } from "../components/nav"
import Footer from "../components/footer"
import { ThemeProvider } from "./themeContext"
import { IntlProvider } from "react-intl"
import English from "../lang/en.json"
import Indonesia from "../lang/id.json"
import { navigate } from "gatsby"

export const Context = React.createContext()
const local = localStorage["locale"]
let lang
if (local === "id") {
  lang = Indonesia
} else {
  lang = English
}
const Layout = ({ children }) => {
  const [locale, setLocale] = useState(local)

  const [messages, setMessages] = useState(lang)

  function selectLanguage(e) {
    const newLocale = e
    setLocale(newLocale)
    if (newLocale === "id") {
      navigate("/")
      localStorage.setItem("locale", "id")
      setMessages(Indonesia)
    } else {
      navigate("/en/")
      localStorage.setItem("locale", "en")
      setMessages(English)
    }
  }

  return (
    <Context.Provider value={{ locale, selectLanguage }}>
      <IntlProvider locale={locale} messages={messages}>
        <ThemeProvider>
          <body className="bg-gray-100 font-sans leading-normal tracking-normal dark:text-white dark:bg-black transition duration-75 ease-in-out">
            <Nav />

            <Main>{children}</Main>

            <Footer />
          </body>
        </ThemeProvider>
      </IntlProvider>
    </Context.Provider>
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
