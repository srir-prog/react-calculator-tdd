import React, { useState } from "react";
import "./Calculator.css";
import Display from "./../Display/Display";
import Keypad from "./../Keypad/Keypad";

const Calculator = (props) => {
  const initialState = {
    // value to be displayed in <Display />
    displayValue: "0",
    // values to be displayed in number <Keys />
    numbers: [],
    // values to be displayed in operator <Keys />
    operators: [],
    // operator selected for math operation
    selectedOperator: "",
    // stored value to use for math operation
    storedValue: "",
  };
  const [stateVar] = useState(initialState);
  const { displayValue = "0", numbers = [], operators = [] } = stateVar || {};
  const callOperator = () => {
    console.log("call operation");
  };

  const setOperator = () => {
    console.log("set operation");
  };

  const updateDisplay = () => {
    console.log("update display");
  };
  return (
    <div className="calculator-container">
      <Display displayValue={displayValue} />
      <Keypad
        callOperator={callOperator}
        numbers={numbers}
        operators={operators}
        setOperator={setOperator}
        updateDisplay={updateDisplay}
      />
    </div>
  );
};

export default Calculator;
