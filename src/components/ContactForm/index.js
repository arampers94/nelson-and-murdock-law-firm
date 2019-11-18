import React from 'react'
import { Row, Col, Form, FormInput, FormGroup, FormTextarea } from "shards-react"

const MyForm = () => {
  return (
    <Row id="contact" className="section">
      <Row className="section-title">
        <h1 className="title wow fadeIn">
          Contact Us
        </h1>
      </Row>
      <Row className="section-content">
        <Col xs="12" sm="8">
          <Form className="contact-form">
            <FormGroup>
              <Row>
                <label className="wow fadeInLeft" htmlFor="name" style={{ width: "100%", paddingLeft: "15px" }}>
                  Name *
                </label>
                <Col xs="12" md="6" className="contact-form-name">
                  <FormInput id="firstname" placeholder="First Name" className="wow fadeInLeft" />
                </Col>
                <Col xs="12" md="6">
                  <FormInput id="lastname" placeholder="Last Name" className="wow fadeInRight" />
                </Col>
              </Row>
            </FormGroup>
            <FormGroup>
              <label className="wow fadeInLeft" data-wow-delay=".25s" htmlFor="email">Email *</label>
              <FormInput className="wow fadeInLeft" data-wow-delay=".25s" type="email" id="email" placeholder="ex: johndoe@example.com" />
            </FormGroup>
            <FormGroup>
              <label className="wow fadeInLeft" data-wow-delay=".5s" htmlFor="phone">Phone Number *</label>
              <FormInput className="wow fadeInLeft" data-wow-delay=".5s" id="phone" placeholder="ex: 123 456-7890" />
            </FormGroup>
            <FormGroup>
              <label className="wow fadeInLeft" data-wow-delay=".75s" htmlFor="message">Message *</label>
              <FormTextarea className="wow fadeInLeft" data-wow-delay=".75s" id="message" placeholder="I need a consultation for..." />
            </FormGroup>
            <FormGroup className="wow fadeIn" data-wow-delay="1s">
              <label htmlFor="disclaimer" style={{ width: "100%" }}>
                Disclaimer *
              </label>
              <p style={{ fontSize: '10px' }}>
                Note: the use of this form for communication with the firm or any of its
                lawyers does not establish an attorney-client relationship.
              </p>
            </FormGroup>
          </Form>
        </Col>
        <Col xs="12" sm="4" style={{ paddingTop: "26px" }}>
          <Row className="wow zoomIn" data-wow-delay="1.25s">
            <div className="contact-block">
              <p className="contact-text contact-name">Franklin Nelson</p>
              <p className="contact-text">Williamsburg, 363 S 4th Street</p>
              <p className="contact-text">Brooklyn, NY, 12345</p>
              <p className="contact-text">By Appointment Only</p>
              <p className="contact-text">Phone: (123) 456-7890</p>
              <p className="contact-text">Email: franklin@nelsonmurdock.com</p>
            </div>
          </Row>
          <Row className="wow zoomIn" data-wow-delay="1.5s">
            <div className="contact-block">
              <p className="contact-text contact-name">Matthew Murdock</p>
              <p className="contact-text">Williamsburg, 363 S 4th Street</p>
              <p className="contact-text">Brooklyn, NY, 12345</p>
              <p className="contact-text">By Appointment Only</p>
              <p className="contact-text">Phone: (098) 765-4321</p>
              <p className="contact-text">Email: matthew@nelsonmurdock.com</p>
            </div>
          </Row>
        </Col>
      </Row>
    </Row>
  )
}

export default MyForm
