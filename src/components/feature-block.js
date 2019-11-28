import PropTypes from "prop-types"
import React from "react"

const FeatureBlock = ({ featureTitle, featureDescription, imageRight, image }) => (
  <div className="feature-block" style={{
      padding: '20px',
      margin: '100px 0'
    }}>
    {imageRight ? (
      <span/>
    ) : (
      <div style={{ display: 'inline-block', width: '50%' }}>
        <div className="feature-graphic" style={{
            width: '80%',
            display: 'inline-block',
            maxWidth: '800px'
          }}>
          { image }
        </div>
        <div style={{ width: '20%', display: 'inline-block' }}/>
      </div>
    )}
    <div className="feature-text" style={{
        width: '50%',
        display: 'inline-block',
        verticalAlign: 'top'
      }}>
      <p className="feature-title" style={{
          fontSize: '28px',
          marginBottom: '24px'
        }}>
        { featureTitle }
      </p>
      <p className="feature-description" style={{
          fontSize: '22px',
          lineHeight: '32px'
        }}>
        { featureDescription }
      </p>
    </div>
    {imageRight ? (
      <div style={{ display: 'inline-block', width: '50%' }}>
        <div style={{ width: '20%', display: 'inline-block' }}/>
        <div className="feature-graphic" style={{
            width: '80%',
            display: 'inline-block',
            maxWidth: '800px'
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
