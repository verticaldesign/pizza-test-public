import React, { Component } from "react";
import PropTypes from "prop-types";
import { ReactComponent as PizzaIcon } from "../../Images/pizza-SVG.svg";

class SortAndFilter extends Component {
  handleChange = e => {
    this.props.handleFilterChange(e.target.value);
  };
  handleSort = e => {
    e.preventDefault();
    this.props.handleSort(e);
  };
  getSortState = () => {
    if (this.props.sortOrder === 0) {
      return "sort-indicator none";
    } else if (this.props.sortOrder === 1) {
      return "sort-indicator";
    } else {
      return "sort-indicator desc";
    }
  };
  render() {
    let res = this.getSortState();
    return (
      <form className={this.props.loaded ? "" : "hidden"}>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.props.filterText}
          placeholder="Type to filter"
        />
        <button onClick={this.handleSort}>
          Sort
          <PizzaIcon className={this.getSortState()} />
        </button>
      </form>
    );
  }
}

SortAndFilter.propTypes = {
  loaded: PropTypes.bool,
  filterValue: PropTypes.string
};

SortAndFilter.defaultProps = {
  filterValue: "",
  loaded: false
};

export default SortAndFilter;
