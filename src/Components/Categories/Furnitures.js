import React from "react";
import ProductCard from "../Product/ProductCard";
import ProductData from "../ProductData/myProducts";
import "./Categories.css";

export default function Furnitures() {
  const FurnitureProducts = Object.values(ProductData).filter(
    (product) => product.productCategory === "Furnitures"
  );
  return (
    <div className="categories-hero-wrapper">
      <div className="proud-products-wrapper item-grid">
        {FurnitureProducts.map((product) => (
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
