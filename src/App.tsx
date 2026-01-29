import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import TwNavbar from "./components/tw/TwNavbar";
import TwFooter from "./components/tw/TwFooter";
import HomeTW from "./pages/HomeTW";
import ProductsPage from "./pages/ProductsPage";
import NewProductPage from "./pages/NewProductPage";
import AboutTW from "./pages/AboutTW";
import CalcsPage from "./pages/CalcsPage";

export default function App() {
  return (
    <BrowserRouter>
      <TwNavbar />
      

      <Routes>
        <Route path="/" element={<HomeTW />} />
        <Route path="/about" element={<AboutTW />} />
        <Route path="/productos" element={<ProductsPage />} />
        <Route path="/new_product" element={<NewProductPage />} />
        <Route path="/calcs" element={<CalcsPage />} />
      </Routes>

      <TwFooter />
    </BrowserRouter>
  );
}