import React from 'react'
import './nav.css'
import {AiOutlineHome,AiOutlineUser,} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine,RiMessengerLine} from 'react-icons/ri'





const Nav = () => {

  


  return (
    <nav>
      <a href="#" ><AiOutlineHome/></a>
      <a href="#about"><AiOutlineUser/></a>
      <a href="#experience"><BiBook/></a>
      <a href="#services"><RiServiceLine/></a>
      <a href="#contact"><RiMessengerLine/></a>
    </nav>
  )
}

export default Nav