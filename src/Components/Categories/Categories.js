import React from "react";
import { Link, Outlet } from "react-router-dom";
import ProductCard from "../Product/ProductCard";
import ProductData from "../ProductData/myProducts";
import "./Categories.css";

export default function Categories() {
  return (
    <div className="categories-hero-wrapper">
      <div className="proud-products-wrapper">
        {Object.values(ProductData).map((product) => {
          return (
            <ProductCard
              id={product.productId}
              popularName={product.productTitle}
              popularImage={product.productlgImage}
              popularPrice={"$" + product.productPrice}
            />
          );
        })}
      </div>
    </div>
  );
}
