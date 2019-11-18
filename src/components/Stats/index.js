import React from 'react'
import { Row, Col, Card, CardTitle } from 'shards-react'

const Stats = () => {
  return (
    <Row id="statistics" className="section">
      <Row className="section-title">
        <h1 className="title wow fadeIn">
          Statistics
        </h1>
      </Row>
      <Row className="section-content">
        <Col xs="12" sm="4">
          <Card id="stat-1" className="stats-block wow fadeInUp">
            <CardTitle className="stat-title">
              150+
            </CardTitle>
            <p style={{ marginBottom: 0 }}>
              Trials & Arbitrations
            </p>
          </Card>
        </Col>
        <Col xs="12" sm="4">
          <Card id="stat-2" className="stats-block wow fadeInUp" data-wow-delay=".25s">
            <CardTitle className="stat-title">
              $10M+
            </CardTitle>
            <p style={{ marginBottom: 0 }}>
              Won for Plaintiffs
            </p>
          </Card>
        </Col>
        <Col xs="12" sm="4">
          <Card id="stat-3" className="stats-block wow fadeInUp" data-wow-delay=".5s">
            <CardTitle className="stat-title">
              96%
            </CardTitle>
            <p style={{ marginBottom: 0 }}>
              Trials & Arbitrations Won
            </p>
          </Card>
        </Col>
      </Row>
    </Row>
  )
}

export default Stats
