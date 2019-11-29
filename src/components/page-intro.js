import PropTypes from "prop-types"
import React from "react"

const PageIntro = ({ introTitle, introDescription }) => (
  <div className="intro-block" style={{
      margin: '60px auto 120px auto',
      width: '600px',
      textAlign: 'center'
    }}>
    <p className="intro-title" style={{
        fontSize: '32px',
        lineHeight: '48px',
        marginBottom: '28px'
      }}>
      { introTitle }
    </p>
    <p className="intro-description" style={{
        fontSize: '22px',
        lineHeight: '30px',
        marginBottom: '24px'
      }}>
      { introDescription }
    </p>
  </div>
)


PageIntro.propTypes = {
  introTitle: PropTypes.string,
  introDescription: PropTypes.string
}

PageIntro.defaultProps = {
  introTitle: ``,
  introDescription: ``
}


export default PageIntro
