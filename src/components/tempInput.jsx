import React, { useState, useEffect } from "react";

import DropDown from "./DropDown";
import "./tempapp.css"

const TempInput = (props) => {
   
    const {temp, setTemp} = props; 
    const temperatures = {
        fahrenheit: "Fahrenheit",
        celcius: "Celcius"
    };

    const handleChange = (e) => {
        console.log(e.target.value);
        setTemp(e.target.value);
    };

    return(
        <div>
             <form id="tempCalc">
                
                <input type="number" className="temp" />

                <select id="temps ui segment" value={temp} onChange={handleChange} >
                    <option value="Celcius">{temperatures.celcius}</option>
                    <option value="Fahrenheit">{temperatures.fahrenheit}</option>
                </select> <br />

                <input type="submit" className="temp ui segment" /> <br />
                <span id="result-container"></span>
            </form>

        </div>
    )
}

export default TempInput;