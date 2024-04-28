import React, { Component, Fragment } from 'react'
import HomePage from "./pages/HomePage";
import MyServices from './pages/MyServices';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import AboutMe from './pages/AboutMe';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Courses from './pages/Courses';
function App() {
  return (
      

<Fragment>
    <BrowserRouter>
    <NavBar/>

      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/MyServices" element={<MyServices/>}/>
        <Route path="/Courses" element={<Courses/>}/>
        <Route path="/Portfolio" element={<Portfolio/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/AboutMe" element={<AboutMe/>}/>


      </Routes>
    </BrowserRouter>

</Fragment>





      
  );
}

export default App;
