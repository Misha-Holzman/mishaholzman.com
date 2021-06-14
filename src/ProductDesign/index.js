import React, { Component } from 'react'
import './style.css'

import cbdimg1 from '../assets/cbd-mock-light-blue.png'
import cbdimg2 from '../assets/cbd-mock-dark-blue.png'
import cbdimg3 from '../assets/cbd-mock-purple.png'

class ProductDesign extends Component {
  render () {
    return (
      <div className='graphic-design-page'>

        <div className='my-designs-cbd-div'>
          <img src={cbdimg1} alt='' className='cbd-mock-img-1' />
          <img src={cbdimg2} alt='' className='cbd-mock-img-2' />
          <img src={cbdimg3} alt='' className='cbd-mock-img-3' />
        </div>
            
      </div>
    )
  }
}

export default ProductDesign
