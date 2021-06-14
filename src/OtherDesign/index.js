import React, { Component } from 'react'
import './style.css'

import businessCard1 from '../assets/business-card.jpg'
import businessCard2 from '../assets/business-card-back.jpg'
import mixBusinessCard1 from '../assets/mix-design-front.jpg'
import mixBusinessCard2 from '../assets/mix-design-back.jpg'

class OtherDesign extends Component {
  render () {
    return (
      <div className='graphic-design-page'>

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
