import React from 'react'
import './footer.css'
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
const Footer = () => {
  return (
     <footer>
      <a href='#' className='footer__logo'>Muskan_Singh</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#certifications'>Certifications</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href='https://github.com/muskansingh9421' target='_blank'><BsGithub/></a>
        <a href='https://www.linkedin.com/in/muskan-singh-b51a03205/' target='_blank'><BsLinkedin /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; MuskanSingh. All rights reserved</small>
      </div>
     </footer>
  )
}

export default Footer