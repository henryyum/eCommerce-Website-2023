import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import "./Cart.css";

const CartDisplay = () => {
  const { cart, removeFromCart, updateCartItem, totalPrice } =
    useContext(CartContext);

  const incrementQuantity = (item) => {
    const newQuantity = item.quantity + 1;
    updateCartItem({ ...item, quantity: newQuantity });
  };

  const decrementQuantity = (item) => {
    if (item.quantity > 1) {
      const newQuantity = item.quantity - 1;
      updateCartItem({ ...item, quantity: newQuantity });
    }
  };

  return (
    <div className="cartDisplay">
      {cart.map((item, index) => (
        <div className="cart-notEmpty" key={item.productId}>
          <img className="cart-productimg" src={item.productsmImage1} alt="" />
          <div className="cart-notEmptyDetails">
            <h4>{item.productTitle}</h4>
            <div className="cart-display-quantity">
              <p>Quantity: {item.quantity}</p>
              <button
                className="cart-display-quantityBtn"
                onClick={() => decrementQuantity(item)}
              >
                -
              </button>
              <button
                className="cart-display-quantityBtn"
                onClick={() => incrementQuantity(item)}
              >
                +
              </button>
            </div>
            <p>Price: ${item.productPrice * item.quantity}</p>
            <button
              onClick={() => {
                removeFromCart(index);
              }}
              className="cart-item-remove"
            >
              Remove Item
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartDisplay;
