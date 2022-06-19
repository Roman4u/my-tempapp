import React from "react";
import ReactSwitch from "react-switch";

const ToggleSwitch = ({ toggleTheme, theme }) => {
    return (
        <div className="switch">
            <label className="switch-label"> {theme === "light" ? "Light Mode" : "Dark Mode"} </label>
            <ReactSwitch onChange={toggleTheme} checked={theme === "light"}/>
        </div>
    )
};

export default ToggleSwitch;