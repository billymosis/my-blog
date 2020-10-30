import React from "react"
import {
  FaTwitter as Twitter,
  FaGithub as GitHub,
  FaAt as At,
  FaLinkedin as In,
} from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-400 shadow">
      <div className="container max-w-4xl mx-auto flex py-8 ">
        <div className="w-full mx-auto flex flex-wrap">
          <div className="flex w-full md:w-1/2">
            <div className="px-8">
              <h3 className="font-bold text-gray-900">About</h3>
              <p className="py-4 text-gray-600 text-sm">
                Feel free to contact me.
                <br />© {new Date().getFullYear()} Billy,
                <br />
                Built with
                <a href="https://www.gatsbyjs.com"> Gatsby</a>
              </p>
            </div>
          </div>

          <div className="flex flex-wrap flex-row w-full md:w-1/2">
            <div className="px-8">
              <h3 className="font-bold text-gray-900 mb-4">Social</h3>
              <div class="grid grid-cols-4 md:grid-cols-2 gap-6">
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
