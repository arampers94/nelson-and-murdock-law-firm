import React from 'react'
import { Container, Row, Col } from 'shards-react'
import data from './Data'

import makeCarousel from 'react-reveal/makeCarousel'
import Slide from 'react-reveal/Slide'
import styled, { css } from 'styled-components'

const width = '100%', height = '300px'
const MyContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: ${width};
`

const Children = styled.div`
  width: ${width};
  position: relative;
  height: ${height};
`

const Dot = styled.span`
  font-size: 1em;
  cursor: pointer;
  text-shadow: 1px 1px 1px #fff;
  user-select: none;
`

const Dots = styled.span`
  text-align: center;
  width: ${width};
  z-index: 100;
`

const CarouselUI = ({ position, total, handleClick, children }) => (
  <div>
    <MyContainer style={{ width: '90vw', maxWidth: '550px' }}>
      <Children>
        {children}
      </Children>
      <div className="dots">
        <Dots>
          {Array(...Array(total)).map((val, index) =>
            <Dot key={index} onClick={handleClick} data-position={index}>
              {index === position ? '● ' : '○ '}
            </Dot>
          )}
        </Dots>
      </div>
    </MyContainer>
  </div>
)

const Carousel = makeCarousel(CarouselUI);

const Testimonials = () => {
  return (
    <Row id="testimonials" className="section">
      <Container>
        <Row>
          <Col xs="12" className="section-title">
            <h1 className="title wow fadeIn">Testimonials</h1>
          </Col>
          <Col xs="12">
            <p>Hear what our clients have to say about us</p>
          </Col>
          <Col xs="12" className="client-testimonials-wrapper">
            <div className="wow zoomIn">
              <Carousel>
                <Slide right>
                  <div>
                    <em className="testimonial">"{data[0].text}"</em>
                    <p>-{data[0].client}</p>
                  </div>
                </Slide>
                <Slide right>
                  <div>
                    <em className="testimonial">"{data[1].text}"</em>
                    <p>-{data[1].client}</p>
                  </div>
                </Slide>
                <Slide right>
                  <div>
                    <em className="testimonial">"{data[2].text}"</em>
                    <p>-{data[2].client}</p>
                  </div>
                </Slide>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </Row>
  )
}

export default Testimonials
