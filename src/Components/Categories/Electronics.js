import React from "react";
import ProductCard from "../Product/ProductCard";
import ProductData from "../ProductData/myProducts";
import "./Categories.css";

export default function Electronics() {
  const ElectronicProducts = Object.values(ProductData).filter(
    (product) => product.productCategory === "Electronics"
  );
  return (
    <div className="categories-hero-wrapper">
      <div className="proud-products-wrapper item-grid">
        {ElectronicProducts.map((product) => (
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
