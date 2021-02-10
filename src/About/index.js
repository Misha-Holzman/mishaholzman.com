import React, { Component } from 'react'
import './style.css'

class AboutPage extends Component {
  render () {
    return (
      <div className='about-page' id='about-page'>
        <div className='about-page-container'>
          <div className='about-headshot-and-button'>
            <img
              src='https://i.imgur.com/uK42b4V.jpg'
              className='profile-pic'
              height='250px'
              alt=''
            />
            <a
              href='https://misha-holzman.github.io/MH-Resume/'
              target='_blank'
              className='resume-button-link'
              rel='noopener noreferrer'
            >
              Resume
            </a>
          </div>
          <div className='about-all-texts'>
            <h3 className='hello-text'>Hi! I'm Misha Holzman</h3>
            <p className='main-text'>
            I am a web designer and front end developer with an eye for modern cohesive design.
            I am passionate about helping companies and individuals express who they are and
            what they represent by creating beautiful interfaces and engaging experiences that drive real results.
            </p>
            <p className='main-text'>
            I was born in raised in NYC surrounded by art and design.
            I love to create art and music in my free time and I cultivate my creative drive in design and coding.
            I studied business and management in college, and this background gave me the ability to understand
            the essence and direction of a brand or individual and how to convey that with an effective and engaging user experience.
            </p>
            <p className='main-text'>
            I understand the importance of aligning a company or individual’s online presence with their
            brand, vision, values, and positioning within an industry.
            A visit to a website is a lot like physically walking into a store.
            Every part of the visit, from the lighting to the font on the walls will impact how you feel
            about the product while inside and help shape your opinion of the brand.
            </p>
            <p className='main-text'>
            Have an idea? Let’s get in touch and build something awesome!
            Shoot me an email or give me a ring about any inquiries, I’m always happy to chat <span role='img' aria-label='emoji'>🤙</span>
            </p>
            <p className='main-text-last'>
            I am currently searching for a new role as a web designer and/or creative front end developer.
            I am looking for a level of creative freedom, a great company/ team culture, and exciting meaningful projects.
            </p>
          </div>
        </div>
        <a href='#my-work' id='link2'>
          <img
            src='https://i.imgur.com/T5f8v9i.png'
            height='50px'
            className='arrow'
            alt=''
          />
        </a>
      </div>
    )
  }
}

export default AboutPage
