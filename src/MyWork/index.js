import React, { Component } from 'react'
import businessCard1 from '../assets/business-card.jpg'
import businessCard2 from '../assets/business-card-back.jpg'
import mixBusinessCard1 from '../assets/mix-design-front.jpg'
import mixBusinessCard2 from '../assets/mix-design-back.jpg'
import cudaLogo1 from '../assets/cuda-logo-sketch.JPG'
import cudaLogo2 from '../assets/cuda-logo-outline.png'
import cudaLogo3 from '../assets/cuda-logo-white.png'
import cudaLogo4 from '../assets/cuda-logo-color.jpg'
import cudaSiteVid from '../assets/cuda-logo-screen-recording.mov'
import NSFsiteVid from '../assets/NSF-site.mp4'

import './style.css'

class MyWork extends Component {
  render () {
    return (
      <div className='main-work-container' id='work-page'>
        <div id='press'>
          <h2 className='my-work-title' id='my-work'>MY WORK</h2>
          <div className='press-container'>
            <div id='flip-box' className='annabel-lee-div-container'>
              <div id='flip-box-inner'>
                <div id='flip-box-front'>
                  <img src='https://i.imgur.com/RKedclo.png' alt='' id='vehicle-img' />
                </div>
                <div id='flip-box-back' className='josh-back-card'>
                  <div className='back-card-text' id='josh-flip-text'>
                    <h2 id='card-title-josh-acting'>Annabel Lee – Vehicle Editions Website</h2>
                    <p id='card-text'>
                      This website is a freelance project created for Annabel Lee, a bookmaker, editor, poet,
                      activist, musician, etc. It is build in ReactJS, without the use of CSS frameworks.
                      This project has been my largest project to date, with over 50 different components
                      and over 20 navigatable pages. The site is fully responsive and mobile friendly on any device.
                      Working closely with my client, I handling every step of the design, development, and
                      deployment process.
                    </p>
                    <div className='buttons-div'>
                      <a
                        href='https://www.vehicleeditions.com'
                        target='_blank'
                        className='live-site-button-link'
                        rel='noopener noreferrer'
                      >
                        <button className='live-site-button'>Live Site</button>
                      </a>
                      <a
                        href='https://github.com/Misha-Holzman/Vehicle-editions-website'
                        target='_blank'
                        className='github-button-link'
                        rel='noopener noreferrer'
                      >
                        <button className='github-button'>GitHub</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id='flip-box' className='josh-acting-div-container'>
              <div id='flip-box-inner'>
                <div id='flip-box-front'>
                  <img src='https://i.imgur.com/D3mvRFZ.png' alt='' id='josh-acting-img' />
                </div>
                <div id='flip-box-back' className='josh-back-card'>
                  <div className='back-card-text' id='josh-flip-text'>
                    <h2 id='card-title-josh-acting'>Josh Gregory's Acting Website</h2>
                    <p id='card-text'>
                      This website is a freelance project created for an actor. It is build using ReactJS,
                      without the use of CSS frameworks. The site is fully responsive and mobile friendly
                      on any device. I have gained invaluable experience from building this site, working
                      closely with my client and handling every step of the design and development process.
                      After I created work estimates, wire frames, and a user-experience design that had
                      continuity throughout each page, I then handled all of development, problem-solving
                      and bug resolution, and deployment.
                    </p>
                    <div className='buttons-div'>
                      <a
                        href='https://www.joshgregoryactor.com/'
                        target='_blank'
                        className='live-site-button-link'
                        rel='noopener noreferrer'
                      >
                        <button className='live-site-button'>Live Site</button>
                      </a>
                      <a
                        href='https://github.com/Misha-Holzman/Josh-Gregory-Actor-Website'
                        target='_blank'
                        className='github-button-link'
                        rel='noopener noreferrer'
                      >
                        <button className='github-button'>GitHub</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id='flip-box' className='kazimira-div-container'>
              <div id='flip-box-inner'>
                <div id='flip-box-front'>
                  <img src='https://i.imgur.com/f5CW6x8.png' alt='' id='kaz-healing-img' />
                </div>
                <div id='flip-box-back' className='josh-back-card'>
                  <div className='back-card-text' id='josh-flip-text'>
                    <h2 id='card-title-josh-acting'>Kazimira Rachfal's Healing Business Website</h2>
                    <p id='card-text'>
                      This site was created with SquareSpace, and I was hired to lead the design of the project.
                      Prior to this project, I did not know anyting about SquareSpace, but I was thrilled to learn
                      a new platform and I learned it very quickly. The flow and design of the site came out very
                      well and has helped Kazimira kickstart her healing business.
                    </p>
                    <div className='buttons-div'>
                      <a
                        href='https://www.takemeonajourney.com'
                        target='_blank'
                        className='live-site-button-link-solo'
                        rel='noopener noreferrer'
                      >
                        <button className='live-site-button'>Live Site</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id='flip-box' className='eric-art-div-container'>
              <div id='flip-box-inner'>
                <div id='flip-box-front'>
                  <img src='https://i.imgur.com/Pg7xW73.png' alt='' id='ric-artist-img' />
                </div>
                <div id='flip-box-back' className='josh-back-card'>
                  <div className='back-card-text' id='josh-flip-text'>
                    <h2 id='card-title-josh-acting'>Eric Holzman's Artist Website</h2>
                    <p id='card-text'>
                      Eric's site was one of the first websites I ever designed and made. While I did not use
                      coding to create this site and used Wix to build it, I designed the whole site from
                      scratch and have helped Eric show and promote his art through his website.
                    </p>
                    <div className='buttons-div'>
                      <a
                        href='https://www.ericholzman.com'
                        target='_blank'
                        className='live-site-button-link-solo'
                        rel='noopener noreferrer'
                      >
                        <button className='live-site-button'>Live Site</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id='flip-box' className='shaka-div-container'>
              <div id='flip-box-inner'>
                <div id='flip-box-front'>
                  <img src='https://i.imgur.com/bkN5v6m.jpg' alt='' id='shaka-img' />
                </div>
                <div id='flip-box-back' className='shaka-back-card'>
                  <div className='back-card-text' id='shaka-flip-text'>
                    <h2 id='card-title-shaka'>Shaka Surf Report</h2>
                    <p id='card-text'>Shaka is the easy to use surf report website for the everyday surfer,
                    demonstrating a Rails backend and React frontend. Enter a zip code for any location
                    within the United States and view the surf conditions for your specific area. Shaka
                    uses data from two separate API’s and a Twilio alert system linked with a cron-job to
                    send a real-time surf report via SMS to the user on weekend mornings. User authentication
                    is implemented to let the user login and stay logged in.
                    </p>
                    <div className='buttons-div'>
                      <a
                        href='https://git.generalassemb.ly/mholzman/Shaka'
                        target='_blank'
                        className='github-button-link'
                        rel='noopener noreferrer'
                      >
                        <button className='github-button'>GitHub</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id='flip-box' className='winson-div-container'>
              <div id='flip-box-inner'>
                <div id='flip-box-front'>
                  <img src='https://i.imgur.com/Zw3EHBL.jpg' alt='winson' id='winson-img' />
                </div>
                <div id='flip-box-back' className='winson-back-card'>
                  <div className='back-card-text' id='winson-flip-text'>
                    <h2 id='card-title-winson'>Win Son Restaurant</h2>
                    <p id='card-text'>Many restaurants in NYC have exciting new ideas and strong branding,
                    but have websites that don’t live up to their full potential. The goal of this project
                    was to take a bare, unattractive NYC restaurant website and redesign it to improve the
                    site’s usability while accurately reflecting the restaurant’s unique cuisine and personality.
                    I partnered up with three individuals in the user experience design class to collaborate
                    and create the website. After collaborating with the UX team on idea generation, user
                    stories, and initial wireframes and prototyping, I was in charge of building out the
                    website using React. The design team created High-fidelity wireframes through Zeplin
                    and used InVision prototyping, while I referenced the prototypes for styling, utilized
                    Bulma and Bootstrap for some components, JavaScript and implemented css animation to spice it up.
                    </p>
                    <div className='buttons-div'>
                      <a
                        href='https://git.generalassemb.ly/Win-son/Win-Son'
                        target='_blank'
                        className='github-button-link'
                        rel='noopener noreferrer'
                      >
                        <button className='github-button'>GitHub</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id='flip-box' className='deckOfLegends-div-container'>
              <div id='flip-box-inner'>
                <div id='flip-box-front'>
                  <img src='https://i.imgur.com/fmqhF6f.jpg' alt='legends' id='legends-img' />
                </div>
                <div id='flip-box-back' className='legends-back-card'>
                  <div className='back-card-text' id='legends-flip-text'>
                    <h2 id='card-title-legends'>Deck of Legends</h2>
                    <p id='card-text'>Love collecting sports trading cards? Interested in easily finding
                    facts and statistics about a MLB Hall of Fame player? Deck of Legends is a virtual
                    baseball card collecting app for Hall of Fame players. Search for any existing Hall
                    of Fame player and view their person information and statistics. The front-end of
                    this web app is built with React, Bulma, and custom CSS stylings. The back-end integrates
                    a database with two tables, a user table (with email and password authentication), and
                    players (their names, year inducted, primary team, and picture). The statistics will be
                    fetched from a stats API maintained by Major League Baseball. The connection of data to
                    components will be made through Express, Node, and React Router.
                    </p>
                    <div className='buttons-div'>
                      <a
                        href='https://git.generalassemb.ly/team-b/baseball-hof-deck'
                        target='_blank'
                        className='github-button-link'
                        rel='noopener noreferrer'
                      >
                        <button className='github-button'>GitHub</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id='flip-box' className='fooder-div-container'>
              <div id='flip-box-inner'>
                <div id='flip-box-front'>
                  <img src='https://i.imgur.com/Y8HWoHe.jpg' alt='fooder' id='fooder-img' />
                </div>
                <div id='flip-box-back' className='fooder-back-card'>
                  <div className='back-card-text' id='fooder-flip-text'>
                    <h2 id='card-title-fooder'>Fooder Meal Planner</h2>
                    <p id='card-text'>Are you a busy individual who likes to eat well and eat right? Try
                    Fooder Meal Planner to organize your week and cook easy delicious recipes without breaking
                    a sweat! With tons of recipes to choose from and a fun calendar to plan out your week,
                    you will never worry about planning dinner again. Fooder is build with React, Express,
                    Sequelize, CSS, and HTML. As a project created at the very beginning of my education in
                    React, the app is not as functional as intended and will be updated shortly.
                    </p>
                    <div className='buttons-div'>
                      <a
                        href='https://git.generalassemb.ly/mholzman/Fooder_Project2'
                        target='_blank'
                        className='github-button-link'
                        rel='noopener noreferrer'
                      >
                        <button className='github-button'>GitHub</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id='flip-box' className='soccer-div-container'>
              <div id='flip-box-inner'>
                <div id='flip-box-front'>
                  <img src='https://i.imgur.com/hcaxG8m.jpg' alt='beatTheKeep' id='soccer-img' />
                </div>
                <div id='flip-box-back' className='soccer-back-card'>
                  <div className='back-card-text' id='soccer-flip-text'>
                    <h2 id='card-title-soccer'>Beat the Keeper Game</h2>
                    <p id='card-text'>In competitive sports, it is rare to find such an important situation
                    other than a soccer penalty shootout where there is a heavy reliance on luck rather than
                    skill. Beat the Keeper arcade game tries to mimic the odds the goalie and the shooter
                    have of winning this duel. I used photoshop to create the visuals and css to make the
                    animations. As my first project as a web developer, I am very proud with what I could
                    accomplish, but also realize the huge potential for improvement in functionality, design
                    and synchronicity.
                    </p>
                    <div className='buttons-div'>
                      <a
                        href='https://pages.git.generalassemb.ly/mholzman/MCHolzman-beatTheKeeper-Project-1/'
                        target='_blank'
                        className='live-site-button-link'
                        rel='noopener noreferrer'
                      >
                        <button className='live-site-button'>Live Site</button>
                      </a>
                      <a
                        href='https://pages.git.generalassemb.ly/mholzman/MCHolzman-beatTheKeeper-Project-1/'
                        target='_blank'
                        className='github-button-link'
                        rel='noopener noreferrer'
                      >
                        <button className='github-button'>GitHub</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='my-work-my-designs-div'>
              <h2 className='designs-title'>DESIGN</h2>

              <div className='my-designs-business-cards-div1'>
                <img src={businessCard1} alt='' className='business-card-img-1' />
                <img src={businessCard2} alt='' className='business-card-img-2' />
              </div>

              <div className='my-designs-business-cards-div2'>
                <img src={mixBusinessCard1} alt='' className='mix-business-card-img-1' />
                <img src={mixBusinessCard2} alt='' className='mix-business-card-img-2' />
              </div>

              <div id='slider'>
                <figure>
                  <img class='cuda-logo-slides' src={cudaLogo1} onContextMenu='return false;' alt='' />
                  <img class='cuda-logo-slides' src={cudaLogo2} onContextMenu='return false;' alt='' />
                  <img class='cuda-logo-slides' src={cudaLogo3} onContextMenu='return false;' alt='' />
                  <img class='cuda-logo-slides' src={cudaLogo4} onContextMenu='return false;' alt='' />
                  <img class='cuda-logo-slides' src={cudaLogo1} onContextMenu='return false;' alt='' />
                </figure>
              </div>

              <video controls autoPlay loop muted className='cuda-site-vid'>
                <source src={cudaSiteVid} type='video/mp4' />
              </video>

              <video controls autoPlay loop muted className='nsf-site-vid'>
                <source src={NSFsiteVid} type='video/mp4' />
              </video>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default MyWork
