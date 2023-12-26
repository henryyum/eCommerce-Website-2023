import React from "react";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import TrendingHeader from "./Trending/TrendingHeader";
import ProductCard from "./Product/ProductCard";
import ProudHeader from "./Product/ProudHeader";
import ShopCard1 from "./ShopCard/ShopCard1";
import ShopCard2 from "./ShopCard/ShopCard2";
import Newsletter from "./Newsletter/Newsletter";
import Footer from "./Footer/Footer";
import TrendingProducts from "./Trending/TrendingProducts";
import TrendingSwiper from "./Trending/TrendingSwiper";
import CartPage from "./Cart/CartPage";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperNavBtn from "./SwiperNavBtn";
import ProductData from "./ProductData/myProducts";
import "swiper/css";

export default function HomePage() {
  return (
    <>
      <div className="App">
        <div className="main-wrapper">
          <Hero />

          <TrendingSwiper />

          <div className="ShopCard-wrapper">
            <ShopCard1 />
          </div>

          <ProudHeader />

          <div className="proud-products-wrapper">
            {Object.values(ProductData)
              .slice(0, 8)
              .map((product) => (
                <ProductCard
                  id={product.productId}
                  popularImage={product.productlgImage}
                  popularName={product.productTitle}
                  popularPrice={"$" + product.productPrice}
                />
              ))}
          </div>

          <div className="ShopCard-wrapper">
            <ShopCard2 />
          </div>
        </div>

        <div>
          <Newsletter />
        </div>
      </div>
      <CartPage />
    </>
  );
}
