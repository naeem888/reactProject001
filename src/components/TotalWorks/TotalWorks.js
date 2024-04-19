import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'
import {BsArrowUpCircle} from "react-icons/bs"

export default class TotalWorks extends Component {
  render() {
    return (
            <Container fluid className='TotalWork p-0'>
                <div className='TotalWorkOverlay'>
                    <Container>
                        <Row className='countsection'>
                            <Col>
                            <h1 className='countNumber'> <CountUp start={0} end={100}>
                            {({ countUpRef, start }) => (
                                <div>
                                    <VisibilitySensor onChange={start}>
                                    <span ref={countUpRef} />


                                    </VisibilitySensor>
                                </div>
                            )}
                            </CountUp> 
                            </h1>
                            <h4 className='countTitle'>total project</h4>
                            </Col>

                            <Col>
                            <h1 className='countNumber'> 
                            <CountUp start={0} end={300}>
                            {({ countUpRef, start }) => (
                                <div>
                                    <VisibilitySensor onChange={start}>
                                    <span ref={countUpRef} />


                                    </VisibilitySensor>
                                </div>
                            )}
                            </CountUp>
                             </h1>
                            <h4 className='countTitle'>total Clients</h4>
                            </Col>

                            <Col>
                            <Card >
                            <Card.Body>
                                <Card.Title>How I Work</Card.Title>
                                <Card.Text>
                                    <p><BsArrowUpCircle className='arrow'/> Requirement gathering</p>
                                    <p><BsArrowUpCircle className='arrow'/> System analysis</p>
                                    <p><BsArrowUpCircle className='arrow'/> Coding testing</p>
                                    <p><BsArrowUpCircle className='arrow'/> Implementations</p>

                    
                                </Card.Text>
                            </Card.Body>
                            </Card>
                            </Col>
                        </Row>

                    </Container>

                </div>

            </Container>

    )
  }
}
