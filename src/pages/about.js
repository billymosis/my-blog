import React from "react"
import SEO from "../components/seo"
import { Layout } from "../components/layout"

export default function About() {
  return (
    <Layout>
      <SEO title="About" />
      <main>
        <article>
          <div className="h-screen flex flex-col justify-center">
            <h1 className="font-bold font-sans break-normal text-gray-900 pb-2 text-3xl md:text-4xl">
              Hello!<span role="img" aria-label="hand">👋</span>
            </h1>
            <h2 className="font-normal font-sans break-normal text-gray-900 pt-6 pb-2 text-xl md:text-2xl">
              Halo perkenalkan, saya Billy Mosis Priambodo. Saya menempuh
              pendidikan Water Resources Engineering, Teknik Pengairan di
              Universitas Brawijaya Malang. Engineering, IT, dan games adalah 3
              hal yang mungkin teman-teman saya pikir jika mengenal saya. Skill
              saya masih cupu. Belum ada research paper, product, talks, dan
              achievement. Jadi saya masih belum bisa pamer guys.
            </h2>
            <p>Sekian perkenalan dari saya.</p>
          </div>
        </article>
      </main>
    </Layout>
  )
}
