import React from "react";
import PropTypes from "prop-types";

const Keypad = ({
  callOperator,
  numbers,
  operators,
  setOperator,
  updateDisplay,
}) => {
  return <div className="keypad-container" />;
};

Keypad.propTypes = {
  callOperator: PropTypes.func.isRequired,
  setOperator: PropTypes.func.isRequired,
  updateDisplay: PropTypes.func.isRequired,
  numbers: PropTypes.array.isRequired,
  operators: PropTypes.array.isRequired,
};

export default Keypad;