import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

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
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          Spart
        </Link>
      </h1>
      <div style={{ flexGrow: 1 }}/>
      <div className="header-right">
        <a className="header-right-item" href="#">Pricing</a>
        <a className="header-right-item" href="#">Tutorials</a>
        <a className="header-right-item" href="#">About</a>
        <a className="header-right-item" href="#">App</a>
      </div>
    </div>
  </header>
)

export default Header
