import PropTypes from "prop-types"
import React from "react"

import PrimaryButton from './primary-button'

const CallToAction = ({ text }) => (
  <div>
    <div className="call-to-action" style={{
        margin: '0 auto 0 auto',
        textAlign: 'center',
        padding: '72px 1.0875rem',
        width: '100%',
        position: 'absolute',
        left: 0,
        backgroundColor: '#1b1b1b',
        boxShadow: '0 48px 38px 0 rgba(0, 0, 0, 0.03)'
      }}>
      <p className="call-to-action-text" style={{
          fontSize: '28px',
          lineHeight: '48px',
          marginBottom: '24px',
          color: 'white',
          fontWeight: '600'
        }}>
        { text }
      </p>
      <PrimaryButton
        text="Let's begin!"
        location="https://www.spart.xyz"
      />
    </div>
    <div style={{ height: '236px' }}/>
  </div>

)


CallToAction.propTypes = {
  text: PropTypes.string,
}

CallToAction.defaultProps = {
  text: ``,
}


export default CallToAction
