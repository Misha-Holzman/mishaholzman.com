import React, { Component } from 'react'
import './style.css'

class Navbar extends Component {
  render () {
    return (
      <div className='nav-container' id='navbar'>
        <div className='title'>
          <div id='my-name'>
            <strong>Misha</strong> Holzman
          </div>
        </div>
        <ul className='nav-bullets'>
          <li className='links'>
            <div class='section'>
              <div class='section__item'>
                <a
                  href='#about-page'
                  class='sm-link sm-link_padding-all sm-link6 nav-text-links'
                >
                  <span class='sm-link__label'>About Me</span>
                </a>
              </div>
            </div>
          </li>
          <li className='links'>
            <div class='section'>
              <div class='section__item'>
                <a
                  href='#my-work'
                  class='sm-link sm-link_padding-all sm-link6 nav-text-links'
                >
                  <span class='sm-link__label'>My Work</span>
                </a>
              </div>
            </div>
          </li>
          <li className='links'>
            <div class='section'>
              <div class='section__item'>
                <a
                  href='#contact-page'
                  class='sm-link sm-link_padding-all sm-link6 nav-text-links'
                >
                  <span class='sm-link__label'>Contact</span>
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}

export default Navbar
