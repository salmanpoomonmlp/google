import React from 'react'
import {BsLinkedin,BsGithub,BsDribbble} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/salman-faris-3917ba28b/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/salmanpoomonmlp" target='_blank'><BsGithub/></a>
        <a href="https://dribbble.com/salman__faris" target='_blank'><BsDribbble/></a>
    </div>
  )
}

export default HeaderSocials