import React from "react";

import "./tempapp.css";

const DropDown = (props) => {
    const {units, handleDropDownChange} = props;
   
    const tempUnits = [
    {
        label:"title",
        value: "-- select a unit --"
    },
    {
        label: "Celcius",
        value: "celcius"
    },
    {
        label: "Fahrenheit",
        value: "fahrenheit"
    }
]

    return(
        <div className="select-container">
            <label>Units</label><br />
            <select
            id="temps ui segment"
            onChange={handleDropDownChange}
            >
               {tempUnits.map((unit, index) => {
                   return <option key={index} value={unit.label}>{unit.value}</option>
               })}
            </select>
            <br />
           
        </div>
    )
}

export default DropDown;