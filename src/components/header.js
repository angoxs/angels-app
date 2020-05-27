import React from "react"
import header from "../components/header.css"

const images = {
  darkMode: "https://cl.ly/37c5890a01cb/download/award.png",
  Twitter: "https://cl.ly/b119ce2a6a8b/download/Twitter.png",
}

class Header extends React.Component {
  render() {
    return (
      <div className="header-container">
        <div className="header-group">
          <p>Ángel Vāzquez</p>

          <a href="https://twitter.com/angelVZUR">
            <button>
              <img src={images.Twitter} width="18px" />
              <span>Twitter</span>
            </button>
          </a>
        </div>
      </div>
    )
  }
}

export default Header
