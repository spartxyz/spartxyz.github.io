import PropTypes from "prop-types"
import React from "react"

const IntroBlock = ({ introTitle, introDescription }) => (
  <div className="intro-block" style={{
      marginTop: '80px',
      marginBottom: '160px',
      paddingRight: '20%'
    }}>
    <p className="intro-title" style={{
        fontSize: '60px',
        lineHeight: '80px',
        marginBottom: '36px'
      }}>
      { introTitle }
    </p>
    <p className="intro-description" style={{
        fontSize: '32px',
        lineHeight: '42px',
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
