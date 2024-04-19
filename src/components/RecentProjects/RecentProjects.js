import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import projectimg from '../../resources/images/cardMob.JPG'

export default class recentProjects extends Component {
  render() {
    return (
      <Fragment>
        <Container className='projectContainer'>
            <Row>
                <Col lg={4} md={4} sm={12}>
                <Card>
                <img src={projectimg}></img>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>

                </Col>

                <Col lg={4} md={4} sm={12}>
                <Card>
                <img src={projectimg}></img>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
                </Col>


                <Col lg={4} md={4} sm={12}>
                <Card>
                <img src={projectimg}></img>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}
