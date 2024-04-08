
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import graphics from '../../src/resources/images/graphics.jpeg'
import web from '../../src/resources/images/web.jpeg'
import mobile from '../../src/resources/images/mobile.jpeg'

export default class Services extends Component {
  render() {
    return (
        <Container fluid>
            <div className='serviceHeader'>
                <h1> MY SERVICES</h1>
            </div>
        <Row>
          <Col className='p-3' sm={4}>
          <Card>
            
            <Card.Img className='image' variant="top" src={graphics} />
            
           
            <Card.Body>
                <Card.Title>Web Development</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
          </Col>
          <Col className='p-3' sm={4}>
          <Card>
            <Card.Img className='image' variant="top" src={mobile} />
            <Card.Body>
                <Card.Title>Web Development</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
          </Col>
          <Col className='p-3' sm={4}>
          <Card>
            <Card.Img className='image' variant="top" src={web} />
            <Card.Body>
                <Card.Title>Web Development</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
          </Col>


        </Row>
        <Container fluid>
        <hr />

        </Container>

      </Container>
      
    )
  }
}
