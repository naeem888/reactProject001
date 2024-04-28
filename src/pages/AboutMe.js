import React, { Component, Fragment } from 'react'

import NavBar from './../components/NavBar/NavBar';
import TopTitle from './../components/TopHeader/TopTitle';
import About from '../components/About/About';
import Footer from './../components/Footer/Footer';
export default class AboutMe extends Component {
  render() {
    return (
      <Fragment>
        <NavBar/>
        <TopTitle title1="About Me"/>
        <About/>
        <Footer/>
      </Fragment>
    )
  }
}
