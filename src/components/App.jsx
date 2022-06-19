import React, { useState, useEffect } from "react";
import TempInput from "./TempInput";


export const fahrenheit = "Fahrenheit";
export const celcius = "Celcius";

const App = () => {
  const [dropDownTemp, setdropDownTemp] = useState(null);
  const [convertedTemp, setConvertedTemp] = useState(null);
  const [currentWeather, setCurrentWeather] = useState("cold");
  // const [calculatedTemperature, setCalculatedTemperature] = useState(0);
  const [numericalInput, setNumericalInput] = useState(null);

  

  function toFahrenheit(celcius) {
    const result = Math.floor((celcius * 9) / 5 + 32);
    return result;
  }

  function toCelcius(fahrenheit) {
    const result = Math.floor((fahrenheit - 32) * 5/ 9);
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

  

  return (
    <div className="wrapper">
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
        <button className="refresh-button" onClick={() => {return window.location.reload(false)}}>refresh</button>
      </div>
    </div>
  );
};

export default App;
