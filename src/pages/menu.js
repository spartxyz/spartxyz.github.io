import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Menu = () => (
  <Layout>
    <SEO title="Menu" />
    <div className="header-right-page">
      <Link className="header-right-item" to="/">Home</Link>
      <Link className="header-right-item" to="/pricing/">Pricing</Link>
      <Link className="header-right-item" to="/tutorials/">Tutorials</Link>
      <Link className="header-right-item" to="/contact/">Contact</Link>
      <a className="header-right-item" href="https://www.spart.xyz/"
        target="_blank" rel="noopener noreferrer">
        App
      </a>
    </div>
  </Layout>
)

export default Menu
