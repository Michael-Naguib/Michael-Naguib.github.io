import React, { useState } from 'react'
import { Alert, Button } from 'react-bootstrap'
import { HashLink as Link } from 'react-router-hash-link'

function PrivacyNotice() {
  const [show, setShow] = useState(true)
  return (
    <div style={{ width: '100%', position: 'fixed', zIndex: 100, bottom: '0' }}>
      <Alert show={show} variant="success">
        <Alert.Heading>Privacy Notice</Alert.Heading>
        <p>
          By Clicking Accept you agree to the cookie and{' '}
          <Link to={'/PrivatePolicy'}>private policy </Link>of this site. (Basically this lets me
          know how many people view my site )
        </p>

        <hr />
        <div className="d-flex justify-content-end">
          <Button
            style={{ marginRight: '8px' }}
            variant="outline-danger"
            onClick={() => {
              setShow(false)
              window.MichaelNaguibSiteData.privatePolicyAccepted = false
            }}
          >
            {' '}
            Decline
          </Button>
          <Button
            onClick={() => {
              setShow(false)
              window.policyAccepted = true
              window.MichaelNaguibSiteData.privatePolicyAccepted = true
              setTimeout(() => {
                //async
                console.log('Accepted Agreement')
                window.dataLayer = window.dataLayer || []
                function gtag() {
                  window.dataLayer.push(arguments)
                }
                gtag('js', new Date())
                gtag('config', window.MichaelNaguibSiteData.GA_MEASUREMENT_ID)
                window.MichaelNaguibSiteData.gtag = gtag
              }, 1)
              console.log('exitedFunc')
            }}
            variant="outline-success"
          >
            Accept
          </Button>
        </div>
      </Alert>
    </div>
  )
}

export default PrivacyNotice
