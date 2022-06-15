import React, { useState, useEffect } from "react";

import DropDown from "./DropDown";
import "./tempapp.css"

const TempInput = (props) => {
    const { updateTempObject, temps, dropDownValue, setDropDownValue, handleDropDownSubmit, inputString, setInputString, handleUserInput } = props; 

 
    // this function takes the value from the user, sets the state from this component and then 
    // passes it to the function in our App component
    const onUserInputSubmit = () => { 
        handleUserInput(inputString);
    };

   // this function takes user input and set the value of state
   const onUserInput = (event) => {
    //converts user input to an integer
    const input = Number(event.target.value);
    // sets state value
    setInputString(input);
    console.log("input string:", inputString);
    };

    useEffect(() => {
        onUserInputSubmit();
    }, [inputString]);

    return(
        <>
            <div className="container ui segment">
                <div className="row">
                    <form className="ui form column" onSubmit={onUserInputSubmit} >
                        <div className="field">
                            <input type="text" onChange={onUserInput}  />
                        </div>
                    </form>
                    
                

                    <form className="ui form column">
                        <div className="field">
                            <input type="text" />
                        </div>
                    </form>
                </div>
            </div>

            <div className="container ui segment">
                <div className="row">
                        <DropDown 
                        temps={temps} 
                        dropDownValue={dropDownValue}
                        setDropDownValue={setDropDownValue} 
                        handleDropDownSubmit={handleDropDownSubmit}

                        />

                        <DropDown 
                        temps={temps} 
                        dropDownValue={dropDownValue}
                        setDropDownValue={setDropDownValue}
                        setInputString={setInputString} 
                        handleDropDownSubmit={handleDropDownSubmit} 
                        />    
                </div>
            </div>
        </>
    )
}

export default TempInput;