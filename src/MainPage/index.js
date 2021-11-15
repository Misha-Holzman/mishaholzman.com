import React, { Component } from 'react'
import './style.css'
// import { Link, animateScroll as scroll } from "react-scroll";

import colorArrow from '../assets/arrow-color.png'


class MainPage extends Component {

  render () {
    return (
      <div className='main-page-container'>
        <div className='background-globe'>
          <h2 className='globe-text'>Web Designer and Developer</h2>
          <svg viewBox='0 0 160 160' width='160' height='160'>
            <circle cx='80' cy='80' r='50' />
            <g transform=' matrix(01.266, -0.5, 0.25, 0.433, 80, 80)'>
              <path
                d='M 0,70 A 65,70 0 0,0 65,0 5,5 0 0,1 75,0 75,70 0 0,1 0,70Z'
                fill='#FFF'
              >
                <animateTransform
                  attributeName='transform'
                  type='rotate'
                  from='360 0 0'
                  to='0 0 0'
                  dur='4s'
                  repeatCount='indefinite'
                />
              </path>
            </g>

          </svg>
        </div>
        <svg viewBox='0 0 2500 800' id='newSvg'>
          <symbol id='s-text'>
            <text text-anchor='middle'
              x='15.5%'
              y='26%'
              className='text--line'
              id='textLocation1'
            >
              creative
            </text>
            <text text-anchor='middle'
              x='82%'
              y='26%'
              className='text--line2'
              id='textLocation2'
            >
              solutions
            </text>

          </symbol>

          <g class='g-ants'>
            <use href='#s-text'
              class='text-copy' />
            <use href='#s-text'
              class='text-copy' />
            <use href='#s-text'
              class='text-copy' />
            <use href='#s-text'
              class='text-copy' />
            <use href='#s-text'
              class='text-copy' />
          </g>

        </svg>
        {/* <img
          src='https://i.imgur.com/wT3za4V.png'
          height='50px'
          className='shadow'
          alt=''
        /> */}
        <a href='#about-page' id='link'>
          <img
            src={colorArrow}
            height='50px'
            className='arrow-to-about'
            alt=''
          />
        </a>
      </div>
    )
  }
}

export default MainPage
