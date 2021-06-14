import React, { Component } from 'react'
import './style.css'

import tresensalandingmockimg1 from '../assets/TS-landing-page-mockup-img.png'
import tresensalandingmockimg2 from '../assets/TS-Mockup-Iteration-1.png'

import photographymockimg1 from '../assets/Notions–website-Mock-1.png'
import photographymockimg2 from '../assets/Notions–website-Mock-2.png'
import photographymockimg3 from '../assets/Notions–website-Mock-3.png'
import photographymockimg4 from '../assets/Notions–website-Mock-4.png'

import cudamockimg1 from '../assets/Cuda-surf-snow-one.png'
import cudamockimg2 from '../assets/Cuda-surf-mock-two.png'
import cudamockimg3 from '../assets/Cuda-snow-mock-three.png'

import NSFsiteVid from '../assets/NSF-site.mp4'


class WebDesign extends Component {
  render () {
    return (
      <div className='graphic-design-page'>

        <div className='my-designs-tresensa-div'>
          <img src={tresensalandingmockimg1} alt='' className='ts-mock-img-1' />
          <img src={tresensalandingmockimg2} alt='' className='ts-mock-img-2' />
        </div>
        <div className='my-designs-photography-div'>
          <img src={photographymockimg1} alt='' className='photography-mock-img-1' />
          <img src={photographymockimg2} alt='' className='photography-mock-img-2' />
          <img src={photographymockimg3} alt='' className='photography-mock-img-3' />
          <img src={photographymockimg4} alt='' className='photography-mock-img-4' />
        </div>
        <div className='my-designs-cuda-mock-div-1'>
          <img src={cudamockimg1} alt='' className='cuda-mock-img-1' />
        </div>
        <div className='my-designs-cuda-mock-div-2'>
          <img src={cudamockimg2} alt='' className='cuda-mock-img-2' />
          <img src={cudamockimg3} alt='' className='cuda-mock-img-3' />
        </div>

        <video controls autoPlay loop muted className='nsf-site-vid'>
          <source src={NSFsiteVid} type='video/mp4' />
        </video>
            
      </div>
    )
  }
}

export default WebDesign
