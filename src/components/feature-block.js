import PropTypes from "prop-types"
import React from "react"

const FeatureBlock = ({ featureTitle, featureDescription, imageRight }) => (
  <div className="feature-block" style={{
      padding: '20px',
      margin: '80px 0'
    }}>
    <div className="feature-graphic" style={{
        width: '50%',
        display: 'inline-block',
        float: imageRight ? 'right' : 'none'
      }}>
    </div>
    <div className="feature-text" style={{
        width: '50%',
        display: 'inline-block'
      }}>
      <p className="feature-title" style={{
          fontSize: '28px',
          marginBottom: '24px'
        }}>
        { featureTitle }
      </p>
      <p className="feature-description" style={{
          fontSize: '22px',
          lineHeight: '30px'
        }}>
        { featureDescription }
      </p>
    </div>
  </div>
)


FeatureBlock.propTypes = {
  featureTitle: PropTypes.string,
  featureDescription: PropTypes.string,
  imageRight: PropTypes.bool
}

FeatureBlock.defaultProps = {
  featureTitle: ``,
  featureDescription: ``,
  imageRight: false
}


export default FeatureBlock
