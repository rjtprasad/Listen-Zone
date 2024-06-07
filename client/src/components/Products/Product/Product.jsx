import React from 'react'
import prod from "../../../assets/products/earbuds-prod-3.webp"
import './Product.scss'

const Product = () => {
  return (
    <div className='product-card'>
      <div className='thumbnail'>
        <img src={prod} alt="earbud" />
      </div>
      <div className='prod-details'>
        <span className='name'>Headphone</span>
        <span className='price'>&#8377;7999</span>
      </div>
    </div>
  )
}

export default Product