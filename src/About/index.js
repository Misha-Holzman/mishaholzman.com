import React, { Component } from 'react'
import './style.css'

class AboutPage extends Component {
  render () {
    return (
      <div className='about-page' id='about-page'>
        <div className='about-page-container'>
          <div className='about-headshot-and-button'>
            <img
              src='https://i.imgur.com/BT0dsup.jpg'
              className='profile-pic'
              height='270px'
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
            </p>
            <p className='main-text'>
            I am a New York City based web and visual designer, with the goal of using my professional skill and experience to make an impact 
            in environmental conservation and climate change by improving the unbalanced relationship humans have with the environment. 
            I graduated college with a B.S. in Business and Management and returned to school to pursue Front End Web Development and Web Design, 
            leading me to blend a business oriented mindset with creative and technical ability as a professional designer. 
            My work drives business and exposure through intelligent user-flow, business understanding, collaboration, ease of use, 
            intuitive consistency, and an artistic eye for modern cohesive design. I am passionate about helping companies and individuals express who they are and
            what they represent by creating beautiful interfaces and engaging experiences that drive real results. My goal is to create an elegant combination of form and function.
            </p>
            <p className='main-text'>
            I have experience in designing and coding fully custom websites and SPA's using ReactJS, HTML, CSS and JavaScript, 
            building/ revamping websites using both custom code and CMS platforms including Zoho, Wordpress, Wix and SquareSpace, 
            creating vector graphics and marketing assets, and working both on a team and with individual clients.
            </p>
            <p className='main-text'>
            I am currently seeking a new full-time role as web (ux/ui) designer. Shoot me an email at mcholzman1@gmail.com about any inquiries or opportunities – I’m always happy to chat! <span role='img' aria-label='emoji'>🤙</span>
            </p>
          </div>
        </div>
        {/* <a href='#my-work' id='link2'>
          <img
            src='https://i.imgur.com/T5f8v9i.png'
            height='50px'
            className='arrow-2'
            alt=''
          />
        </a> */}
      </div>
    )
  }
}

export default AboutPage
