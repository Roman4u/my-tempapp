import React, { useState, useEffect } from "react";
import TempInput from "./TempInput";
import TempDisplay from "./TempDisplay";

export const fahrenheit = "Fahrenheit";
export const celcius = "Celcius";

const App = () => {
  const [dropDowntemp, setDropDownTemp] = useState("Celcius");
  const [convertedTemp, setConvertedTemp] = useState(null);
  const [currentWeather, setCurrentWeather] = useState("cold");
  const [calculatedTemperature, setCalculatedTemperature] = useState(0);
  const [numericalInput, setNumericalInput] = useState(0);

  //   const [userInput, setUserInput] = useState(0);
  

  function toFahrenheit(celcius) {
    const result = Math.floor((celcius * 9) / 5 + 32);
    console.log("toFahrenheit:", result)
    return result;
  }

  function toCelcius(fahrenheit) {
    const result = Math.floor((fahrenheit - 32 * 5) / 9);
    console.log(`to celcius ${result}`)
    return result;
  }

  const calculateTemp = (numericalInput, dropDowntemp) => {
    let result;
    if (dropDowntemp === "Celcius") {
      result = toFahrenheit(numericalInput);
      //   setSpan(`= ${result} Fahrenheit`);
    //   setConvertedTemp(result);
    } else {
      result = toCelcius(numericalInput);
      //   setSpan(`= ${result} Celcius`);
    //   setConvertedTemp(result);
    }
    return result;
  };

  //this function updates state for the entire app
  const updateParentState = (dropDowntemp, numericalInput) => {
    // TODO: Update the state of this component.
    setDropDownTemp(dropDowntemp);
    setNumericalInput(numericalInput);
    // TODO: Calculate the temperature.
    setCalculatedTemperature(calculateTemp(dropDowntemp, numericalInput));
  };

  return (
    <div className="wrapper">
      <TempDisplay
        convertedTemp={convertedTemp}
        // setConvertedTemp={setConvertedTemp}
        dropDowntemp={dropDowntemp}
        // setDropDownTemp={setDropDownTemp}
        calculateTemp={calculateTemp}
      />
      <div className="ui segment">
        <div className="header">
          <h1>Temperature Converter</h1>
          <TempInput
            // span={span}
            // setSpan={setSpan}
            // userInput={userInput}
            // setUserInput={setUserInput}
            // dropDowntemp={dropDowntemp}
            // setDropDownTemp={setDropDownTemp}
            // convertedTemp={convertedTemp}
            // setConvertedTemp={setConvertedTemp}
            // currentTemp={currentTemp}
            // setCurrentWeather={setCurrentWeather}
            updateParentState={updateParentState}
            calculatedTemperature={calculatedTemperature}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
