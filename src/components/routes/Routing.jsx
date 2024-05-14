import React from 'react';
import Hero from '../Hero';
import Navbar from '../Navbar';
import Location from '../Location';
import Services from '../Services';
import Features from '../Features';
import Experience from '../Experience';
import Gallery from '../Gallery';
import Clients from '../Clients';
import Subscribe from '../Subscribe';
import Footer from '../Footer';

function Routing() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Location/>
    <Services/>
    <Features/>
    <Experience/>
    <Gallery/>
    <Clients/>
    <Subscribe/>
    <Footer/>
    </>
  )
}

export default Routing;