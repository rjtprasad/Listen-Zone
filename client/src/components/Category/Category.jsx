import React from "react";
import Products from "../Products/Products";

import "./Category.scss";


const Category = () => {
  return (
    <div className="category-main-content">
      
      <div className="layout">
		<div className="category-title">Earbuds</div>
        <Products innerPageTitle={true}/>
      </div>
    </div>
  );
};

export default Category;
