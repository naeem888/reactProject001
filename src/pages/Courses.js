import React, { Component, Fragment } from 'react'

// import TopTitle from './components/TopHeader/TopTitle'


import NavBar from './../components/NavBar/NavBar';
import TopTitle from './../components/TopHeader/TopTitle';
import OurCoursesDetails from './../components/OurCourses/OurCoursesDetails';
import Footer from './../components/Footer/Footer';

export default class Courses extends Component {
  render() {
    return (
      <Fragment>
        <NavBar/>
        <TopTitle title1="All Courses"/>
        <OurCoursesDetails/>
        <Footer/>Footer
      </Fragment>
    )
  }
}
