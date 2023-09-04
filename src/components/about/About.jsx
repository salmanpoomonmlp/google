import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {BiSolidMedal,BiUserCircle,BiLibrary} from 'react-icons/bi'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>

      <h2>about</h2><br/><br/>

      <div className='container about__container'>
        <div className='about__me' >
          <div className='about__me-image'>
            <img src={ME} alt="" />
          </div>
        </div>
        <div className='abount__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <BiSolidMedal className='about_icon'/>
              <h5>Experiance</h5>
              <small>1+ yers</small>

            </article>
            
            <article className='about__card'>
              <BiUserCircle className='about_icon'/>
              <h5>Working</h5>
              <small>freelance</small>

            </article>

            <article className='about__card'>
              <BiLibrary className='about_icon'/>
              <h5>project</h5>
              <small>15+ projeact</small>

            </article>
          </div>
                  <p className='par'>With 1+ years of experience in web development, I have honed my skills in both front-end and back-end technologies, allowing me to take projects from concept to deployment. My journey into the world of full-stack engineering started with a deep curiosity for coding, and it has since evolved into a relentless pursuit of excellence in software development.</p>
        
                   <a href="#contact" className='btn btn-primary btn-let'>Lets Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About