import React from 'react'

import bannerImg from '../../../assets/bannerImg.png'
import './Banner.scss'

const Banner = () => {
  return (
    <div className='hero-banner'>
      <div className='content'>
        <div className='text-content'>
          <h1>
            Latest Headphones
          </h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, ad.</p>
          <div className='ctas'>
            <button className='banner-cta'>Buy Now</button>
          </div>
        </div>
        
        <img className='banner-img' src={bannerImg} alt='banner'/>
      </div>
    </div>
  )
}

export default Banner