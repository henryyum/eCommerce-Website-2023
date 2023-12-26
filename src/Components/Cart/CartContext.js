import React, { createContext, useState, useEffect } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setHamburgerIsOpen((prevState) => !prevState);
  };

  const categoriesClass = hamburgerIsOpen
    ? "categories-open"
    : "categories-wrapper";

  const totalPrice = cart.reduce(
    (acc, currentItem) => acc + currentItem.productPrice * currentItem.quantity,
    0
  );

  const addToCart = (product) => {
    setIsOpen(true);
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (indexToRemove) => {
    const newCart = [...cart];
    newCart.splice(indexToRemove, 1);
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const updateCartItem = (updatedItem) => {
    setCart((prevCart) => {
      const newCart = [...prevCart];
      const index = newCart.findIndex(
        (item) => item.productId === updatedItem.productId
      );

      if (index !== -1) {
        newCart[index] = updatedItem;
      }
      return newCart;
    });
  };

  const contextValue = {
    cart,
    isOpen,
    totalPrice,
    setIsOpen,
    hamburgerIsOpen,
    setHamburgerIsOpen,
    categoriesClass,
    toggleIsOpen,
    clearCart,
    addToCart,
    removeFromCart,
    updateCartItem,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export { CartProvider, CartContext };
