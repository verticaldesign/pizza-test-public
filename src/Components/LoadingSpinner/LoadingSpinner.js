import React from "react";
import "./LoadingSpinner.css";

const pizzaIllustration = require("../../Images/pizza_illustration.png");

const LoadingSpinner = () => {
  return (
    <img className="loading-spinner" src={pizzaIllustration} alt="loading" />
  );
};

export default LoadingSpinner;
