
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
                <h2 className='serviceHeader mb-5 text-center'> MY SERVICES</h2>
            </div>
        <Row>
          <Col className='p-3' sm={4}>
          <Card className='cardcol'>
            <div className='cardimg mt-5'>
              <img  src={web} alt="" />
            </div>
            
            
           
            <Card.Body className='mb-3 text-center'>
                <Card.Title>Web Development</Card.Title>
                <Card.Text>
                <p>
                I design and develop static and dynamic web sites as per your requirements as web
                believe, "web is world's next home"
                </p>
            

                </Card.Text>
             </Card.Body>
            </Card>
          </Col>

          <Col className='p-3' sm={4}>
          <Card className='cardcol'>
            <div className='cardimg mt-5'>
            <Card.Img variant="top" src={mobile} />
            

            </div>
            <Card.Body className='mb-3 text-center'>
                <Card.Title>Mobile Development</Card.Title>
                <Card.Text>
                  <p>
                  I build native and cross platform mobile app for your business and
                  and institution as pwer as your requirements.
                  </p>
             
                </Card.Text>
            </Card.Body>
            </Card>
          </Col>

          <Col className='p-3' sm={4}>
          <Card className='cardcol'>
            <div className='cardimg mt-5'>
            <Card.Img variant="top" src={graphics} />

            </div>
            <Card.Body className='mb-3 text-center'>
                <Card.Title>Graphics Design</Card.Title>
                <Card.Text >
                <p>
                I design modern user interface and other graphical components for your
                business and institution.
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
