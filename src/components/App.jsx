import React, { useState, useEffect } from "react";
import TempInput from "./TempInput";
import TempDisplay from "./TempDisplay";

export const fahrenheit = "Fahrenheit";
export const celcius = "Celcius";

const App = () => {
  const [dropDownTemp, setdropDownTemp] = useState("Celcius");
  const [convertedTemp, setConvertedTemp] = useState(null);
  const [currentWeather, setCurrentWeather] = useState("cold");
  const [calculatedTemperature, setCalculatedTemperature] = useState(0);
  const [numericalInput, setNumericalInput] = useState(0);

  

  function toFahrenheit(celcius) {
    const result = Math.floor((celcius * 9) / 5 + 32);
    console.log("toFahrenheit:", result)
    return result;
  }

  function toCelcius(fahrenheit) {
    const result = Math.floor((fahrenheit - 32) * 5/ 9);
    console.log(`to celcius ${result}`)
    return result;
  }

  const calculateTemp = (numericalInput, dropDownTemp) => {
    let result;
    if (dropDownTemp === "Celcius") {
      result = toFahrenheit(numericalInput);
     setConvertedTemp(`= ${result} Fahrenheit`);
    } else {
      result = toCelcius(numericalInput);
      setConvertedTemp(`= ${result} Celcius`);
    }
    return result;
  };

  //this function updates state for the entire app
  // const updateParentState = (dropDownTemp, numericalInput) => {
  //   // TODO: Update the state of this component.
  //   setdropDownTemp(dropDownTemp);
  //   setNumericalInput(numericalInput);
  //   // TODO: Calculate the temperature.
  //   setCalculatedTemperature(calculateTemp(dropDownTemp, numericalInput));
  // };

  return (
    <div className="wrapper">
      <TempDisplay
        numericalInput={numericalInput}
        setCurrentWeather={setCurrentWeather}
        dropDownTemp={dropDownTemp}
        currentWeather={currentWeather}
       
      />
      <div className="ui segment">
        <div className="header">
          <h1>Temperature Converter</h1>
          <TempInput
           numericalInput={numericalInput}
           setNumericalInput={setNumericalInput}
            dropDownTemp={dropDownTemp}
            setdropDownTemp={setdropDownTemp}
            convertedTemp={convertedTemp}
         
            // updateParentState={updateParentState}
            calculateTemp={calculateTemp}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
