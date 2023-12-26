import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

export default function Hero() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="hero-wrapper">
      <Link
        onClick={scrollToTop}
        to="categories/furnitures"
        className="hero-imgcontainer"
      >
        <img className="hero-imglive" src="/images/home-img-1.jpeg" alt="" />
        <h3>Live Comfortably</h3>
      </Link>

      <Link
        onClick={scrollToTop}
        to="categories/skincare"
        className="hero-imgcontainer"
      >
        <img className="hero-imgoffice" src="/images/home-img-2.jpeg" alt="" />
        <h3>Skincare</h3>
      </Link>

      <div className="hero-imgright-container">
        <Link
          onClick={scrollToTop}
          to="categories/kitchen"
          className="hero-imgcontainer hero-right"
        >
          <img
            className="hero-imgkitchen"
            src="/images/home-img-3.jpeg"
            alt=""
          />
          <h3>Kitchen</h3>
        </Link>

        <Link
          onClick={scrollToTop}
          to="categories/electronics"
          className="hero-imgcontainer hero-right"
        >
          <img
            className="hero-imgbedroom"
            src="/images/home-img-4.jpeg"
            alt=""
          />
          <h3>Electronics</h3>
        </Link>
      </div>
    </div>
  );
}
