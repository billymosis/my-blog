import React from "react"
import { Link } from "gatsby"

function Tags({ tag }) {
    return tag.map(tagx => {
      return (
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #{tagx}
        </span>
      )
    })
  }
  
export default function CardPost({ description, title, tag, link, date, className, Img }) {
    return (
      <div className={className}>
        <Link to={link} itemProp="url">
          <div className="grid lg:grid-cols-12 grid-cols-1">
            <div
              className="col-span-2 h-64 lg:h-64 bg-center bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
              style={{ backgroundImage: `url(${Img})` }}
              title={title}
            ></div>
            <div className="col-span-10 h-64 border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <p>
                <h1 className="text-gray-900 font-bold text-xl">{title}</h1>
                <small>{date}</small>
  
                <p className="text-gray-700 text-base overflow-hidden h-24">
                  {description}
                </p>
              </p>
              <div className="px-6 pt-4 pb-2 text-right">
                <Tags tag={tag} />
              </div>
            </div>
          </div>
        </Link>
      </div>
    )
  }