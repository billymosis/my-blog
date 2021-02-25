import React from "react"
import {
  FaTwitter as Twitter,
  FaGithub as GitHub,
  FaAt as At,
  FaLinkedin as In,
} from "react-icons/fa"
import { FormattedMessage } from "react-intl"

export default function Footer() {
  return (
    <footer className="bg-white border-gray-400 dark:bg-gray-900 border-t shadow">
      <div className="container max-w-4xl mx-auto flex py-8 ">
        <div className="w-full mx-auto flex flex-wrap">
          <div className="flex w-full md:w-1/2 pb-2">
            <div className="px-8">
              <h3 className="font-bold ">Billy's Blog</h3>
              <p className=" text-gray-600 text-sm">
                <br />© {new Date().getFullYear()} Billy Mosis, {" "}
                <FormattedMessage id="index.made" />{" "}
                <a className="underline" href="https://www.gatsbyjs.com">
                  Gatsby
                </a>
              </p>
            </div>
          </div>

          <div className="flex flex-wrap flex-row w-full md:w-1/2">
            <div className="px-8">
              <h3 className="font-bold mb-4">
                <FormattedMessage id="index.social" />
              </h3>
              <div class="grid grid-cols-4 gap-6">
                <a href="https://twitter.com/billymosis" title="Twitter">
                  <Twitter size={24} />
                </a>
                <a href="https://github.com/billymosis" title="GitHub">
                  <GitHub size={24} />
                </a>
                <a href="mailto:edo.billy@gmail.com" title="Email">
                  <At size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/billymosis/"
                  title="Linked In"
                >
                  <In size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
