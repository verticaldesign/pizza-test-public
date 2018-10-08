import React from "react";
import PropTypes from "prop-types";
const LoadingOverlay = props => {
  return (
    <div id="loading-overlay" className={props.loaded ? "loaded" : ""}>
      <div>Loading</div>
    </div>
  );
};
LoadingOverlay.defaultProps = {
  loaded: false
};
LoadingOverlay.propTypes = {
  loaded: PropTypes.bool
};

export default LoadingOverlay;
