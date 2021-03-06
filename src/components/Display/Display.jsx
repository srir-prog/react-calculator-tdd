import React from "react";
import "./Display.css";
import PropTypes from "prop-types";

const Display = ({ displayValue }) => {
  return (
    <div className="display-container">
      <p className="display-value">{displayValue}</p>
    </div>
  );
};

Display.propTypes = {
  displayValue: PropTypes.string.isRequired,
};

export default Display;
