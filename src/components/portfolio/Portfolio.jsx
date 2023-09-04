import React from 'react'
import './portfolio.css'
import WEB from '../../assets/web1.png'
import PIC from '../../assets/Screenshot_20230606-082235.jpg'
import PIC2 from '../../assets/me-about.jpg'
import PIC3 from '../../assets/aaa.jpg'
import PIC4 from '../../assets/bbbb.jpg'
const Portfolio = () => {
  return (
    <>
      <section id='portfolio'>
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>
    <ul class="cards">
  <li>
    <a class="card">
      <img src={WEB} class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img class="card__thumb" src={PIC} alt="" />
          <div class="card__header-text">
            <h3 class="card__title">Jessica Parker</h3>            
            <span class="card__status">1 hour ago</span>
          </div>
        </div>
        <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
        <a href='https://wa.link/5yyril' download className='btn bt'>GET</a>
        
      </div>
    </a>      
  </li>
  <li>
    <a  class="card">
      <img src={WEB} class="card__image" alt="" />
      <div class="card__overlay">        
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
          <img class="card__thumb" src={PIC2} alt="" />
          <div class="card__header-text">
            <h3 class="card__title">kim Cattrall</h3>
            <span class="card__status">3 hours ago</span>
          </div>
        </div>
        <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
        <a href='https://wa.link/5yyril' download className='btn bt'>GET</a>
      </div>
    </a>
  </li>
  <li>
    <a  class="card">
      <img src={WEB} class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img class="card__thumb" src={PIC3} alt="" />
          <div class="card__header-text">
            <h3 class="card__title">Jessica Parker</h3>
                   
            <span class="card__status">1 hour ago</span>
          </div>
        </div>
        <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
        <a href='https://wa.link/5yyril' download className='btn bt'>GET</a>
      </div>
    </a>
  </li>
  <li>
    <a  class="card">
      <img src={WEB} class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
          <img class="card__thumb" src={PIC4} alt="" />
          <div class="card__header-text">
            <h3 class="card__title">kim Cattrall</h3>
            <span class="card__status">3 hours ago</span>
          </div>          
        </div>
        <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
        <a href='https://wa.link/5yyril' download className='btn bt'>GET</a>
      </div>
    </a>
  </li>    
</ul>
    
    </section>
   
    
    
    </>
  
  )
}

export default Portfolio