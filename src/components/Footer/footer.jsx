import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

const Footer = () => {
  return <footer className='footer_section bg-black py-5 text-white w-100'>
     <div className='footer_icons '>
      <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
      <a href="https://github.com" target="_blank"><FaGithub/></a>
      <a href="https://dribbe.com" target="_blank"><FiDribbble/></a>
    </div>
  
  </footer>
}

export default Footer