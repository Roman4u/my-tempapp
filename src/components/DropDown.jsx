import React, { useState, useEffect } from "react";

const DropDown = (props) => {
    const { temps, handleDropDownSubmit,dropDownValue, setDropDownValue } = props; 
    

    //takes the value from state and passes it to the handleDropDownSubmit function
    const onDropDownSubmit = () => {
        handleDropDownSubmit(dropDownValue);
    };


    // saves value to state
    const onDropDownChange = (event) => {
        const value = event.target.value;
        console.log("drop down change hello");  
        console.log(typeof value); 
        console.log("value:", value)
        setDropDownValue(value); 
        //console.log("drop down value:", dropDownValue)
    }


    // whenever dropdown changes useEffect gets invoked and runs the onDropDownSubmit function
    useEffect(() => {
        onDropDownSubmit();
    }, [dropDownValue]);



    return (
            <form className="ui form column" >
                <select id="temperatures" onChange={onDropDownChange}>
                    <option style={{textAlign: "center"}}> ---- select ---- </option>
                    <option value={temps.c}  >{temps.c}</option>
                    <option value={temps.f}  >{temps.f}</option>
                    {/* <option>{dropDownValue}</option> */}
                </select>
            </form>

    )
}

export default DropDown; 
