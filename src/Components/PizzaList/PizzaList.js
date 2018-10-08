import React from "react";
import PropTypes from "prop-types";

const PizzaList = props => {
  if (props.loaded) {
    return <div>{renderPizzaList(props.pizzas)}</div>;
  } else {
    return <div>loading</div>;
  }
};

function renderPizzaList(pizzas) {
  let pizzaList = pizzas.map(pizza => {
    return <div>{pizza}</div>;
  });
  return pizzaList;
}
PizzaList.defaultProps = {
  pizzas: [],
  loaded: false
};
PizzaList.propTypes = {
  pizzas: PropTypes.arrayOf(PropTypes.string),
  loaded: PropTypes.bool
};

export default PizzaList;
