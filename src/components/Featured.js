import React from "react"
import featured from "../components/featured.css"

const Featured = props => (
  <div className="featured-container">
    <div className="featured-group">
      <div className="media-container">
        <img src="https://cl.ly/9f5d219dc441/download/Kapture%2525202020-05-26%252520at%2525209.18.24.gif" />
      </div>
      <div className="title-container">
        <h2>Apps I have done.</h2>
        <p>Todo app with search bar and persistent data</p>
        <a href="https://apps.apple.com/us/app/got-it/id1509864659">
          <button>
            <img
              src="https://cl.ly/d4e04d580273/download/arrow-down.png"
              width="18px"
            />
            <p>App Store</p>
          </button>
        </a>
        <span>Download on App Store</span>
      </div>
    </div>
  </div>
)

export default Featured
