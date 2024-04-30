import React, {Fragment, useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import '../../src/resources/css/bootstrap.min.css'
import '../../resources/css/bootstrap.min.css';
import logo from '../../resources/images/logo.png';
import { NavLink } from 'react-router-dom';


const NavBar =() => {
  const [sticky, setSticky] = useState(false);
  useEffect(() =>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 100 ? setSticky(true): setSticky(false)

    })

  });
    return (
      <Fragment>
      <Navbar  collapseOnSelect expand="lg" fixed="top" className={` ${sticky? 'navbgcolor' : '' }` }>
      <Container >
        <Navbar.Brand as={NavLink} to="/"><img className='bg-white' src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">

  
          </Nav>
          <Nav className='navtext NavStyle'>
                      
            <Nav.Link as={NavLink} style={({isActive, isPending   }) => {return {color:isActive ? "red": "inherit",};}}  to="/">HOME</Nav.Link>
            <Nav.Link as={NavLink} style={({isActive, isPending   }) => {return {color:isActive ? "red": "inherit",};}} className={`${sticky? 'text-red' : 'text-white'}`} to="/MyServices">SERVICES</Nav.Link>
            <Nav.Link as={NavLink} style={({isActive, isPending   }) => {return {color:isActive ? "red": "inherit",};}} className={`${sticky? 'text-red' : 'text-white'}`} to="/Courses">COURSES</Nav.Link>
            <Nav.Link as={NavLink} style={({isActive, isPending   }) => {return {color:isActive ? "red": "inherit",};}} className={`${sticky? 'text-red' : 'text-white'}`} to="/Portfolio">PORTFOLIO</Nav.Link>
            <Nav.Link as={NavLink} style={({isActive, isPending   }) => {return {color:isActive ? "red": "inherit",};}} className={`${sticky? 'text-red' : 'text-white'}`} to="/Contact">CONTACT</Nav.Link>
            <Nav.Link as={NavLink} style={({isActive, isPending   }) => {return {color:isActive ? "red": "inherit",};}} className={`${sticky? 'text-red' : 'text-white'}`} to="/AboutMe">ABOUT</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      </Fragment>
    );
  }

export default NavBar;