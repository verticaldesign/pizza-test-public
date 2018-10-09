import React from "react";
import PropTypes from "prop-types";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner.js";

const PizzaList = props => {
  if (props.loaded) {
    return (
      <div className="pizza-list-container">
        {renderPizzaList(props.pizzas, props.filterText, props.sortOrder)}
      </div>
    );
  } else {
    return (
      <div className="pizza-list-container loading">
        <LoadingSpinner />
        <div>Loading</div>
      </div>
    );
  }
};

function renderPizzaList(pizzas, filterText, sortOrder) {
  let pizzaList = pizzas.slice();
  if (filterText !== "") {
    pizzaList = pizzaList.filter(p =>
      p.toUpperCase().includes(filterText.toUpperCase())
    );
  }

  if (sortOrder !== 0) {
    pizzaList.sort((a, b) => {
      if (sortOrder === 1) {
        return a.toUpperCase() > b.toUpperCase();
      } else {
        return b.toUpperCase() > a.toUpperCase();
      }
    });
  }

  pizzaList = pizzaList.map(pizza => {
    return (
      <div className="pizza-item" key={pizza}>
        {pizza}
      </div>
    );
  });
  if (pizzaList.length === 0) {
    return (
      <div className="empty-list">
        Sorry don't have any <span className="u-bold">{filterText}</span> pizzas
      </div>
    );
  }
  return pizzaList;
}

PizzaList.defaultProps = {
  pizzas: [],
  loaded: false,
  filterText: "",
  sortOrder: 0
};
PizzaList.propTypes = {
  pizzas: PropTypes.arrayOf(PropTypes.string),
  loaded: PropTypes.bool,
  filterText: PropTypes.string,
  sortOrder: PropTypes.number
};

export default PizzaList;
