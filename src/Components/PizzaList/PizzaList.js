import React from "react";
import PropTypes from "prop-types";

const PizzaList = props => {
  return <div>{renderPizzaList(props.pizzas)}</div>;
};

function renderPizzaList(pizzas) {
  let pizzaList = pizzas.map(pizza => {
    return <div>{pizza}</div>;
  });
  return pizzaList;
}
PizzaList.defaultProps = {
  pizzas: []
};
PizzaList.propTypes = {
  pizzas: PropTypes.arrayOf(PropTypes.string)
};

export default PizzaList;
