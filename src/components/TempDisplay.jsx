import React, { useEffect, useState } from "react";
import "./tempapp.css"

const TempDisplay = (props) => {
    const { dropDownTemp, numericalInput, setCurrentWeather, currentWeather } = props; 

    const tempConfigDisplay = {
        cold: {
            text: "It's cold",
            iconName: "snowflake"
        },
        warm: {
            text: "It's warm",
            iconName: "sun"
        }   
    };

    const {text, iconName} = tempConfigDisplay["cold"];

    const getTempDisplay = (dropDownTemp, numericalInput) => {
        if(dropDownTemp === "Celcius" && numericalInput <= 18 || dropDownTemp === 
        "Fahrenheit" && numericalInput <= 60){
            setCurrentWeather("cold");
        }else if(dropDownTemp === "Celcius" && numericalInput > 18 || dropDownTemp === 
        "Fahrenheit" && numericalInput > 60){
            setCurrentWeather("warm");
        };
    };

    useEffect(() => {
       const result = getTempDisplay(dropDownTemp, numericalInput);
       return result;
    }, [dropDownTemp]);


    return (
        <div className={`temp-display ${currentWeather}`} >

            <i className={`icon-left massive ${iconName} icon`} />
            <h1>{ text }</h1>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    )
};

export default TempDisplay;