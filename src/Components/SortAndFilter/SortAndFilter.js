// import React from "react";
// import PropTypes from "prop-types";
// const SortAndFilter = props => {
//   return (
//     <div className={props.loaded ? "" : "hidden"}>
//       <input disabled={props.loaded ? null : "disabled"} type="text" />
//       <button disabled={props.loaded ? null : "disabled"}>Sort</button>
//     </div>
//   );
// };
// SortAndFilter.propTypes = {};

// export default SortAndFilter;

import React, { Component } from "react";
import PropTypes from "prop-types";

class SortAndFilter extends Component {
  render() {
    return (
      <div className={this.props.loaded ? "" : "hidden"}>
        <input disabled={this.props.loaded ? null : "disabled"} type="text" />
        <button disabled={this.props.loaded ? null : "disabled"}>Sort</button>
      </div>
    );
  }
}

SortAndFilter.propTypes = {
  loaded: PropTypes.bool,
  searchText: PropTypes.string
};

SortAndFilter.defaultProps = {
  SortAndFilter: "",
  loaded: false
};

export default SortAndFilter;
