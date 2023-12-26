import React, { useContext } from "react";
import CartDisplay from "./CartDisplay";
import { CartContext } from "./CartContext";
import "./Cart.css";

export default function CartPage(props) {
  const { cart, clearCart, totalPrice } = useContext(CartContext);

  const styles = {
    display: props.isOpen ? "block" : "none",
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div style={styles} className="cart-wrapper">
        <div className="cart-title">
          <h1>Your Shopping Cart</h1>
          <button
            onClick={() => {
              props.handleClick();
              scrollToTop();
            }}
            className="cart-x-btn"
          >
            X
          </button>
        </div>
        <div className="cart-clearandcheck">
          <p className="cart-clearAll" onClick={clearCart}>
            Clear All Items
          </p>

          <div className="cart-totalPrice">
            <h1>Total: ${totalPrice}</h1>
            <button className="CheckoutBtn">Checkout</button>
          </div>
        </div>

        {cart.length ? (
          <CartDisplay />
        ) : (
          <div className="empty-cart">
            <img
              className="cart-img"
              src="https://minimalist-e-commerce.vercel.app/static/media/empty-cart.17f48bd13327a233e04a.png"
              alt=""
            />
            <h1>Your cart is empty</h1>
            <button onClick={props.handleClick}>Continue Browsing</button>
          </div>
        )}
      </div>
    </>
  );
}
