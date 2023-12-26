import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperNavBtn from "../SwiperNavBtn";
import TrendingHeader from "./TrendingHeader";
import TrendingProducts from "./TrendingProducts";
import myProducts from "../ProductData/myProducts";

export default function TrendingSwiper() {
  const trendingProducts = Object.values(myProducts).filter(
    (product) => product.isTrending
  );
  const [slidesPerView, setslidesPerView] = useState(4);

  const updateSlidesPerView = () => {
    if (window.matchMedia("(max-width: 550px)").matches) {
      setslidesPerView(2);
    } else if (window.matchMedia("(max-width: 800px)").matches) {
      setslidesPerView(2);
    } else if (window.matchMedia("(max-width: 1000px)").matches) {
      setslidesPerView(3);
    } else {
      setslidesPerView(4);
    }
  };

  useEffect(() => {
    updateSlidesPerView();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", updateSlidesPerView);

    return () => {
      window.removeEventListener("resize", updateSlidesPerView);
    };
  }, []);

  return (
    <div className="trending-wrapper">
      <TrendingHeader />

      <Swiper
        spaceBetween={20}
        slidesPerView={slidesPerView}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperNavBtn />

        {trendingProducts.map((product) => (
          <SwiperSlide key={product.productId}>
            <TrendingProducts
              id={product.productId}
              image={product.productlgImage}
              title={product.productTitle}
              price={"$" + product.productPrice}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
