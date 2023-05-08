import React from 'react'
import Navbar from '../navbar/navbar'
import Footer from '../Footer/footer'
import "bootstrap/dist/css/bootstrap.min.css";
import './about.css'

const About = () => {
  return (
    <div className='about_section' >
       {/* <Navbar /> */}
      <div className='container py-5 text-white'> About page </div>
        <div className='row' >
          <div className='col text-white'>1 </div> 
          <div className='col text-white'>2</div> 
          <div className='col text-white'>3</div> 

        </div>
        {/* <Footer /> */}
   </div>
  );
};

export default About