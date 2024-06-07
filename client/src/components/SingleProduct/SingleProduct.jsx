import React, { useState } from "react";
import prod from "../../assets/products/earbuds-prod-1.webp";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaCartPlus,
} from "react-icons/fa";
import "./SingleProduct.scss";


const SingleProduct = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img src={prod} alt="earbud" />
          </div>
          <div className="right">
            <span className="name">Product Title</span>
            <span className="price">Product Price</span>
            <span className="description">Product description</span>

            <div className="cart-buttons">
              <div className="quantity-buttons">
                <span
                  onClick={() =>
                    setCount((prev) => (prev > 0 ? prev - 1 : prev))
                  }
                >
                  -
                </span>
                <span>{count}</span>
                <span
                  onClick={() =>
                    setCount((prev) => (prev < 5 ? prev + 1 : prev))
                  }
                >
                  +
                </span>
              </div>
              <button className="add-to-cart-button">
                <FaCartPlus />
                ADD TO CART
              </button>
            </div>

          
              <span className="divider"/>
              <div className="info-item">
                <span className="text-bold">
                  Category:
                  <span>Headphone</span>
                </span>
                <span className="text-bold">
                  Share:
                  <span className="social-icons">
                    <FaFacebookF size={16} />
                    <FaTwitter size={16} />
                    <FaInstagram size={16} />
                    <FaPinterest size={16} />
                  </span>
                </span>
              </div>
            
          </div>
        </div>
        <RelatedProducts/>
      </div>
    </div>
  );
};

export default SingleProduct;
