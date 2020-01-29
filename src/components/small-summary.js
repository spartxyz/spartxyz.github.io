import PropTypes from "prop-types"
import React from "react"

const FAQ = ({ introTitle, introDescription }) => (
  <div className="intro-block" style={{
      margin: '40px auto 20px auto',
      maxWidth: '800px',
    }}>
    <p className="intro-title" style={{
        fontSize: '26px',
        lineHeight: '36px',
        marginBottom: '12px',
        fontWeight: '600'
      }}>
      { introTitle }
    </p>
    <p className="intro-description" style={{
        fontSize: '22px',
        lineHeight: '28px',
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
