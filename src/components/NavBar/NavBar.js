import React, { Component, Fragment, useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import '../../src/resources/css/bootstrap.min.css'
import '../../resources/css/bootstrap.min.css'
import logo from '../../resources/images/logo.png'

const NavBar =() => {
  const [sticky, setSticky] = useState(false);
  useEffect(() =>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 100 ? setSticky(true): setSticky(false)

    })

  });
    return (
      <Fragment>
      <Navbar  collapseOnSelect expand="lg" fixed="top" className={` ${sticky? 'navbgcolor navmenus' : '' }` }>
      <Container >
        <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">

  
          </Nav>
          <Nav className='navtext'>
            <Nav.Link className='text-white' href="#home">HOME</Nav.Link>
            <Nav.Link className='text-white' href="#services">SERVICES</Nav.Link>
            <Nav.Link className='text-white' href="#courses">COURSES</Nav.Link>
            <Nav.Link className='text-white' href="#portfolio">PORTFOLIO</Nav.Link>
            <Nav.Link className='text-white' href="#contact">CONTACT</Nav.Link>
            <Nav.Link className='text-white' href="#about us">ABOUT US</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      </Fragment>
    );
  }

export default NavBar;