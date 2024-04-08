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
            <Fragment>
                <Container className='mb-5'>
                    <div>
                        <h2 className='text-center mt-3 mb-5'>Technology Used</h2>
                    </div>
                    <Row>
                        <Col className='ms-0' sm={6}>
                        <BarChart className='ms-5' width={500} height={400} data={this.state.data}>
                            <XAxis dataKey="Technology"/>
                            <Bar dataKey="project" fill='blue'>

                            </Bar>

                        </BarChart>
                        </Col>
                        <Col>
                            <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, expedita! Odio praesentium reprehenderit expedita ut, quae minus dolores sunt animi.
                            Adipisci hic possimus dolore in assumenda pariatur ad excepturi, alias necessitatibus, magnam illo labore veniam officia velit voluptate veritatis nostrum.
                            Nemo sunt consequuntur libero enim delectus dignissimos, perferendis, possimus numquam ratione eos eius sit nostrum, in aliquam! Quis, veniam odio.
                            Rerum adipisci, sed repudiandae eaque velit nisi harum molestias sit numquam perferendis. Laboriosam ab optio nemo hic molestias tempore reprehenderit!

                            {/* lorem20*5 */}
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda ad doloribus accusamus ipsum rem, nam id! Perferendis dolor nostrum facere?
                            Inventore a accusantium natus magni eos temporibus ipsam quia sint officiis quam! Laborum, ipsam minus itaque numquam ducimus labore blanditiis!
                            Eligendi nobis incidunt illo, eos, fugiat quae laboriosam sint commodi ad harum culpa deleniti, porro aperiam deserunt cum corporis nostrum!
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}
export default Chart