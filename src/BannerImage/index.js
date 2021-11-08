import React, { Component } from 'react'
import './style.css'

import ThreeComputerBannerImage from '../assets/ThreeComputerBannerImage.png'


class BannerImage extends Component {
  render () {
    return (
      <div className='graphic-design-page'>
        <div className='graphic-designs-img-div'>
          <img src={ThreeComputerBannerImage} alt='' className='three-computer-banner-image' />

        </div>
      </div>
    )
  }
}

export default BannerImage
