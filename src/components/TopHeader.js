import React, { Component } from 'react'
// import Container from 'react-bootstrap/Container';
import '../resources/css/style.css'
import {Container, Row,Col} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';


export default class TopHeader extends Component {
  render() {
    return (
            <Container fluid className='topheader p-0'>
                <div className='topoverlay'>
                    <Container className='Topcontent'>
                        <Row>
                            <Col className='text-center'>
                            <h1>Grow your Business</h1>
                            <h4> share ideas with us and make money</h4>
                            <Button variant="primary" className='text-center btn'>More info</Button>{' '}


                            </Col>

                        </Row>
                    </Container>

                </div>

            </Container>

  
            
    
    )
  }
}
