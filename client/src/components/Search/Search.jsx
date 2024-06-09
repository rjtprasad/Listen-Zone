import React from "react";
import { MdClose } from "react-icons/md";
import earbud from "../../assets/products/earbuds-prod-1.webp";

import "./Search.scss";

const Search = ({ setShowSearch }) => {
  return (
    <div className="search-function">
      <div className="form-field">
        <input type="text" autoFocus placeholder="Search for products" />
        <MdClose onClick={() => setShowSearch(false)} />
      </div>
      <div className="search-result-content">
        <div className="search-results">
          <div className="search-result-item">
            <div className="image-container">
              <img src={earbud} alt="earbud" />
            </div>
            <div className="prod-details">
              <span className="name">product name</span>
              <span className="desc">product desc</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
