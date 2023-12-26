import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Cart/CartContext";
import "./Header.css";

export default function Header(props) {
  const { hamburgerIsOpen, setHamburgerIsOpen } = useContext(CartContext);

  const { toggleIsOpen } = useContext(CartContext);

  return (
    <div className="header-wrapper">
      <div className="header">
        <div className="header-left">
          <div className="header-hamburger">
            <img
              className="header-hamburger-icon"
              onClick={toggleIsOpen}
              src="/images/hamburger.png"
              alt=""
            />
            {hamburgerIsOpen && (
              <div className="header-hamburgerMenu">
                <nav>
                  <Link to="categories">CATEGORIES</Link>
                  <Link to="categories/product/19">PRODUCT PAGE</Link>
                </nav>
              </div>
            )}
          </div>
          <Link className="header-icon-link" to="..">
            <img
              className="header-icon"
              src="https://minimalist-e-commerce.vercel.app/static/media/newlogo2.913a6896d5b7d39d8bf6.png"
              alt=""
            />
          </Link>
        </div>

        <div className="header-right">
          <Link to="categories">
            <button className="header-routes">CATEGORIES</button>
          </Link>
          <Link to="categories/product/19">
            <button className="header-routes">PRODUCT PAGE</button>
          </Link>
          <button onClick={props.handleClick}>
            <img
              className="header-cart"
              src="/images/shopping-cart.png"
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  );
}
