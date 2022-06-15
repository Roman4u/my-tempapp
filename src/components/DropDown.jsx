import React, { useState } from "react";

const DropDown = (props) => {
    const { temps, onDropDownSubmit } = props; 
    

    // const onDropDownSubmit = () => {
    //     console.log("hello");
    // }

    // const onDropDownChange = () => {
    //     console.log("hello");     
    // }

    const onDropDownChange = (event) => {
        const dropDownValue = event.target.value;
        console.log("hello");  
        console.log(typeof dropDownValue);  

    }

    return (
            <form className="ui form column" onSubmit={onDropDownSubmit}>
                <select id="temperatures" onChange={onDropDownChange}>
                    <option style={{textAlign: "center"}}> ---- select ---- </option>
                    <option value={temps.c}  >{temps.c}</option>
                    <option value={temps.f}  >{temps.f}</option>
                </select>
            </form>
    )
}

export default DropDown; 
