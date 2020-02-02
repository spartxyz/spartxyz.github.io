import { Link } from "gatsby"
import React from "react"

import SpartLogo from "./images/logo"
import Menu from './images/hamburger'

const Header = () => (
  <header
    style={{
      background: `#FFFFFF`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.15rem 1.0875rem`,
        display: 'flex'
      }}
    >
      <h1 className="logo-block">
        <Link
          to="/"
          title="home"
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
        <Link className="header-right-item" title="home" to="/">Home</Link>
        <Link className="header-right-item" title="pricing" to="/pricing/">Pricing</Link>
        <Link className="header-right-item" title="tutorials" to="/tutorials/">Tutorials</Link>
        <Link className="header-right-item" title="contact" to="/contact/">Contact</Link>
        <a className="header-right-item" title="spart-app" href="https://www.spart.xyz/"
          target="_blank" rel="noopener noreferrer">
          App
        </a>
      </div>
      <Link className="header-right-burger" to="/menu/" title="navigation">
        <Menu/>
      </Link>
    </div>
  </header>
)

export default Header
