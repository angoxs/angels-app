import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Newsletter from "../components/Newsletter"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="hero">
      <div className="container">
        <h1>UX/UI Designer & Developer</h1>
        <p>
          My name is Ángel Vāzquez, creator of{" "}
          <strong>
            <a>@codenuggets</a>
          </strong>
          . I am a self-taught developer & designer that loves elegant and clean
          code, I'm always learning new skills and improving. <br />
          <code>codenuggets</code>
        </p>
        <br />
        <Newsletter />
      </div>
      <div className="image-container">
        <img src="https://cl.ly/3c4fa17c3cbc/download/Blocks.png" />
      </div>
    </div>
  </Layout>
)

export default IndexPage
