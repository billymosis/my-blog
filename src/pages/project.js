import { Link, graphql } from "gatsby"
import React from "react"
import SEO from "../components/seo"
import { Layout } from "../components/layout"
import CardPost from "../components/cardpost"

export default function Project({}) {
  return (
    <Layout>
      <SEO title="Project" />
      <main>
        <article>
          <div className="h-screen flex flex-col justify-center">
            <h1 className="font-bold font-sans break-normal text-gray-900 pb-2 text-3xl md:text-4xl">
              Kosong!😌
            </h1>
            <h2 className="font-normal font-sans break-normal text-gray-900 pt-6 pb-2 text-xl md:text-2xl">
                Disini nanti saya bakal post tentang side project saya.
            </h2>
            <p>Tunggu dulu.</p>
          </div>
        </article>
      </main>
    </Layout>
  )
}
