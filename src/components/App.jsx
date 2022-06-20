import React, { useState, createContext } from "react";

import TempInput from "./TempInput";
import RefreshButton from "./RefreshButton";
import ToggleSwitch from "./ToggleSwitch";

export const ThemeContext = createContext(null);
export const fahrenheit = "Fahrenheit";
export const celcius = "Celcius";

const App = () => {
  const [dropDownTemp, setdropDownTemp] = useState(null);
  const [convertedTemp, setConvertedTemp] = useState(null);
  const [numericalInput, setNumericalInput] = useState(null);
  const [ theme, setTheme ] = useState("light");
  

  function toFahrenheit(celcius) {
    const result = Math.floor((celcius * 9) / 5 + 32);
    return result;
  }

  function toCelcius(fahrenheit) {
    const result = Math.floor((fahrenheit - 32) * 5/ 9);
    return result;
  }

  //this function will calculate the temp based on the values 
  //coming from TempInput component
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

  const toggleTheme = () => {
    setTheme((currentTheme) => {
      const result = currentTheme === "light" ? "dark" : "light";
      return result; 
    });
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className="wrapper" id={theme}>
        <div className="container">
          <div className="header">
          <h1>Temperature Converter</h1>
            <TempInput
              numericalInput={numericalInput}
              setNumericalInput={setNumericalInput}
              dropDownTemp={dropDownTemp}
              setdropDownTemp={setdropDownTemp}
              convertedTemp={convertedTemp}
              calculateTemp={calculateTemp}
            />
            <RefreshButton />
          </div>
        </div>
        <ToggleSwitch
        toggleTheme={toggleTheme}
        theme={theme}
        />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
