import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import PrimaryButton from './primary-button'

const CallToAction = ({ text }) => (
  <div className="call-to-action" style={{
      margin: 'auto',
      textAlign: 'center',
      paddingBottom: '36px',
      paddingTop: '36px'
    }}>
    <p className="call-to-action-text" style={{
        fontSize: '24px',
        marginBottom: '12px'
      }}>
      { text }
    </p>
    <PrimaryButton
      text="App"
      location="https://www.spart.xyz"
    />
  </div>
)


CallToAction.propTypes = {
  text: PropTypes.string,
}

CallToAction.defaultProps = {
  text: ``,
}


export default CallToAction
