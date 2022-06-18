import React, { useState, useEffect } from "react";
import DropDown from "./DropDown";

import "./tempapp.css";
import { celcius, fahrenheit } from "./App";

const TempInput = (props) => {
  const [units, setUnits] = useState('');

  const {
    dropDowntemp,
    setDropDownTemp,
    calculateTemp,
    updateParentState,
    convertedTemp,
    numericalInput,
    setNumericalInput,
  } = props;

//   const temperatures = {
//     fahrenheit: "Fahrenheit",
//     celcius: "Celcius",
//   };

  //this should take the drop down value clicked on and store it in state
  const handleDropDownChange = (e) => {
      e.preventDefault();
      console.log("do you come here???", e)
      console.log("drop down event", e.target.value);
      setDropDownTemp(e.target.value);
  };

  const handleNumericalSubmit = (x, y) => {
    //event.preventDefault();
    console.log(`numerical input ${numericalInput}`)
    console.log("drop down value:", dropDowntemp)
    //here we need to invoke a function that will use the values
    // that have been updated, so we'll invoke the calcTemp function here
    calculateTemp(numericalInput, dropDowntemp);
  };

 
  //takes the value and sets state
  const numericalChange = (event) => {
    event.preventDefault();
    //console.log("numerical event", event)
    console.log(`numerical change: ${parseInt(event.target.value)}`);
    setNumericalInput(parseInt(event.target.value));
  };

  return (
    <div>
      <form id="tempCalc" onSubmit={handleDropDownChange}>
        <label>Degrees</label><br />
        <input type="number" className="temp" onChange={numericalChange} /><br />

        <DropDown 
        units={units}
        handleDropDownChange={handleDropDownChange}
        />

        <button
          type="submit"
          className="button"
          onClick={(e) => {
              e.preventDefault();
              handleNumericalSubmit(numericalInput);
            }}
        >
          Convert
        </button>
        <br />
        <span id="result-container ui container">
          <h3>{convertedTemp}</h3>
        </span>
      </form>
    </div>
  );
};

export default TempInput;
