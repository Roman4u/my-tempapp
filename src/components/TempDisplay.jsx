import React, { useEffect, useState } from "react";
import "./tempapp.css"

const TempDisplay = (props) => {
    const { setConvertedTemp, setDropDownTemp, currentTemp, setCurrentTemp, currentWeather } = props; 

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

    const getTempDisplay = (dropDownTemp, convertedTemp) => {
        if(dropDownTemp === "Celcius" && convertedTemp <= 18 || dropDownTemp === 
        "Fahrenheit" && convertedTemp <= 60){
            setCurrentTemp("cold");
        }else if(dropDownTemp === "Celcius" && convertedTemp > 18 || dropDownTemp === 
        "Fahrenheit" && convertedTemp > 60){
            setCurrentTemp("warm");
        };
    };

    useEffect(() => {
       const result = getTempDisplay(props.dropDownTemp, props.convertedTemp);
       return result;
    }, [props.dropDownTemp]);


    return (
        <div className={`temp-display ${currentTemp}`} >

            <i className={`icon-left massive ${iconName} icon`} />
            <h1>{ text }</h1>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    )
};

export default TempDisplay;