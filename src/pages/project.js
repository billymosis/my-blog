import React from "react"
import SEO from "../components/seo"
import { Layout } from "../components/layout"
import LocalizedLink from "../components/Local"

export default function Project() {
  return (
    <Layout>
      <SEO title="Project" />
      <article className="prose dark:prose-dark" style={{ padding: '220px 0px' }}>
        <div className="h-screen flex flex-col justify-center">
          <h1 className="font-bold font-sans break-normal pb-2 text-3xl md:text-4xl">
            Projects Portofolio
            </h1>
          <h3 className="flex justify-between items-center">
            <span>Company Website</span>
            <a href="https://www.langgengupvc.com/">LANGGENG UPVC | Solusi Pintu dan Jendela</a>
          </h3>
          <ul>
            <li>Build a website for windows and doors manufacturing companies in Malang.</li>
            <li>Frameworkless, Using web components API.</li>
            <li>Solely managed Hosting, SEO, and web design. </li>
            <li>Using Tailwind as CSS Framework.</li>
          </ul>
          <h3 className="flex justify-between items-center">
            <span>Point Of Sale Application</span>
            <a href="https://github.com/billymosis/Flutter-Simple-POS">billymosis/Flutter-Simple-POS</a>
          </h3>
          <ul>
            <li>Develop a Point Of Sale Application to help my family business do the transaction. Flutter framework used to develop applications on multi platform.</li>
            <li>Using a local SQlite embedded database for mobile applications.</li>
            <li>Able to track the transactions, income, outcome based on specific date.</li>
          </ul>
          <h3 className="flex justify-between items-center">
            <span>Long, Cross, Plan</span>
            <a href="https://github.com/billymosis/Long-Cross">billymosis/Long-Cross</a>
          </h3>
          <ul>
            <li>Develop an Autocad plugin using .NET. This program was created to solve issues with long drawing time that needs man resources and to prevent human error.</li>
            <li>Produce drawing long, cross, plan automatically from topographic survey data.</li>
            <li>Full Object Oriented Programming using C#.</li>
            <li>
              <LocalizedLink to={"/blog/"} activeClassName="font-bold">
                More...
              </LocalizedLink>
            </li>
          </ul>
          <h3 className="flex justify-between items-center">
            <span>Personal Library / Toolbox</span>
            <a href="https://github.com/billymosis/My-Script">billymosis/My-Script</a>
          </h3>
          <ul>
            <li>My own swiss knife army to solve repetitive work that I encounter.</li>
            <li>Various Excel macro.</li>
            <li>QGIS python script.</li>
          </ul>
        </div>
      </article>
    </Layout>
  )
}
