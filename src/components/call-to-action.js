import PropTypes from "prop-types"
import React from "react"

import PrimaryButton from './primary-button'

const CallToAction = ({ text }) => (
  <div className="call-to-action" style={{
      margin: '40px auto',
      textAlign: 'center',
      paddingBottom: '48px',
      paddingTop: '48px',
      width: '100vw',
      position: 'absolute',
      left: 0,
      backgroundColor: 'white'
    }}>
    <p className="call-to-action-text" style={{
        fontSize: '24px',
        marginBottom: '24px',
        color: '#1b1b1b'
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
