import PropTypes from "prop-types"
import React from "react"

const FeatureBlock = ({ featureTitle, featureDescription, imageRight, image }) => (
  <div className="feature-block" style={{
      padding: '20px'
    }}>
    {imageRight ? (
      <span/>
    ) : (
      <div className="feature-graphic-container"
        style={{ width: '50%' }}>
        <div className="feature-graphic" style={{
            width: '80%',
            maxWidth: '400px'
          }}>
          { image }
        </div>
        <div style={{ width: '20%', display: 'inline-block' }}/>
      </div>
    )}
    <div className="feature-text" style={{
        width: '50%',
        display: 'inline-block'
      }}>
      <p className="feature-title" style={{
          fontSize: '36px',
          fontWeight: '600',
          marginBottom: '24px'
        }}>
        { featureTitle }
      </p>
      <p className="feature-description" style={{
          fontSize: '26px',
          lineHeight: '42px'
        }}>
        { featureDescription }
      </p>
    </div>
    {imageRight ? (
      <div className="feature-graphic-container"
        style={{ width: '50%' }}>
        <div style={{ width: '20%', display: 'inline-block' }}/>
        <div className="feature-graphic" style={{
            width: '80%',
            maxWidth: '400px'
          }}>
          { image }
        </div>
      </div>
    ) : (
      <span/>
    )}
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
