import React from 'react'
import ME from '../../assets/ME.png'
import './herobox.css'

const herobox = () => {
  return (
    <header>
    <div className='container herobox_container py-5 text-white'>
        <h5>Hello I'm</h5>
        <h1>Esther</h1>
         <h5 className="text-light">Front-end Developer</h5>
    
         <div className="ME">
                <img width={290} src={ME} alt="me" />
            </div>
    
    </div>

    </header>
  )
}

export default herobox