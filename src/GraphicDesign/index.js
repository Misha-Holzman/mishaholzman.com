import React, { Component } from 'react'
import './style.css'

import cudaLogo1 from '../assets/cuda-logo-sketch.JPG'
import cudaLogo2 from '../assets/cuda-logo-outline.png'
import cudaLogo3 from '../assets/cuda-logo-white.png'
import cudaLogo4 from '../assets/cuda-logo-color.jpg'

import surferGraphic from '../assets/the-surfer.png'
import wavyColorGraphic from '../assets/wavy-color-graphic.png'
import WhaleGraphic from '../assets/whale-geometry.png'
import NumberGraphic from '../assets/3d-number-two-ocean.png'

class GraphicDesign extends Component {
  render () {
    return (
      <div className='graphic-design-page'>
        <div className='graphic-designs-img-div'>
          <img src={surferGraphic} alt='' className='surfer-graphic-img' />
          <img src={wavyColorGraphic} alt='' className='wavy-color-graphic-img' />
          <img src={WhaleGraphic} alt='' className='whale-graphic-img' />
          <img src={NumberGraphic} alt='' className='number-graphic-img' />
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

      </div>
    )
  }
}

export default GraphicDesign
