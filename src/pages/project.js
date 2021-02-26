import React from "react"
import SEO from "../components/seo"
import { Layout } from "../components/layout"
import { FormattedMessage } from "react-intl"

export default function Project() {
  return (
    <Layout>
      <SEO title="Project" />
      <main>
        <article>
          <div className="h-screen flex flex-col justify-center">
            <h1 className="font-bold font-sans break-normal pb-2 text-3xl md:text-4xl">
              <FormattedMessage id="project.h" />
              <span aria-label="sad" role="img">
                😌
              </span>
            </h1>
            <p className="font-normal font-sans break-normal pt-6 pb-2 text-xl md:text-2xl">
              <FormattedMessage id="project.p" />
            </p>
          </div>
        </article>
      </main>
    </Layout>
  )
}
