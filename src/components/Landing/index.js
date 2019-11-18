import React from 'react'
import { Container, Row, Col, Button } from 'shards-react'
import MyNavbar from '../MyNavbar'

const Landing = () => {
  return (
    <Row className="section section-landing" style={{ borderTop: "none" }}>
      <div className="landing">
        <div className="overlay"></div>
        <Container className="landing-text-wrapper">
          <MyNavbar />
          <Row className="landing-text">
            <Col sm="6" className="landing-left-col" style={{ width: "100%" }}></Col>
            <Col xs="12" sm="6" style={{ transform: "translateY(-68px)" }}>
              <div className="title-text wow fadeInRight" data-wow-delay=".5s">
                <h3 style={{ color: "#dedede", fontWeight: 100 }}>
                  Don't Wait For Opportunity.
                </h3>
              </div>
              <div className="title-text wow fadeInRight" data-wow-delay="1s">
                <h1 id="create-it">
                  CREATE IT.
                </h1>
              </div>
              <div className="title-text">
                <p style={{ color: "#dedede", fontWeight: 100 }} className="wow fadeInRight" data-wow-delay="1.5s">
                  Are you being hunted by a secret criminal organization that operates in broad
                  daylight, controls large corporations and has deep roots in the city? Have they
                  recently threatened you with violence? Are they holding a family member captive?
                  We can help.
                </p>
                <br />
                <Button theme="warning" outline className="wow fadeInRight" data-wow-delay="2s">
                  Get Started
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Row>
  )
}

export default Landing
