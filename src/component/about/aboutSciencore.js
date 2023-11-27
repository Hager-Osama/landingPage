import React from 'react'
import device1 from '../../images/device1.png'
import line from '../../images/Line.png'
import { Container, Row } from 'react-bootstrap'
import "./style.css"
const About = () => {
  return (
    <Container>
    <Row>
    <div className='about d-flex justify-content-between '>
      <div className='image'>
        <img src={device1}
        width="100%"
        />
      </div>
      <div className='about-us' >
        <h1>Sciencore</h1>
        <img src={line} width="170"/>
        <h4>One place for all the medical equipment you need.</h4><br/>
        <p>"Since 2020, our focus has been on leading the way in the medical industry.
             We are dedicated to supplying the latest innovative technologies and tools
             to medical centers and doctors across Egypt, Saudi Arabia, and beyond."</p>
      </div>
    </div>
    </Row>
    </Container> 
  )
}

export default About
