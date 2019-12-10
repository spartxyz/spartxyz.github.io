import PropTypes from "prop-types"
import React from "react"

const PageIntro = ({ introTitle, introDescription }) => (
  <div className="intro-block" style={{
      maxWidth: '600px',
      textAlign: 'center'
    }}>
    <p className="intro-title" style={{ fontWeight: '600' }}>
      { introTitle }
    </p>
    <p className="intro-description">
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
