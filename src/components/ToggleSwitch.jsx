import React from "react";
import ReactSwitch from "react-switch";


const ToggleSwitch = ({ toggleTheme, theme }) => {
    return (
        <div className="switch">
            <label className="switch-label" > {theme === "light" ? "Light Mode" : "Dark Mode"} </label>
            <div>
            <ReactSwitch 
            onChange={toggleTheme} 
            checked={theme === "light"} 
            handleDiameter={30}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={20}
            width={48}
            className="react-switch"
            id="material-switch"
            /> 
            </div>
        </div>
    )
};

export default ToggleSwitch;