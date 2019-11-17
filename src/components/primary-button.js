import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const PrimaryButton = ({ text, location }) => (
  <a href={location} target="_blank" rel="noopener noreferrer" className="primary-button">
    { text }
  </a>
)


PrimaryButton.propTypes = {
  text: PropTypes.string,
  location: PropTypes.string
}

PrimaryButton.defaultProps = {
  text: ``,
  location: `#`
}


export default PrimaryButton
