import React, { Component, Fragment } from 'react'

import NavBar from '../components/NavBar/NavBar';
import TopTitle from '../components/TopHeader/TopTitle'
import Footer from '../components/Footer/Footer';
import ServiceDetails from '../components/services/ServiceDetails';


export default class MyServices extends Component {
  render() {
    return (
    <Fragment>
        <NavBar/>
        <TopTitle title1="Get My Service"/>
        <ServiceDetails/>
        <Footer/>

      </Fragment>
    )
  }
}
