import React from "react";
import ProductCard from "../Product/ProductCard";
import ProductData from "../ProductData/myProducts";
import "./Categories.css";

export default function Lamps() {
  const LampProducts = Object.values(ProductData).filter(
    (product) => product.productCategory === "Lamps"
  );
  return (
    <div className="categories-hero-wrapper">
      <div className="proud-products-wrapper item-grid">
        {LampProducts.map((product) => (
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
