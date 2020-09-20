import React from "react"
import Bio from "./bio"
import { Link } from "gatsby"

import sideBarStyles from "./sidebar.module.css"

const Sidebar = () => {
  const linkedin =
    "M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"

  const twitter =
    "M25.312 6.375c-0.688 1-1.547 1.891-2.531 2.609 0.016 0.219 0.016 0.438 0.016 0.656 0 6.672-5.078 14.359-14.359 14.359-2.859 0-5.516-0.828-7.75-2.266 0.406 0.047 0.797 0.063 1.219 0.063 2.359 0 4.531-0.797 6.266-2.156-2.219-0.047-4.078-1.5-4.719-3.5 0.313 0.047 0.625 0.078 0.953 0.078 0.453 0 0.906-0.063 1.328-0.172-2.312-0.469-4.047-2.5-4.047-4.953v-0.063c0.672 0.375 1.453 0.609 2.281 0.641-1.359-0.906-2.25-2.453-2.25-4.203 0-0.938 0.25-1.797 0.688-2.547 2.484 3.062 6.219 5.063 10.406 5.281-0.078-0.375-0.125-0.766-0.125-1.156 0-2.781 2.25-5.047 5.047-5.047 1.453 0 2.766 0.609 3.687 1.594 1.141-0.219 2.234-0.641 3.203-1.219-0.375 1.172-1.172 2.156-2.219 2.781 1.016-0.109 2-0.391 2.906-0.781z"

  const email1 =
    "M10.688,95.156C80.958,154.667,204.26,259.365,240.5,292.01c4.865,4.406,10.083,6.646,15.5,6.646     c5.406,0,10.615-2.219,15.469-6.604c36.271-32.677,159.573-137.385,229.844-196.896c4.375-3.698,5.042-10.198,1.5-14.719     C494.625,69.99,482.417,64,469.333,64H42.667c-13.083,0-25.292,5.99-33.479,16.438C5.646,84.958,6.313,91.458,10.688,95.156z"

  const email2 =
    "M505.813,127.406c-3.781-1.76-8.229-1.146-11.375,1.542C416.51,195.01,317.052,279.688,285.76,307.885     c-17.563,15.854-41.938,15.854-59.542-0.021c-33.354-30.052-145.042-125-208.656-178.917c-3.167-2.688-7.625-3.281-11.375-1.542     C2.417,129.156,0,132.927,0,137.083v268.25C0,428.865,19.135,448,42.667,448h426.667C492.865,448,512,428.865,512,405.333     v-268.25C512,132.927,509.583,129.146,505.813,127.406z"

  return (
    <div className={sideBarStyles.sidebar}>
      <Bio />
      <nav>
        <ul>
          <li>
            <Link activeClassName={sideBarStyles.active} to={"/"}>
              My Post
            </Link>
          </li>
          <li>
            <Link activeClassName={sideBarStyles.active} to={"/about"}>About me</Link>
          </li>
          <li>
            <Link activeClassName={sideBarStyles.active} to={"/contact"}>Contact me</Link>
          </li>
        </ul>
      </nav>
      <div>
        <ul className={sideBarStyles.logocontainer}>
          <li className={sideBarStyles.logolist}>
            <a
              href="https://linkedin.com/in/billymosis"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg className={sideBarStyles.logoimg} viewBox="0 0 24 30">
                <title>linkedin</title>
                <path d={linkedin}></path>
              </svg>
            </a>
          </li>
          <li className={sideBarStyles.logolist}>
            <a
              href="mailto:edo.billy@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className={sideBarStyles.logoimg} viewBox="0 0 512 512">
                <title>email</title>
                <g>
                  <path d={email1} />
                  <path d={email2} />
                </g>
              </svg>
            </a>
          </li>
          <li className={sideBarStyles.logolist}>
            <a
              href="https://twitter.com/billymosis"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className={sideBarStyles.logoimg} viewBox="0 0 26 28">
                <title>twitter</title>
                <path d={twitter}></path>
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Sidebar
