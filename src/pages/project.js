import React from "react"
import SEO from "../components/seo"
import { Layout } from "../components/layout"

export default function Project() {
  return (
    <Layout>
      <SEO title="Project" />
      <main>
        <article>
          <div className="h-screen flex flex-col justify-center">
            <h1 className="font-bold font-sans break-normal pb-2 text-3xl md:text-4xl">
              Kosong!<span aria-label="sad" role="img">😌</span>
            </h1>
            <h2 className="font-normal font-sans break-normal pt-6 pb-2 text-xl md:text-2xl">
              Disini nanti saya bakal post tentang side project saya.
            </h2>
            <p>Tunggu dulu.</p>
          </div>
        </article>
      </main>
    </Layout>
  )
}
