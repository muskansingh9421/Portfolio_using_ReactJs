import React from 'react'
import './nav.css'
import {AiFillHome} from 'react-icons/ai'
import {BiSolidUser} from 'react-icons/bi'
import {BiSolidBookAlt} from 'react-icons/bi'
import {MdLibraryBooks} from 'react-icons/md'
import {AiFillMessage} from 'react-icons/ai'
import{GiAchievement} from 'react-icons/gi'
import { useState } from 'react'

const Nav = () => {
  const[activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')}className={activeNav == '#' ? 'active' : ''}><AiFillHome/></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav == '#about' ? 'active' : ''}><BiSolidUser/></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav == '#experience' ? 'active' : ''}><BiSolidBookAlt/></a>
      <a href='#certifications' onClick={() => setActiveNav('#certifications')} className={activeNav == '#certifications' ? 'active' : ''}><GiAchievement/></a>
      <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={activeNav == '#portfolio' ? 'active' : ''}><MdLibraryBooks/></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav == '#contact' ? 'active' : ''}><AiFillMessage/></a>
    </nav>
  )
}

export default Nav