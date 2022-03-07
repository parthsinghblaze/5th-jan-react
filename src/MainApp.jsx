import React from "react";
import Nav from "./ReactRouter/component/Nav";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from "./ReactRouter/pages/Home";
import About from "./ReactRouter/pages/About";
import Contact from "./ReactRouter/pages/Contact";
import Product from "./ReactRouter/pages/Product";
import Html from "./ReactRouter/pages/Html";
import Js from "./ReactRouter/pages/Js";
import Css from "./ReactRouter/pages/Css";
function MainApp() {
  return (
    <>
      <Nav />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="product" element={<Product />}>
          <Route path="html" element={<Html />} />
          <Route path="js" element={<Js />} />
          <Route path="css" element={<Css />} />
        </Route>
      </Routes>
    </>
  );
}

export default MainApp;
