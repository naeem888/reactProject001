import React, { Component, Fragment } from 'react'
import { Container,Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap/';
import { FaCirclePlay } from "react-icons/fa6";

export default class VideoPlay extends Component {
  render() {
    return (
      <Fragment>
        <Container className='playContainer'>
            <Row className='text-center'>
                <Col lg={12} md={12} sm={12} className='videocard'>
                    <h5> How I work </h5>
                    <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                     Nostrum ipsum enim atque molestias aut provident suscipit earum voluptates
                     est velit quod mollitia odio illum Lorem ipsum dolor sit amet consectetur 
                     adipisicing elit. Beatae est inventore id expedita. Qui minima voluptas impedit 
                     odit, fugiat quod repudiandae nisi autem. At beatae nostrum voluptatem rem ad?
                     tempora deleniti, laborum harum ipsam?</p>
                     <p className='text-center'> <FaCirclePlay className='playbutton'/></p>
                     


                </Col>

            </Row>

        </Container>
      </Fragment>
    )
  }
}
