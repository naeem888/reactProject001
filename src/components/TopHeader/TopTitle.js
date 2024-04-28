import React, { Component } from 'react'
// import Container from 'react-bootstrap/Container';
import '../../resources/css/style.css'
import {Container, Row,Col} from 'react-bootstrap'


export default class TopTitle extends Component {
  render() {
    return (
            <Container fluid className='toptitle p-0'>
                <div className='toptitleoverlay'>
                    <Container className='Topcontent'>
                        <Row>
                            <Col className='text-center'>
                            <h1 className='text-white'>{this.props.title1}</h1>


                            </Col>

                        </Row>
                    </Container>

                </div>

            </Container>

  
            
    
    )
  }
}
