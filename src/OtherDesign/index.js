import React, { Component } from 'react'
import './style.css'

import businessCard1 from '../assets/business-card.jpg'
import businessCard2 from '../assets/business-card-back.jpg'
import mixBusinessCard1 from '../assets/mix-design-front.jpg'
import mixBusinessCard2 from '../assets/mix-design-back.jpg'
import cbdimg1 from '../assets/cbd-mock-light-blue.png'
import cbdimg2 from '../assets/cbd-mock-dark-blue.png'
import cbdimg3 from '../assets/cbd-mock-purple.png'

class OtherDesign extends Component {
  render () {
    return (
      <div className='graphic-design-page'>

        <div className='my-designs-cbd-div'>
          <img src={cbdimg1} alt='' className='cbd-mock-img-1' />
          <img src={cbdimg2} alt='' className='cbd-mock-img-2' />
          <img src={cbdimg3} alt='' className='cbd-mock-img-3' />
        </div>

        <div className='my-designs-business-cards-div1'>
          <img src={businessCard1} alt='' className='business-card-img-1' />
          <img src={businessCard2} alt='' className='business-card-img-2' />
        </div>

        <div className='my-designs-business-cards-div2'>
          <img src={mixBusinessCard1} alt='' className='mix-business-card-img-1' />
          <img src={mixBusinessCard2} alt='' className='mix-business-card-img-2' />
        </div>
            
      </div>
    )
  }
}

export default OtherDesign
