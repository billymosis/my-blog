import React from "react"
import SEO from "../components/seo"
import { Layout } from "../components/layout"
import { FormattedMessage } from "react-intl"

export default function About() {
  return (
    <Layout>
      <SEO title="About" />
      <main>
        <article>
          <div className="h-screen flex flex-col justify-center relative">
            <h1 className="font-bold font-sans break-normal pb-2 text-3xl md:text-4xl">
              Hello!
              <span role="img" aria-label="hand">
                👋
              </span>
            </h1>
            <p className="font-normal font-sans break-normal pt-6 pb-2 text-xl md:text-2xl">
              <FormattedMessage id="about" />
            </p>
            <div className="absolute inset-x-0 bottom-0 h-16">
              <p>
                This blog powered with Gatsby.js, Tailwind CSS V2 and Netlify.
              </p>
              <p>
                Blog source code available at github{" "}
                <a
                  className="underline hover:no-underline"
                  href="https://github.com/billymosis/my-blog"
                >
                  https://github.com/billymosis/my-blog
                </a>
                {"."}
              </p>
            </div>
          </div>
        </article>
      </main>
    </Layout>
  )
}
