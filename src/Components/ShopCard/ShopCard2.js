import React from "react";
import { Link } from "react-router-dom";
import "./ShopCard.css";

export default function ShopCard2() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="ShopCard">
      <div className="ShopCard2-left">
        <img
          className="ShopCard-img"
          src="https://minimalist-e-commerce.vercel.app/static/media/banner2.03a2ebf8d998e53d1019.jpg"
          alt=""
        />
      </div>

      <div className="ShopCard2-right">
        <h2 className="ShopCard-h2">Comfortable & Elegant Living.</h2>
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
    </div>
  );
}
