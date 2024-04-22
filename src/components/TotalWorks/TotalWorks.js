import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'
import { FaCircleCheck } from "react-icons/fa6";


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
                            <h4 className='countTitle'>TOTAL PROJECTS</h4>
                            <div className='underline'></div>

                            

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
                            <h4 className='countTitle'>TOTAL CLIENTS</h4>
                            <div className='underline'></div>


                            </Col>


                            <Col>
                            <Card >
                            <Card.Body>
                                <Card.Title>How I Work</Card.Title>
                                <Card.Text>
                                    <p> <FaCircleCheck className='check' />  Requirement Gathering</p>
                                    <p> <FaCircleCheck className='check' />  System Analysis</p>
                                    <p> <FaCircleCheck className='check' /> Coding Testing</p>
                                    <p> <FaCircleCheck className='check' /> Implementations</p>

                    
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
