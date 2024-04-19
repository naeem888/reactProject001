import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import courseImg from '../../resources/images/ourCourse.JPG'

export default class OurCourses extends Component {
  render() {
    return (
      <Fragment>
        <Container className='coursesContainer'>
            <Row>
                <Col lg={3} md={3} sm ={12}>
                <Card.Img variant="top" src={courseImg} />
                </Col>

                <Col lg={3} md={3} sm ={12}>
                <h5>Web Developement</h5>
                <p> Some quick example text to build on the card title and make up the
                bulk of the card's content.</p>
                <Card.Link href="#">Details</Card.Link>
                </Col>
                <Col lg={3} md={3} sm ={12}>
                <Card.Img variant="top" src={courseImg} />
                </Col>

                <Col lg={3} md={3} sm ={12}>
                <h5>Web Developement</h5>
                <p> Some quick example text to build on the card title and make up the
                bulk of the card's content.</p>
                <Card.Link href="#">Details</Card.Link>
                </Col>


            </Row>

            <Row className='mt-3'>
            <Col lg={3} md={3} sm ={12}>
                <Card.Img variant="top" src={courseImg} />
                </Col>

                <Col lg={3} md={3} sm ={12}>
                <h5>Web Developement</h5>
                <p> Some quick example text to build on the card title and make up the
                bulk of the card's content.</p>
                <Card.Link href="#">Details</Card.Link>
                </Col>
                <Col lg={3} md={3} sm ={12}>
                <Card.Img variant="top" src={courseImg} />
                </Col>

                <Col lg={3} md={3} sm ={12}>
                <h5>Web Developement</h5>
                <p> Some quick example text to build on the card title and make up the
                bulk of the card's content.</p>
                <Card.Link href="#">Details</Card.Link>
                </Col>
            </Row>

        </Container>
      </Fragment>
    )
  }
}
