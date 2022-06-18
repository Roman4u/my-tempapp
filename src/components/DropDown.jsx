import React from "react";

import "./tempapp.css";
import { celcius, fahrenheit } from "./App";

const DropDown = (props) => {
    const {units, handleDropDownChange} = props;
    
    return(
        <>
            <label>Units</label><br />
            <select
            id="temps ui segment"
            value={units}
            onChange={handleDropDownChange}
            >
            <option>-- select a unit --</option>
            <option value={celcius}>{celcius}</option>
            <option value={fahrenheit}>{fahrenheit}</option>
            </select>
            <br />
        </>
    )
}

export default DropDown;