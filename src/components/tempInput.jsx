import React, { useState, useEffect } from "react";
import App from "./App";

import "./tempapp.css";
import { celcius, fahrenheit } from "./App";

const TempInput = (props) => {
  const [numericalInput, setNumericalInput] = useState();
  const [units, setUnits] = useState(fahrenheit);

  const {
    // userInput,
    // dropDowntemp,
    // setDropDownTemp,
    // calculateTemp,
    calculatedTemperature,
    // setUserInput,
    updateParentState,
  } = props;

  const temperatures = {
    fahrenheit: "Fahrenheit",
    celcius: "Celcius",
  };

  const handleDropDownChange = (e) => {
    // console.log(e.target.value);
    setUnits(e.target.value);
  };

  const handleUserSubmit = (event) => {
    event.preventDefault();
    console.log(`numerical input${numericalInput}`)
    updateParentState(units, numericalInput);
  };

  // const calculateTemp = () => {
  //     let result;
  //     if(dropDowntemp === 'Celcius'){
  //         result = toCelcius(userInput);
  //         setSpan(`= ${result} Fahrenheit`)
  //         setConvertedTemp(result);
  //     }else{
  //         result = toFahrenheit(userInput);
  //         setSpan(`= ${result} Celcius`)
  //         setConvertedTemp(result);
  //     }
  //     return result;
  // };
  const numericalChange = (event) => {
    event.preventDefault();
    //console.log(`numerical change event: ${parseInt(event.target.value)}`);
    setNumericalInput(parseInt(event.target.value));
  };

  return (
    <div>
      <form id="tempCalc" onSubmit={handleUserSubmit}>
        <input className="temp" onChange={numericalChange} />

        <select
          id="temps ui segment"
          value={units}
          onChange={handleDropDownChange}
        >
          <option value={celcius}>{celcius}</option>
          <option value={fahrenheit}>{fahrenheit}</option>
        </select>
        <br />
        <button
          type="submit"
          className="temp ui segment"
          style={{ backgroundColor: "blue", color: "white" }}
          onClick={() => {
            console.log("thomas");
            // calculateTemp(dropDowntemp, userInput);
          }}
        >
          Convert
        </button>
        <br />
        <span id="result-container ui container">
          <h3>{calculatedTemperature}</h3>
        </span>
      </form>
    </div>
  );
};

export default TempInput;
