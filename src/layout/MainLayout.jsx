import React from 'react'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/Footer/footer'
import {Outlet} from 'react-router-dom'
import About from '../components/about/about'
import Herobox from '../components/herobox/herobox'
import Services from '../components/services/services'
import Contact from '../components/contact/contact'

const MainLayout = () => {
  return (
    <>
    <Navbar />
        <Herobox />

        {/* <Outlet /> */}
        <About />
        <Services />
        <Contact />
    <Footer />
    
    </>
  )
}

export default MainLayout