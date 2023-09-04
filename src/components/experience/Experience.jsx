import React from 'react'
import './experience.css'
import {BiLogoHtml5,BiLogoMongodb} from 'react-icons/bi'
import {DiCss3Full}from 'react-icons/di'
import {RiJavascriptFill} from 'react-icons/ri'
import {FaReact,FaBootstrap,FaNodeJs,FaPython} from 'react-icons/fa'
import {SiTailwindcss,SiMysql} from 'react-icons/si'



const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skill I have</h5>  
      <h2>My Experience</h2><br/>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Developor</h3>
          <div className='experience__content'>
          <article className='experience__details'>
            <BiLogoHtml5 className='experience__details-icon'/>
            
            
            <div>
            <h4>HTML</h4>
            <small className='text-light'>Experiance</small>
            </div>
          </article>
          <article className='experience__details'>
            <DiCss3Full className='experience__details-icon'/>
            <div>
            <h4>CSS</h4>
            <small className='text-light'>Experiance</small>
            </div>
          </article>
          <article className='experience__details'>
            <RiJavascriptFill className='experience__details-icon'/>
            <div>
            <h4>JavaScript</h4>
            <small className='text-light'>Experiance</small>
            </div>
          </article>
          <article className='experience__details'>
            <FaReact className='experience__details-icon'/>
            <div>
            <h4>React</h4>
            <small className='text-light'>Experiance</small>
            </div>
          </article>
          <article className='experience__details'>
            <FaBootstrap className='experience__details-icon'/>
            <div>
            <h4>Bootstrap</h4>
            <small className='text-light'>Experiance</small>
            </div>
          </article>
          <article className='experience__details'>
            <SiTailwindcss className='experience__details-icon'/>
            <div>
            <h4>tailwind css</h4>
            <small className='text-light'>Experiance</small>
            </div>
          </article>
          
          </div>
         
        </div>
        <div className='experience__backend'>
        <h3>backend Developor</h3>
          <div className='experience__content'>
          <article className='experience__details'>
            <FaNodeJs className='experience__details-icon'/>
            <div>
            <h4>Node js</h4>
            <small className='text-light'>Experiance</small>
            </div>
          </article>
          <article className='experience__details'>
            <FaPython className='experience__details-icon'/>
            <div>
            <h4>Python</h4>
            <small className='text-light'>Experiance</small>
            </div>
          </article>
          <article className='experience__details'>
            <BiLogoMongodb className='experience__details-icon'/>
            <div>
            <h4>MongoDB</h4>
            <small className='text-light'>Experiance</small>
            </div>
          </article>
          <article className='experience__details'>
            <SiMysql className='experience__details-icon'/>
            <div>
            <h4>MySQL</h4>
            <small className='text-light'>Experiance</small>
            </div>
          </article>
          
          </div>
          
        </div>

      </div>
    </section>
  )
}

export default Experience