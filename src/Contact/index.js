import React, { Component } from 'react'
import ContactForm from '../ContactForm'
import './style.css'

class ContactPage extends Component {
  render () {
    return (
      <div className='contact-page-container' id='main-contact-page'>
        {/* <img
          src='https://www.freeiconspng.com/uploads/line-png-32.png'
          width='40%'
          alt='Free Download Line Png Images'
          className='line'
        /> */}
        <h2 className='contact-title' id='contact-page'>contact me</h2>
        <div className='social-pics-container'>
          <div className='social-links-container1'>
            <a
              href='https://www.linkedin.com/in/misha-holzman/'
              className='social-link1'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                src='https://i.imgur.com/M427KnU.png'
                className='social-image1'
                alt='linkedin'
              />
            </a>
          </div>
          <div className='social-links-container2'>
            <a
              href='https://git.generalassemb.ly/mholzman'
              className='social-link2'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                src='https://i.imgur.com/4UOzqBT.png'
                alt='github'
                className='social-image2'
                height='50px'
              />
            </a>
          </div>
          <div className='social-links-container3'>
            <a
              href='https://www.instagram.com/notions_of_real/?hl=en'
              className='social-link3'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                src='https://i.imgur.com/l9qpIO3.png'
                className='social-image3'
                alt='instagram'
              />
            </a>
          </div>
        </div>
        <div className='contact-content-container'>
          <ContactForm />
        </div>
        <a
          href='#top'
          className='back-to-top-link'
        >
          <img
            src='https://i.imgur.com/lxhXnov.png'
            className='back-to-top-img'
            height='50px'
            alt=''
          />
        </a>
      </div>
    )
  }
}

export default ContactPage
