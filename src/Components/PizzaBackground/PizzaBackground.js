import React from "react";
import PropTypes from "prop-types";
import "./PizzaBackground.css";

const pizzaPhoto = require("../../Images/pizza.jpg");

const PizzaBackground = props => {
  return (
    <div id="pizza-background" className={props.loaded ? "loaded" : ""}>
      <img src={pizzaPhoto} alt="Pizza Background" />
    </div>
  );
};
PizzaBackground.defaultProps = {
  loaded: false
};
PizzaBackground.propTypes = {
  loaded: PropTypes.bool
};

export default PizzaBackground;
