import React, { Component } from 'react'
import './style.css'

class AboutPage extends Component {
  render () {
    return (
      <div className='about-page' id='about-page'>
        <div className='about-page-container'>
          <img
            src='https://i.imgur.com/uK42b4V.jpg'
            className='profile-pic'
            height='250px'
            alt=''
          />
          <div className='about-all-texts'>
            <h3 className='hello-text'>Hi! I'm Misha Holzman</h3>
            <p className='main-text'>
            I am a front end web designer and developer with an eye for modern cohesive design. I am passionate about helping companies and individuals express who they are and what they represent by creating beautiful interfaces and engaging experiences.
            </p>
            <p className='main-text'>
            I was born in raised in NYC surrounded by art and design. I love to create art and music in my free time and I cultivate my creative drive in web development. I studied business and management in college, and I have found that such a background gives me a great advantage when creating effective and engaging user experiences on a website.
            </p>
            <p className='main-text'>
            I understand the importance of aligning a company or individual’s online presence with their brand, vision, values, and positioning within an industry. A visit to a website is a lot like physically walking into a store. Every part of the visit, from the lighting to the font on the walls will impact how you feel about the product while inside and help shape your opinion of the brand.
            </p>
            <p className='main-text'>
            Have an idea? Let’s get in touch and build something awesome! Shoot me an email or give me a ring about any inquiries, I’m
            always happy to chat <span role='img' aria-label='emoji'>🤙</span>
            </p>
            <a
              href='https://www.canva.com/design/DADJEW_UA3A/0bMj_EnvT1y6R75vMixSbw/view?website#4'
              target='_blank'
              rel='noopener noreferrer'
            >
              <button className='resume-button'><span className='resume-link-animation'>my resume</span></button>
            </a>
            <a href='#my-work' id='link2'>
              <img
                src='https://i.imgur.com/T5f8v9i.png'
                height='50px'
                className='arrow'
                alt=''
              />
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutPage
