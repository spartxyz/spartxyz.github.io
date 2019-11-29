import PropTypes from "prop-types"
import React from "react"

const FAQ = ({ introTitle, introDescription }) => (
  <div className="intro-block" style={{
      margin: '40px auto 20px auto',
      width: '800px',
    }}>
    <p className="intro-title" style={{
        fontSize: '22px',
        lineHeight: '28px',
        marginBottom: '12px'
      }}>
      { introTitle }
    </p>
    <p className="intro-description" style={{
        fontSize: '18px',
        lineHeight: '24px',
      }}>
      { introDescription }
    </p>
  </div>
)


FAQ.propTypes = {
  introTitle: PropTypes.string,
  introDescription: PropTypes.string
}

FAQ.defaultProps = {
  introTitle: ``,
  introDescription: ``
}


export default FAQ
