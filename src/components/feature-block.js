import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const FeatureBlock = ({ featureTitle, featureDescription }) => (
  <div className="feature-block">
    <div className="feature-text">
      <p className="feature-title">{ featureTitle }</p>
      <p className="feature-description">{ featureDescription }</p>
    </div>
    <div className="feature-graphic">
    </div>
  </div>
)


FeatureBlock.propTypes = {
  featureTitle: PropTypes.string,
  featureDescription: PropTypes.string
}

FeatureBlock.defaultProps = {
  featureTitle: ``,
  featureDescription: ``
}


export default FeatureBlock
