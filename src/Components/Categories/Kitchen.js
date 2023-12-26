import React from "react";
import ProductCard from "../Product/ProductCard";
import ProductData from "../ProductData/myProducts";
import "./Categories.css"

export default function Kitchen() {
  const KitchenProducts = Object.values(ProductData).filter(
    (product) => product.productCategory === "Kitchen"
  );
  return (
    <div className="categories-hero-wrapper">
      <div className="proud-products-wrapper item-grid">
        {KitchenProducts.map((product) => (
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
