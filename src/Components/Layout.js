import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import CartPage from "./Cart/CartPage";
import { CartContext } from "./Cart/CartContext";

export default function Layout() {
  const { isOpen, setIsOpen } = useContext(CartContext);

  const toggleMenu = () => {
    setIsOpen((open) => !open);
  };

  console.log(isOpen);
  return (
    <div>
      <Header handleClick={toggleMenu} />
      <Outlet />
      <Footer />
      <CartPage isOpen={isOpen} handleClick={toggleMenu} />
    </div>
  );
}
