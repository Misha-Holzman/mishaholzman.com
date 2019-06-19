import React, { Component } from 'react'
import ContactForm from '../ContactForm'
import './style.css'

class ContactPage extends Component {
  render () {
    return (
      <div className='contact-page-container' id='main-contact-page'>
        <img
          src='https://www.freeiconspng.com/uploads/line-png-32.png'
          width='40%'
          alt='Free Download Line Png Images'
          className='line'
        />
        <h2 className='contact-title' id='contact-page'>contact me</h2>
        <div className='social-pics-container'>
          <div className='social-links-container1'>
            <a
              href='https://www.linkedin.com/in/misha-holzman/'
              className='social-link1'
              target='_blank'
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
            >
              <img
                src='https://i.imgur.com/0pzhAxs.png'
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
            >
              <img
                src='https://i.imgur.com/l9qpIO3.png'
                className='social-image3'
                alt='instagram'
              />
            </a>
          </div>
        </div>
        <p className='contact-description'>
        Shoot me an email about any inquiries. I’m always happy to chat!
        </p>
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
          />
        </a>
      </div>
    )
  }
}

export default ContactPage




/*           <div className=''>
            <p className='phone'>
              <img
                src='https://i.imgur.com/YBe6mxx.png'
                alt='github'
                height='30px'
                className=''
              />
              347 • 603 • 6396
            </p>
            <p className='email'>
              <img
                src='https://i.imgur.com/AGftEKD.png'
                alt='github'
                height='30px'
                className=''
              />
              mcholzman1@gmail.com
            </p>
            <p className='address'>
              <img
                src='https://i.imgur.com/C3FkxHo.png'
                alt='github'
                height='30px'
                className=''
              />
              Manhattan, NY 10012
            </p>
          </div>
          */ 