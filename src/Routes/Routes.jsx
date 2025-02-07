import {Routes as ReactDomRoutes, Route } from "react-router-dom";

import Home from "../assets/components/Home/Home";
import About from "../assets/components/Pages/About/About";
import Products from "../assets/components/Pages/Products/Products";
import Contact from "../assets/components/Pages/Contact/Contact";


function Routes() {
  return (
    <ReactDomRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
    </ReactDomRoutes>
  )
}

export default Routes
