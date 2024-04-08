import React, { Component, Fragment } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../src/resources/css/bootstrap.min.css'
import logo from '../resources/images/logo.png'

export default class NavBar extends Component {
  render() {
    return (
      <Fragment>
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary navmenus">
      <Container>
        <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">

  
          </Nav>
          <Nav>
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#services">SERVICES</Nav.Link>
            <Nav.Link href="#courses">COURSES</Nav.Link>
            <Nav.Link href="#portfolio">PORTFOLIO</Nav.Link>
            <Nav.Link href="#contact">CONTACT</Nav.Link>
            <Nav.Link href="#about us">ABOUT US</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      </Fragment>
    )
  }
}
