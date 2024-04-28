import React, { Component, Fragment, useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import '../../src/resources/css/bootstrap.min.css'
import '../../resources/css/bootstrap.min.css';
import logo from '../../resources/images/logo.png';
import { NavLink } from 'react-router-dom';

const divStyle = {

  textDecoration: 'none',
  fontSize:18,
  paddingLeft:20,
    

};
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
        <Navbar.Brand href="#home"><img className='bg-white' src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">

  
          </Nav>
          <Nav className='navtext NavStyle'>
            {/* <Nav.Link className='text-white'NavLink to="/">HOME</Nav.Link>
            <Nav.Link className='text-white'NavLink to="/MyServices">SERVICES</Nav.Link>
            <Nav.Link className='text-white'NavLink to="/Courses">COURSES</Nav.Link>
            <Nav.Link className='text-white'NavLink to="/Portfolio">PORTFOLIO</Nav.Link>
            <Nav.Link className='text-white'NavLink to="/Contact">CONTACT</Nav.Link>
            <Nav.Link className='text-white'NavLink to="/AboutMe">ABOUT</Nav.Link> */}
            {/* <ul > */}
            <NavLink style={divStyle} className='text-white' to="/">HOME</NavLink>
            <NavLink style={divStyle} className='text-white' to="/MyServices">SERVICES</NavLink>
            <NavLink style={divStyle} className='text-white' to="/Courses">COURSES</NavLink>
            <NavLink style={divStyle} className='text-white' to="/Portfolio">PORTFOLIO</NavLink>
            <NavLink style={divStyle} className='text-white' to="/Contact">CONTACT</NavLink>
            <NavLink style={divStyle} className='text-white' to="/AboutMe">ABOUT</NavLink>
            {/* </ul> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      </Fragment>
    );
  }

export default NavBar;