import React from "react";
import { MdClose } from "react-icons/md";
import earbud from "../../../assets/products/earbuds-prod-1.webp";
import "./CartItem.scss";

const CartItem = () => {
  return (
    <div className="cart-products">
      <div className="cart-product">
        <div className="image-container">
          <img src={earbud} alt="earbud" />
        </div>
        <div className="prod-details">
          <span className="name">Earbud</span>
          <MdClose className="close-btn" />
          <div className="quantity-buttons">
            <span>-</span>
            <span>2</span>
            <span>+</span>
          </div>
          <div className="text">
            <span>2</span>
            <span>x</span>
            <span className="highlight">
              <span>&#8377; 2000</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
