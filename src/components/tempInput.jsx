import React, { useState, useEffect } from "react";
import { Alert, AlertTitle } from "@mui/material"

import DropDown from "./DropDown";
import "./tempapp.css";
import { celcius, fahrenheit } from "./App";

const TempInput = (props) => {
  const [units, setUnits] = useState('');
  const [error, setError] = useState(false);

  const {
    dropDownTemp,
    setdropDownTemp,
    calculateTemp,
    convertedTemp,
    numericalInput,
    setNumericalInput,
  } = props;

  const errorMessage = `No input! Press "refresh" and input a degree and select a unit.`

  //this function will take the drop down value clicked on and store it in state
  const handleDropDownChange = (e) => {
    e.preventDefault();
    setdropDownTemp(e.target.value);
  };

  //this function will handle errors by checking if both values in state have been updated
  //then, it will pass them to the calculateTemp function
  const handleNumericalSubmit = (x, y) => {
    if(numericalInput === null || dropDownTemp === null) {
      setError(true);
    }else{
      calculateTemp(numericalInput, dropDownTemp);
    }
  };

  //takes the value and sets state
  const numericalChange = (event) => {
    event.preventDefault();
    setNumericalInput(parseInt(event.target.value));
  };

  return (
    <div>
      <form id="tempCalc" onSubmit={handleDropDownChange}>
        <label>Degrees</label>
        <br />
        <input type="number" className="temp" onChange={numericalChange} />
        <br />

        <DropDown units={units} handleDropDownChange={handleDropDownChange} />

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
      </form>

      <div>
          { error ? 
            <Alert variant="filled" severity="error">
              <AlertTitle>Error</AlertTitle>
              {errorMessage}</Alert> 
            : <span id="result-container ui container"> <h3>{convertedTemp}</h3> </span>}
      </div>
    </div>
  );
};

export default TempInput;
