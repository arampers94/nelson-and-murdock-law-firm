import React from 'react'
import { Row } from 'shards-react'

const Footer = () => {
  const date = new Date().getFullYear()
  return (
    <Row className="section footer">
      <div className="footer-inner">
        <div className="site-info">
          <span>
            Nelson & Murdock, 123 W 48th Street, Hell's Kitchen, NY, United States
          </span>
          <br />
          <span>
            (444) 444-4444 info@nelsonmurdock.com
          </span>
        </div>
        <div className="footer-subtext">
          <span>
            Copyright © {date} All Rights Reserved.
          </span>
        </div>
      </div>
    </Row>
  )
}

export default Footer
