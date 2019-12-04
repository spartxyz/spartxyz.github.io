import PropTypes from "prop-types"
import React from "react"

const IntroBlock = ({ introTitle, introDescription }) => (
  <div className="main-intro-block">
    <p className="main-intro-title" style={{
        fontWeight: '600'
      }}>
      { introTitle }
    </p>
    <p className="main-intro-description">
      { introDescription }
    </p>
  </div>
)


IntroBlock.propTypes = {
  introTitle: PropTypes.string,
  introDescription: PropTypes.string
}

IntroBlock.defaultProps = {
  introTitle: ``,
  introDescription: ``
}


export default IntroBlock
