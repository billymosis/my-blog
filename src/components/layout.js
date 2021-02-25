import React, { useEffect, useState } from "react"
import { Nav } from "../components/nav"
import Footer from "../components/footer"
import { ThemeProvider } from "./themeContext"
import { IntlProvider } from "react-intl"
import English from "../lang/en.json"
import Indonesia from "../lang/id.json"
import { navigate } from "gatsby"

export const Context = React.createContext()

const getInitialLocale = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem("locale")
    if (typeof storedPrefs === "string") {
      return storedPrefs
    } else {
      if (navigator.language != 'id'){
        setStorageLocale("locale", 'en')
        return 'en'
      } else{
        setStorageLocale("locale", 'id')
        return 'id'
      }
    }
  } else {

  }
}

const setStorageLocale = (key, value) => {
  if (typeof window !== "undefined" && window.localStorage) {
    window.localStorage.setItem(key, value)
  }
}

const Layout = ({ children }) => {
  const [locale, setLocale] = useState(getInitialLocale())
  const [messages, setMessages] = useState(locale == "id" ? Indonesia : English)

  function selectLanguage(e) {
    const newLocale = e
    setLocale(newLocale)
    if (newLocale === "id") {
      setMessages(Indonesia)
      navigate("/")
      setStorageLocale("locale", "id")
    } else {
      setMessages(English)
      navigate("/en/")
      setStorageLocale("locale", "en")
    }
  }

  return (
    <ThemeProvider>
      <body className="bg-gray-100 font-sans leading-normal tracking-normal dark:text-white dark:bg-black transition duration-75 ease-in-out">
        <Context.Provider value={{ locale, selectLanguage }}>
          <IntlProvider key={locale} locale={locale} messages={messages}>
            <Nav />

            <Main>{children}</Main>

            <Footer />
          </IntlProvider>
        </Context.Provider>
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
