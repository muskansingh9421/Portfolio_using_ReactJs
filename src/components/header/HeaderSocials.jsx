import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsDiscord} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/muskan-singh-b51a03205/' target='_blank'><BsLinkedin/></a>
        <a href='https://github.com/muskansingh9421' target='_blank'><BsGithub/></a>
        <a href='https://discord.com' target='_blank'><BsDiscord/></a>
    </div>
  )
}

export default HeaderSocials