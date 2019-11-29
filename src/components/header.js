import { Link } from "gatsby"
import React from "react"

import SpartLogo from "./spartlogo"

const Header = () => (
  <header
    style={{
      background: `#FAFAFA`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: 'flex'
      }}
    >
      <h1 style={{ margin: 0, width: '90px' }}>
        <Link
          to="/"
          style={{
            color: `black`,
            display: 'block',
            textDecoration: `none`,
            maxHeight: '50px'
          }}
        >
          <SpartLogo/>
        </Link>
      </h1>
      <div style={{ flexGrow: 1 }}/>
      <div className="header-right">
        <Link className="header-right-item" to="/pricing/">Pricing</Link>
        <Link className="header-right-item" to="/tutorials/">Tutorials</Link>
        <a className="header-right-item" href="https://www.spart.xyz/"
          target="_blank" rel="noopener noreferrer">
          App
        </a>
      </div>
    </div>
  </header>
)

export default Header
