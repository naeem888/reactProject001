import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import projectimg from '../../resources/images/cardMob.JPG'

export default class RecentProjectsDetails extends Component {
  render() {
    return (
      <Fragment>
        <Container className='projectContainer'>
          <h2 className='text-center mb-5'> RECENT PROJECTS</h2>
            <Row>
                <Col lg={4} md={4} sm={12}>
                <Card className='recentProject'>
                <img src={projectimg}></img>
                <Card.Body className='text-center'>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text className='text-center'>
                    Some quick example text to build on the card title and make 
                    </Card.Text>
                    <Button variant="primary">Details</Button>
                </Card.Body>
                </Card>

                </Col>

                <Col lg={4} md={4} sm={12}>
                <Card className='recentProject'>
                <img src={projectimg}></img>
                <Card.Body className='text-center'>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text className='text-center'>
                    Some quick example text to build on the card title and make 
                    </Card.Text>
                    <Button variant="primary">Details</Button>
                </Card.Body>
                </Card>
                </Col>


                <Col lg={4} md={4} sm={12} >
                <Card className='recentProject'>
                <img src={projectimg}></img>
                <Card.Body className='text-center'>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text className='text-center'>
                    Some quick example text to build on the card title and make
                    </Card.Text>
                    <Button variant="primary">Details</Button>
                </Card.Body>
                </Card>
                </Col>
            </Row>
            <Row className='mt-3'>
            <Col lg={4} md={4} sm={12}>
                <Card className='recentProject'>
                <img src={projectimg}></img>
                <Card.Body className='text-center'>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text className='text-center'>
                    Some quick example text to build on the card title and make
                    </Card.Text>
                    <Button variant="primary">Details</Button>
                </Card.Body>
                </Card>
                </Col>

            </Row>
        </Container>
        <div className='line'>

        </div>
      </Fragment>
    )
  }
}
