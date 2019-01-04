import React, { Component } from 'react'
import './style.css'

class MyWork extends Component {
  render () {
    return (
      <div className='main-work-container' id='work-page'>
        <div id='press'>
          <a id='my-work'>
            <h2 className='my-work-title'>MY WORK</h2>
          </a>

          <div className='press-container'>
            <div id='flip-box' className='shaka'>
              <a
                href='https://git.generalassemb.ly/mholzman/Shaka'
                target='_blank'
              >
                <div id='flip-box-inner'>
                  <div id='flip-box-front'>
                    <img src='https://i.imgur.com/bkN5v6m.jpg' alt='' id='shaka-img' />
                  </div>
                  <div id='flip-box-back'>
                    <div className='back-card-text'>
                      <h2 id='card-title-shaka'>Shaka Surf Report</h2>
                      <p id='card-text'>Shaka is the easy to use surf report website for the everyday surfer, demonstrating a Rails backend and React frontend. Enter a zip code for any location within the United States and view the surf conditions for your specific area. Shaka uses data from two separate API’s and a Twilio alert system linked with a cron-job to send a real-time surf report via SMS to the user on weekend mornings. User authentication is implemented to let the user login and stay logged in.
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <br />
            <br />
            <br />
            <br />

            <div id='flip-box' className='winson'>
              <a
                href='https://git.generalassemb.ly/mholzman/Shaka'
                target='_blank'
              >
                <div id='flip-box-inner'>
                  <div id='flip-box-front'>
                    <img src='https://i.imgur.com/Zw3EHBL.jpg' alt='winson' id='winson-img' />
                  </div>
                  <div id='flip-box-back'>
                    <div className='back-card-text'>
                      <h2 id='card-title-winson'>Win Son Restaurant</h2>
                      <p id='card-text'>Many restaurants in NYC have exciting new ideas and strong branding, but have websites that don’t live up to their full potential. The goal of this project was to take a bare, unattractive NYC restaurant website and redesign it to improve the site’s usability while accurately reflecting the restaurant’s unique cuisine and personality. I partnered up with three individuals in the user experience design class to collaborate and create the website. After collaborating with the UX team on idea generation, user stories, and initial wireframes and prototyping, I was in charge of building out the website using React. The design team created High-fidelity wireframes through Zeplin and used InVision prototyping, while I referenced the prototypes for styling, utilized Bulma and Bootstrap for some components, JavaScript and implemented css animation to spice it up.
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div id='flip-box' className='deckOfLegends'>
              <a
                href='https://git.generalassemb.ly/team-b/baseball-hof-deck'
                target='_blank'
              >
                <div id='flip-box-inner'>
                  <div id='flip-box-front'>
                    <img src='https://i.imgur.com/fmqhF6f.jpg' alt='legends' id='legends-img' />
                  </div>
                  <div id='flip-box-back'>
                    <div className='back-card-text'>
                      <h2 id='card-title-legends'>Deck of Legends</h2>
                      <p id='card-text'>Love collecting sports trading cards? Interested in easily finding facts and statistics about a MLB Hall of Fame player? Deck of Legends is a virtual baseball card collecting app for Hall of Fame players. Search for any existing Hall of Fame player and view their person information and statistics. The front-end of this web app is built with React, Bulma, and custom CSS stylings. The back-end integrates a database with two tables, a user table (with email and password authentication), and players (their names, year inducted, primary team, and picture). The statistics will be fetched from a stats API maintained by Major League Baseball. The connection of data to components will be made through Express, Node, and React Router.
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>


            <div id='flip-box' className='fooder'>
              <a
                href='https://git.generalassemb.ly/mholzman/Fooder_Project2'
                target='_blank'
              >
                <div id='flip-box-inner'>
                  <div id='flip-box-front'>
                    <img src='https://i.imgur.com/Y8HWoHe.jpg' alt='fooder' id='fooder-img' />
                  </div>
                  <div id='flip-box-back'>
                    <div className='back-card-text'>
                      <h2 id='card-title-fooder'>Fooder Meal Planner</h2>
                      <p id='card-text'>Are you a busy individual who likes to eat well and eat right? Try Fooder Meal Planner to organize your week and cook easy delicious recipes without breaking a sweat! With tons of recipes to choose from and a fun calendar to plan out your week, you will never worry about planning dinner again. Fooder is build with React, Express, Sequelize, CSS, and HTML. As a project created at the very beginning of my education in React, the app is not as functional as intended and will be updated shortly.
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <br />
            <br />
            <br />
            <br />

            <div id='flip-box' className='soccer'>
              <a
                href='https://git.generalassemb.ly/mholzman/Shaka'
                target='_blank'
              >
                <div id='flip-box-inner'>
                  <div id='flip-box-front'>
                    <img src='https://i.imgur.com/hcaxG8m.jpg' alt='beatTheKeep' id='soccer-img' />
                  </div>
                  <div id='flip-box-back'>
                    <div className='back-card-text'>
                      <h2 id='card-title-soccer'>Beat the Keeper Game</h2>
                      <p id='card-text'>In competitive sports, it is rare to find such an important situation other than a soccer penalty shootout where there is a heavy reliance on luck rather than skill. Beat the Keeper arcade game tries to mimic the odds the goalie and the shooter have of winning this duel. I used photoshop to create the visuals and css to make the animations. As my first project as a web developer, I am very proud with what I could accomplish, but also realize the huge potential for improvement in functionality, design and synchronicity. 
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <br />
            <br />

            {/*
            <div className='shaka-div'>
              <a
                href='https://git.generalassemb.ly/mholzman/Shaka'
                target='_blank'
              >
                <img src='https://i.imgur.com/bkN5v6m.jpg' alt='' className='shaka-site' height='250px' />
              </a>

            </div>

            <div className='winson-div'>
              <a
                href='https://win-son-app.herokuapp.com/'
                target='_blank'
              >
                <img src='https://i.imgur.com/Zw3EHBL.jpg' alt='' height='270px' className='winson-site' />

              </a>
            </div>
            <div className='fooder-div'>
              <a
                href='https://git.generalassemb.ly/mholzman/Fooder_Project2'
                target='_blank'
              >
                <img src='https://i.imgur.com/Y8HWoHe.jpg' alt='' height='370px' className='fooder-site' />

              </a>
            </div>
            <div className='keeper-div'>
              <a
                href='https://pages.git.generalassemb.ly/mholzman/MCHolzman-beatTheKeeper-Project-1/'
                target='_blank'
              >
                <img src='https://i.imgur.com/hcaxG8m.jpg' alt='' className='keeper-site' />
              </a>
            </div>
            */}

          </div>

        </div>
      </div>
    )
  }
}

export default MyWork
