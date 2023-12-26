import React from "react";
import { useSwiper } from "swiper/react";

export default function SwiperNavBtn() {
  const swiper = useSwiper();

  return (
    <div className="trending-header-right">
      <button onClick={() => swiper.slidePrev()}>
        <img src="/images/arrowback.png" alt="" />
      </button>
      <button onClick={() => swiper.slideNext()}>
        <img src="/images/arrowforward.png" alt="" />
      </button>
    </div>
  );
}
