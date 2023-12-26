import React from "react";
import { Link } from "react-router-dom";
import "./ShopCard.css";

export default function ShopCard1() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="ShopCard">
      <div className="ShopCard1-left">
        <h2 className="ShopCard-h2">Creative harmonious living</h2>
        <h4 className="ShopCard-h4">
          RAOUF Products are all made to standard sizes so that you can mix and
          match them freely.
        </h4>
        <Link to="categories">
          <button onClick={scrollToTop} className="ShopCard-btn">
            SHOP NOW
          </button>
        </Link>
      </div>

      <div className="ShopCard1-right">
        <img
          className="ShopCard-img"
          src="https://minimalist-e-commerce.vercel.app/static/media/banner1.021adea5caa612e7dea0.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
