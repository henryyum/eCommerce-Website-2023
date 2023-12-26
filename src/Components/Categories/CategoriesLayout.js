import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { CartContext } from "../Cart/CartContext";
import "./Categories.css";

export default function CategoriesLayout(props) {
  const { hamburgerIsOpen, setHamburgerIsOpen } = useContext(CartContext);
  const { toggleIsOpen } = useContext(CartContext);
  const categoriesClass = hamburgerIsOpen
    ? "categories-open"
    : "categories-wrapper";

  return (
    <div className={categoriesClass}>
      <div className="categories-header">
        <Link to="..">
          <button className="categories-home">
            <img
              className="backtohome-img"
              src="../images/arrowbackblack.png"
              alt=""
            />
            <h1>Back to home</h1>
          </button>
        </Link>

        <div className="categories-links">
          <Link className="categorylink" to=".">
            All
          </Link>
          <Link className="categorylink" to="furnitures">
            Furnitures
          </Link>
          <Link className="categorylink" to="electronics">
            Electronics
          </Link>
          <Link className="categorylink" to="lamps">
            Lamps
          </Link>
          <Link className="categorylink" to="kitchen">
            Kitchen
          </Link>
          <Link className="categorylink" to="chairs">
            Chairs
          </Link>
          <Link className="categorylink" to="skincare">
            Skin Care
          </Link>
        </div>
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
}
