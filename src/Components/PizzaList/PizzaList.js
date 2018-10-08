import React from "react";
import PropTypes from "prop-types";

const PizzaList = props => {
  if (props.loaded) {
    return (
      <div className="pizza-list-container">
        {renderPizzaList(props.pizzas, props.filterText, props.sorting)}
      </div>
    );
  } else {
    return <div className="pizza-list-container loading">loading</div>;
  }
};

function renderPizzaList(pizzas, filterText, sorting) {
  let pizzaList = pizzas.slice();
  if (filterText != "") {
    pizzaList = pizzaList.filter(p =>
      p.toUpperCase().includes(filterText.toUpperCase())
    );
  }
  pizzaList = pizzaList.map(pizza => {
    return (
      <div className="pizza-item" key={pizza}>
        {pizza}
      </div>
    );
  });
  return pizzaList;
}

PizzaList.defaultProps = {
  pizzas: [],
  loaded: false,
  filterText: "",
  sorting: 0
};
PizzaList.propTypes = {
  pizzas: PropTypes.arrayOf(PropTypes.string),
  loaded: PropTypes.bool,
  filterText: PropTypes.string,
  sorting: PropTypes.number
};

export default PizzaList;
