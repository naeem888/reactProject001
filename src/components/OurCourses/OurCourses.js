import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import courseImg from '../../resources/images/ourCourse.JPG'

export default class OurCourses extends Component {
  render() {
    return (
      <Fragment>
        <Container className='coursesContainer mt-5'>
          <h2 className='text-center mt-5'>OUR COURSES</h2>
            <Row className='mt-5'>
                <Col lg={3} md={3} sm ={12}>
                <Card.Img variant="top" src={courseImg} />
                </Col>

                <Col lg={3} md={3} sm ={12}>
                <h5>Web Developement</h5>
                <p> I build native and cross platform mobile app for your business app for your business</p>
                <Card.Link style={{ textDecoration: 'none' }}>Details</Card.Link>
                </Col>
                <Col lg={3} md={3} sm ={12}>
                <Card.Img variant="top" src={courseImg} />
                </Col>

                <Col lg={3} md={3} sm ={12}>
                <h5>Web Developement</h5>
                <p> I build native and cross platform mobile app for your business app for your business</p>
                <Card.Link style={{ textDecoration: 'none' }}>Details</Card.Link>
                </Col>


            </Row>

            <Row className='mt-3'>
            <Col lg={3} md={3} sm ={12}>
                <Card.Img variant="top" src={courseImg} />
                </Col>

                <Col lg={3} md={3} sm ={12}>
                <h5>Web Developement</h5>
                <p> I build native and cross platform mobile app for your business app for your business</p>
                <Card.Link style={{ textDecoration: 'none' }}>Details</Card.Link>
                </Col>
                <Col lg={3} md={3} sm ={12}>
                <Card.Img variant="top" src={courseImg} />
                </Col>

                <Col lg={3} md={3} sm ={12}>
                <h5>Web Developement</h5>
                <p> I build native and cross platform mobile app for your business app for your business</p>
                <Card.Link style={{ textDecoration: 'none' }}>Details</Card.Link>
                </Col>
            </Row>

        </Container>
      </Fragment>
    )
  }
}
