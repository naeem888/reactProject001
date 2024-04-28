
import React, { Component, Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import graphics from '../../resources/images/cardGraphics.JPG'
import web from '../../resources/images/cardweb.JPG'
import mobile from '../../resources/images/cardmob1.JPG'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


export default class ContactMe extends Component {
  render() {
    return (
        <Fragment>
        <Container className='Contact'>


        <Row>
          <Col lg={6} md={6} sm={12} className='mt-5'>
            <h4 className='text-black'> Quick Connect</h4>
            <Form>

            <h6> Name</h6>
            <InputGroup className="mb-3">
                       
              <InputGroup.Text id="basic-addon1"></InputGroup.Text>
              <Form.Control
                placeholder=""
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>


              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
  
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Your Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Button type="submit">Submit form</Button>



            </Form>

          </Col>

          <Col lg={6} md={6} sm={12} className='mt-5'>
            <h4 className='text-black'>Discuss Now</h4>
            <div className='mt-3'>

            <p>#79/6 Padma residential Area, 3rd Floor Front Side, Rajshahi</p>
            <p>email:eng.rabbil@yahoo.com</p>
            <p>Phone:+88013203393</p>
            </div>
        

          </Col>
        </Row>


      </Container>
      <div className='line'>

      </div>

      </Fragment>
    )
  }
}
