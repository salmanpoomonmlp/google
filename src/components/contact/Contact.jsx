import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { BsInstagram, BsFacebook, BsGithub } from 'react-icons/bs';
import './contact.css';
import { BiLogoWhatsapp } from 'react-icons/bi';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    email: '',
    number: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_gfjrxzo', 'template_ha7jpiv', form.current, 'kGWi6AhfG6_cm5vW7')
      .then((response) => {
        console.log('Email sent successfully:', response);
        // Handle success, e.g., show a success message to the user.
        resetForm();
      })
      .catch((error) => {
        console.error('Email send error:', error);
        // Handle error, e.g., show an error message to the user.
      });
  };

  const resetForm = () => {
    setFormData({
      name: '',
      lastname: '',
      email: '',
      number: '',
      message: '',
    });
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='contact_us_2'>
        <div className='responsive-container-block big-container'>
          <div className='blueBG'></div>
          <div className='responsive-container-block container'>
            <form className='form-box' ref={form} onSubmit={sendEmail}>
              <div className='container-block form-wrapper'>
                <p className='text-blk contactus-head'>Get in Touch</p>
                <p className='text-blk contactus-subhead'>Nunc erat cursus tellus gravida.</p>
                <div className='responsive-container-block'>
                  <div className='responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6' id='i10mt'>
                    <p className='text-blk input-title'>FIRST NAME</p>
                    <input
                      className='input'
                      id='ijowk'
                      name='name'
                      placeholder='Please enter first name...'
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className='responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12'>
                    <p className='text-blk input-title'>LAST NAME</p>
                    <input
                      className='input'
                      id='indfi'
                      name='lastname'
                      placeholder='Please enter last name...'
                      value={formData.lastname}
                      onChange={handleChange}
                    />
                  </div>
                  <div className='responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12'>
                    <p className='text-blk input-title'>EMAIL</p>
                    <input
                      className='input'
                      id='ipmgh'
                      name='email'
                      placeholder='Please enter email...'
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className='responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12'>
                    <p className='text-blk input-title'>PHONE NUMBER</p>
                    <input
                      className='input'
                      id='imgis'
                      name='number'
                      placeholder='Please enter phone number...'
                      value={formData.number}
                      onChange={handleChange}
                    />
                  </div>
                  <div className='responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12' id='i634i'>
                    <p className='text-blk input-title'>WHAT DO YOU HAVE IN MIND</p>
                    <textarea
                      className='textinput'
                      id='i5vyy'
                      name='message'
                      placeholder='Please enter query...'
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className='button-group'>
                  <button className='submit-btn' type='submit'>
                    Submit
                  </button>
                  <button className='clr-btn' type='button' onClick={resetForm}>
                    Clear
                  </button>
                </div>
              </div>
            </form>
            <div className='social-media-links'>
                <a href='https://www.instagram.com/salman____faris.___/' id='ix94i-2'>
                  <BsInstagram className='link-img' alt='Instagram' />
                </a>
                <a href='https://www.facebook.com/profile.php?id=100093130425780'>
                  <BsFacebook className='link-img' alt='Facebook' />
                </a>
                <a href='https://github.com/salmanpoomonmlp'>
                  <BsGithub className='link-img' alt='Github' />
                </a>
                <a href='https://wa.link/5yyril'>
                  <BiLogoWhatsapp className='link-img' alt='Github' />
                </a></div>
          </div>
          
        </div>
        
      </div>
    </section>
  );
};

export default Contact;
