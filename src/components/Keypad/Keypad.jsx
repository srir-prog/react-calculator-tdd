import React from "react";
import PropTypes from "prop-types";
import "./Keypad.css";
import Key from "./../Key/Key";

const Keypad = ({
  callOperator,
  numbers,
  operators,
  setOperator,
  updateDisplay,
}) => {
  const numberKeys = numbers.map((number) => <p>{number}</p>);
  const operatorKeys = operators.map((operator) => <p>{operator}</p>);
  return (
    <div className="keypad-container">
      <div className="numbers-container">{numberKeys}</div>
      <div className="operators-container">{operatorKeys}</div>
      <Key keyAction={callOperator} keyType="" keyValue="" />
    </div>
  );
};

Keypad.propTypes = {
  callOperator: PropTypes.func.isRequired,
  setOperator: PropTypes.func.isRequired,
  updateDisplay: PropTypes.func.isRequired,
  numbers: PropTypes.array.isRequired,
  operators: PropTypes.array.isRequired,
};

export default Keypad;
