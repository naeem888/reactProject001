import React, { Component, Fragment } from 'react'
import NavBar from '../components/NavBar/NavBar'
import TopTitle from '../components/TopHeader/TopTitle'
import ContactMe from '../components/ContactMe/ContactMe'

import Footer from './../components/Footer/Footer';
export default class Contact extends Component {
  render() {
    return (
      <Fragment>
        <NavBar/>
        <TopTitle title1="Contact Me"/>
        <ContactMe/>
        <Footer/>


      </Fragment>
    )
  }
}
