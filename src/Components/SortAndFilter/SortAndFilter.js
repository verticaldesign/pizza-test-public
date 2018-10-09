import React, { Component } from "react";
import PropTypes from "prop-types";

class SortAndFilter extends Component {
  handleChange = e => {
    this.props.handleFilterChange(e.target.value);
  };
  handleSort = e => {
    //e.preventDefault();
    this.props.handleSort(e);
  };
  render() {
    return (
      <form className={this.props.loaded ? "" : "hidden"}>
        <input
          disabled={this.props.loaded ? null : "disabled"}
          type="text"
          onChange={this.handleChange}
          value={this.props.filterText}
        />
        <button
          disabled={this.props.loaded ? null : "disabled"}
          onClick={this.handleSort}
        >
          Sort
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
