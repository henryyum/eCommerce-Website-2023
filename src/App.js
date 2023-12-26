import "./styles.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import HomePage from "./Components/HomePage";
import Categories from "./Components/Categories/Categories";
import CategoriesLayout from "./Components/Categories/CategoriesLayout";
import Furnitures from "./Components/Categories/Furnitures";
import Electronics from "./Components/Categories/Electronics";
import Lamps from "./Components/Categories/Lamps";
import Kitchen from "./Components/Categories/Kitchen";
import Chairs from "./Components/Categories/Chairs";
import SkinCare from "./Components/Categories/SkinCare";
import ProductPage from "./Components/Product/ProductPage";
import { CartProvider } from "./Components/Cart/CartContext";

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="product" element={<ProductPage />} />

            <Route path="categories" element={<CategoriesLayout />}>
              <Route index element={<Categories />} />
              <Route path="furnitures" element={<Furnitures />} />
              <Route path="electronics" element={<Electronics />} />
              <Route path="lamps" element={<Lamps />} />
              <Route path="kitchen" element={<Kitchen />} />
              <Route path="chairs" element={<Chairs />} />
              <Route path="skincare" element={<SkinCare />} />
              <Route path="product/:id" element={<ProductPage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}
