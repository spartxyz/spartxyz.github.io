import PropTypes from "prop-types"
import React from "react"

const IntroBlock = ({ introTitle, introDescription }) => (
  <div className="main-intro-block">
    <h1 className="main-intro-title" style={{
        fontWeight: '500'
      }}>
      { introTitle }
    </h1>
    <h2 className="main-intro-description">
      { introDescription }
    </h2>
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
