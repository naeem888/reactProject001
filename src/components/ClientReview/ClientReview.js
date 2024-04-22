import React, { Component, Fragment } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Row, Col } from 'react-bootstrap';
import reviewimg from '../../resources/images/review.JPG'
import Slider from "react-slick";


export default class ClientReview extends Component {
  render() {
    var settings = {
        autoplayspeed:3000,
        autoplay:true,
        dots: true,
        infinite: true,
        speed: 3000,
        vertical:true,
        verticalSwiping: true,
        slidesToShow: 1,
        slidesToScroll:1,


        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return (
      <Fragment>
        <Container className='reviewContainer'>
            <Slider {...settings}> 
            <Row className='text-center'>
            <h3 className='mb-5 mt-5'> Client Says</h3>

                <Col>
                 <img className='imgcss' src={reviewimg} alt="" />
                 <h3 className='text-black'> Web Development</h3>
                 <p className='ms-5 me-5 text-center'>I design modern user interface and other graphical
                 components for your business and institution graphical comments for your business</p>
                </Col>
            </Row>

            <Row className='text-center'>
            <h3 className='mb-5 mt-5'> Client Says</h3>

                <Col>
                 <img className='imgcss' src={reviewimg} alt="" />
                 <h3 className='text-black'> Web Development</h3>
                 <p className='ms-5 me-5 text-center'>I design modern user interface and other graphical
                 components for your business and institution graphical comments for your business</p>
                </Col>
            </Row>
            <Row className='text-center'>
            <h3 className='mb-5 mt-5'> Client Says</h3>

                <Col>
                 <img className='imgcss' src={reviewimg} alt="" />
                 <h3 className='text-black'> Web Development</h3>
                 <p className='ms-5 me-5 text-center'>I design modern user interface and other graphical
                 components for your business and institution graphical comments for your business</p>
                </Col>
            </Row>





 



            </Slider>
        </Container>
        <div className='border mt-5'> </div>

      </Fragment>
    )
  }
}
