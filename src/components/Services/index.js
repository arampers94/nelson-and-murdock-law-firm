import React from 'react'
import { Row, Col, CardTitle } from 'shards-react'

const Services = () => {
  return (
    <Row id="services" className="section">
      <Row className="section-title">
        <h1 className="title wow fadeIn">Services</h1>
      </Row>
      <Row className="section-content">
        <Col xs="12" sm="4" className="service-block wow zoomIn">
          <CardTitle>Business Law Consultations</CardTitle>
          <p>
            We offer fixed-fee legal consultations. Starting a business?
            Need independent legal advice? Want your draft agreements reviewed?
            We can help. These consultations generally take 1 to 2 hours and can
            be booked in-person, by phone, or by video conference.
          </p>
          <em>
            Cost: $200
          </em>
        </Col>
        <Col xs="12" sm="4" className="service-block wow zoomIn" data-wow-delay=".25s">
          <CardTitle>Commercial Agreements</CardTitle>
          <p>
            We work primarily with service-based enterprises such as engineers,
            software developers, consultants, marketing agencies, and health professionals.
            Our work focuses on negotiating and drafting services agreements, website policies,
            and license agreements.
          </p>
          <em>
            Cost: $150/hour
          </em>
        </Col>
        <Col xs="12" sm="4" className="service-block wow zoomIn" data-wow-delay=".5s">
          <CardTitle>Information Security Law</CardTitle>
          <p>
            We work with organizations on privacy law matters, including regulatory compliance and
            data breach response. These services can be either proactive or reactive. Our advice
            follows PIPEDA, PIPA, GDPR, and anti-spam regulations (CASL) requirements.
          </p>
          <em>
            Cost: $150/hour
          </em>
        </Col>
      </Row>
    </Row>
  )
}

export default Services
