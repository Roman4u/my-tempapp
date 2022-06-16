import React, { useState, useEffect } from "react";

import "./tempapp.css"

const TempInput = (props) => {
   
    const {temp, setTemp} = props; 
    const [userInput, setUserInput] = useState(0);

    const temperatures = {
        fahrenheit: "Fahrenheit",
        celcius: "Celcius"
    };

    const handleDropDownChange = (e) => {
        console.log(e.target.value);
        setTemp(e.target.value);
    };

    // const handleUserInputChange = (event) => {
    //     // console.log(event.target.value);
    //     console.log("hellooooooooooo")
    // }

    const handleUserSubmit = (event) => {
        event.preventDefault();
        const value = event.target[0].value;
        setUserInput(value);
    }

    return(
        <div>
             <form id="tempCalc" onSubmit={handleUserSubmit} >
                
                <input type="number" className="temp" />

                <select id="temps ui segment" value={temp} onChange={handleDropDownChange} >
                    <option value="Celcius">{temperatures.celcius}</option>
                    <option value="Fahrenheit">{temperatures.fahrenheit}</option>
                </select> <br />

                <input type="submit" className="temp ui segment" style={{backgroundColor: "blue", color: "white"}} /> <br />
                <span id="result-container"></span>
            </form>

        </div>
    )
}

export default TempInput;