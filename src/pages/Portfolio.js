import React, { Component, Fragment } from 'react'
import NavBar from '../components/NavBar/NavBar'
import TopTitle from '../components/TopHeader/TopTitle'
import RecentProjectsDetails from '../components/RecentProjects/RecentProjectsDetails'
import Footer from './../components/Footer/Footer';
export default class Portfolio extends Component {
  render() {
    return (
        <Fragment>
            <NavBar/>
            <TopTitle title1="All Project"/>
            <RecentProjectsDetails/>
            <Footer/>



        </Fragment>
    )
  }
}
