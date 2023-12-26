import React from "react";
import ProductCard from "../Product/ProductCard";
import ProductData from "../ProductData/myProducts";
import "./Categories.css";

export default function Chairs() {
  const chairProducts = Object.values(ProductData).filter(
    (product) => product.productCategory === "Chairs"
  );
  return (
    <div className="categories-hero-wrapper">
      <div id="category-furniture" className="proud-products-wrapper item-grid">
        {chairProducts.map((product) => (
          <ProductCard
            id={product.productId}
            popularName={product.productTitle}
            popularImage={product.productlgImage}
            popularPrice={"$" + product.productPrice}
          />
        ))}
      </div>
    </div>
  );
}
