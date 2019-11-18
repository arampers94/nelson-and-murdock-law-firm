import React from 'react'
import { Row, Col, Card, CardImg, CardTitle, CardBody, Button } from 'shards-react'
import Nelson from '../../assets/images/nelson.png'
import Murdock from '../../assets/images/murdock.png'

const Attorneys = () => {
  return (
    <Row id="attorneys" className="section" style={{ borderTop: "none" }}>
      <Row className="section-title">
        <h1 className="title wow fadeIn">Attorneys At Law</h1>
      </Row>
      <Row className="section-content">
        <Col xs="12" sm="6" className="attorney-block">
          <Card id="nelson" className="attorney-card wow fadeInLeft">
            <CardImg src={Nelson} className="attorney-image" />
            <CardBody>
              <CardTitle>Franklin "Foggy" Nelson</CardTitle>
              <em>District Attorney</em>
              <p style={{ fontWeight: 400 }}>
                "We are small, but awesome. And we're gonna make a difference.
                I know it doesn't feel like it sometimes... a lot of the time, but we are,
                with the power of the law on our side."
              </p>
              <Button outline theme="light" style={{ color: "whitesmoke" }}>Learn More</Button>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" sm="6" className="attorney-block">
          <Card id="murdock" className="attorney-card wow fadeInRight">
            <CardImg src={Murdock} className="attorney-image" />
            <CardBody>
              <CardTitle>Matthew Murdock</CardTitle>
              <em>Defense Attorney</em>
              <p style={{ fontWeight: 400 }}>
                "See, this right here in this office. This is what's important.
                Knowing that the people I care about are safe, and having some sense
                of closure for the ones we've lost."
              </p>
              <Button outline theme="light" style={{ color: "whitesmoke" }}>Learn More</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Row>
  )
}

export default Attorneys
