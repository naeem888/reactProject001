
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import graphics from '../../resources/images/cardGraphics.JPG'
import web from '../../resources/images/cardweb.JPG'
import mobile from '../../resources/images/cardmob1.JPG'

export default class Services extends Component {
  render() {
    return (
        <Container className='containerWidthService'>
            <div className='serviceHeader '>
                <h4 className='serviceHeader'> MY SERVICES</h4>
            </div>
        <Row>
          <Col className='p-3 cardcol' sm={4}>
          <Card>
            <div className='cardimg mt-5'>
              <img  src={web} alt="" />
            {/* <Card.Img variant="top" src={graphics} /> */}
            </div>
            
            
           
            <Card.Body className='mb-3'>
                <Card.Title>Web Development</Card.Title>
                <Card.Text>
                <p>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </p>
            

                </Card.Text>
             </Card.Body>
            </Card>
          </Col>

          <Col className='p-3 cardcol' sm={4}>
          <Card>
            <div className='cardimg mt-5'>
            <Card.Img variant="top" src={mobile} />
            

            </div>
            <Card.Body className='mb-3'>
                <Card.Title>Mobile Development</Card.Title>
                <Card.Text>
                  <p>
                  Some quick example text to build on the card title and make up the
                bulk of the card's content.
                  </p>
             
                </Card.Text>
            </Card.Body>
            </Card>
          </Col>

          <Col className='p-3 cardcol' sm={4}>
          <Card>
            <div className='cardimg mt-5'>
            <Card.Img variant="top" src={graphics} />

            </div>
            <Card.Body className='mb-3'>
                <Card.Title>Graphics Design</Card.Title>
                <Card.Text >
                <p>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </p>
                </Card.Text>

            </Card.Body>
            </Card>
          </Col>


        </Row>


      </Container>
      
    )
  }
}
