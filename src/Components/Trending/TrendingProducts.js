import React from "react";
import { Link } from "react-router-dom";
import  "./TrendingProducts.css"

export default function TrendingProducts(props) {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="trending-product-card">
      <Link onClick={scrollToTop} to={`/categories/product/${props.id}`}>
        <img className="trending-product-image" src={props.image} alt="" />
      </Link>

      <div className="trending-products-card-text">
        <p>{props.title}</p>
        <h4>{props.price}</h4>
      </div>
    </div>
  );
}
