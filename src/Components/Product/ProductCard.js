import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

export default function ProductCard(props) {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="popular-product-card">
      <Link onClick={scrollToTop} to={`/categories/product/${props.id}`}>
        <img
          className="popular-product-image"
          src={props.popularImage}
          alt=""
        />

        <div className="popular-product-card-text">
          <p>{props.popularName}</p>
          <h4>{props.popularPrice}</h4>
        </div>
      </Link>
    </div>
  );
}
