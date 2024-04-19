import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

export default class Footer extends Component {
  render() {
    return (
      <Fragment>
        <Container className='footerContainer'>
            <Row>
                <Col lg={3} md={3} sm={12}>
                    <h5> Follow Me</h5>
                    <p className='logofooter mb-0'> <FaFacebook /> Facebook</p>
                    <p className='logofooter'> <FaYoutube /> YouTube</p>                 
                    
                </Col>

                <Col lg={3} md={3} sm={12}>
                    <h5> Address</h5>
                    <p> Dhaka keraniganj</p>

                </Col>

                <Col lg={3} md={3} sm={12}>
                    <h5 > information</h5>
                    <p className='mb-0'>About me</p>
                    <p className='mb-0'>My resume</p>
                    <p>Contact me</p>

                </Col>

                <Col lg={3} md={3} sm={12}>
                    <h5>Legal</h5>
                    <p className='mb-0'>Refund Policy</p>
                    <p className='mb-0'>Terms and Conditions</p>
                    <p className='mb-0'>Privacy Plicy</p>

                </Col>

            </Row>
        </Container>
        <div className='footerborder'></div>

      </Fragment>
    )
  }
}
