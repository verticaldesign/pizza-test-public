import React, { Component } from "react";
import PropTypes from "prop-types";

class SortAndFilter extends Component {
  handleChange = e => {
    console.log("this");
    this.props.handleFilterChange(e.target.value);
  };
  render() {
    return (
      <div className={this.props.loaded ? "" : "hidden"}>
        <input
          disabled={this.props.loaded ? null : "disabled"}
          type="text"
          onChange={this.handleChange}
          value={this.props.filterText}
        />
        <button disabled={this.props.loaded ? null : "disabled"}>Sort</button>
      </div>
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
