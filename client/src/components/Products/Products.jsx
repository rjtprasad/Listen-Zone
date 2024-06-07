import React from 'react'
import Product from './Product/Product'

import './Products.scss'

const Products = ({innerPageTitle, title}) => {
  return (
    <div className='products-container'>
      {!innerPageTitle && <div className='sec-heading'>{title}</div>}
        <div className='products'>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </div>
      
    </div>
  )
}

export default Products