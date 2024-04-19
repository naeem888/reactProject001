import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import  {Bar, BarChart, XAxis } from 'recharts';


class Chart extends Component{

        constructor(){
        super();
        this.state={
            data:[
                {Technology:'java', 'project':100},
                {Technology:'kotlin', 'project':60},
                {Technology:'sql', 'project':90},
                {Technology:'jquerry', 'project':40},
                {Technology:'react', 'project':70},
                {Technology:'php', 'project':30},
                {Technology:'angular', 'project':80}

            ]

        }
        
    }


    render(){
        return(
            <Container className='containerWidth'>
                <Container  className='mb-5'>
                    <div>
                        <h2 className='text-center mt-3 mb-5'>Technology Used</h2>
                    </div>
                    <Row>
                        <Col className=' chart' lg={6} md={6} sm={12}>
                        <BarChart className='ms-0' width={450} height={350} data={this.state.data}>
                            <XAxis dataKey="Technology"/>
                            <Bar dataKey="project" fill='blue'>

                            </Bar>

                        </BarChart>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, expedita! Odio praesentium reprehenderit expedita ut, quae minus dolores sunt animi.
                            Adipisci hic possimus dolore in assumenda pariatur ad excepturi, alias necessitatibus, magnam illo labore veniam officia velit voluptate veritatis nostrum.
                            Nemo sunt consequuntur libero enim delectus dignissimos, perferendis, possimus numquam ratione eos eius sit nostrum, in aliquam! Quis, veniam odio.
                            Rerum adipisci, sed repudiandae eaque velit nisi harum molestias sit numquam perferendis. Laboriosam ab optio nemo hic molestias tempore reprehenderit!

                            {/* lorem20*5 */}
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda ad doloribus accusamus ipsum rem, nam id! Perferendis dolor nostrum facere?
                            ad harum culpa deleniti, porro aperiam deserunt cum corporis nostrum!
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Container>
        )
    }
}
export default Chart