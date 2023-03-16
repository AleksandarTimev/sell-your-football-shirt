import React from "react";
import { Navbar } from "./Navigation.js";
import { Products } from "./Products.js";

export const Home = () => {
  return (
    <div className="wrapper">
      <Navbar />
      <Products />
    </div>
  );
};
