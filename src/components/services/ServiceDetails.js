
import React, { Component } from 'react';
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


export default class ServiceDetails extends Component {
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
      
    )
  }
}
