import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const IntroBlock = ({ introTitle, introDescription }) => (
  <div className="intro-block" style={{
      marginTop: '60px',
      marginBottom: '120px'
    }}>
    <p className="intro-title" style={{
        fontSize: '60px',
        lineHeight: '60px',
        marginBottom: '36px'
      }}>
      { introTitle }
    </p>
    <p className="intro-description" style={{
        fontSize: '36px',
        lineHeight: '36px',
        marginBottom: '24px'
      }}>
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
