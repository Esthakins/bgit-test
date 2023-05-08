import React from 'react'
import Htmlimg from '../../assets/htmlimg.png'
import Jsimg from '../../assets/jsimg.png'
import Cssimg from '../../assets/cssimg.png'
import './services.css'


const services = () => {
  return (
    <section class="services_section py-5 " >
   <div>
      <h1 className='services_title text-white' > Services </h1>
        </div>
        
        <div class="container d-flex justify-content-center  "> 

  {/* <div class="col-lg-3 services_card">
        <div class="card text-white border-0" >
          <div class="card-body">
            <h2 class="servcies_title">Services</h2>
            <p class="card-text"> </p>
            <a href="#" class="btn ">Enter</a>
          </div>
        </div>
      </div> */}
       
    <div class="row FED_card">


      <div class="col-lg-4 html_card ">
        <div class="card border-0 h-100" >
            <div className='Html'>
                <img src={Htmlimg} class="card-img-top" alt="..." /> 
            </div>
          <div class="card-body ">
            <h5 class="card-title">HTML</h5>
            <p class="card-text">Standard markup language for documents designed to be displayed in a web browser.</p>
            <a href="#" class="btn ">Enter</a>
          </div>
        </div>
      </div>

        <div class="col-lg-4">
          <div class="card border-0 h-100 css_card" >
            <div className='Css' >
                <img src={Cssimg} class="card-img-top" alt="..." />
            </div>
            <div class="card-body">
              <h5 class="card-title">CSS</h5>
              <p class="card-text">Style sheet language used for describing the presentation of a document written in a markup language such as HTML</p>
              <a href="#" class="btn ">Enter</a>
            </div>
          </div>
        </div>

      <div class="col-lg-4">
        <div class="card border-0 h-100 js_card" >
            <div className='Js'>
          <img src={Jsimg} class="card-img-top" alt="..." />
          </div>
          <div class="card-body">
            <h5 class="card-title">JavaScript</h5>
            <p class="card-text">Programming language for interactive effects</p>
            <a href="#" class="btn">Enter</a>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
  )
}

export default services