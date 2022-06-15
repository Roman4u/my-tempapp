import React from "react";

import DropDown from "./DropDown";
import "./tempapp.css"

const TempInput = (props) => {
    const { tempObject, updateTempObject, temps, setInputString, inputString, dropDownValue, setDropDownValue } = props; 

    const updateCelcius = (inputValue) => {
        //const inputValue = event.target.value; 
        updateTempObject(
            { 
                c: inputValue,
                f: (inputValue * 9) / 5 + 32
            }
        );
    };

    const updateFarenheight = (inputValue) => {
        // const inputValue = event.target.value;
        updateTempObject(
            {
                c: (inputValue - 32) * 5 / 9,
                f: inputValue
            }
        )
    };

    const handleInputChange = (event) => {
        const input = Number(event.target.value);
        setInputString(input);
        console.log("input string:", inputString);
        if(dropDownValue === temps.c){
            updateCelcius(input);
            console.log(tempObject);
        }else{
            updateFarenheight(input);
            console.log(tempObject);
        } 
    }

   

    return(
        <>
            <div className="container ui segment">
                <div className="row">
                    <form className="ui form column">
                        <div className="field">
                            <input type="text" onChange={handleInputChange}  />
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
                        <DropDown temps={temps} setInputString={setInputString} />
                        <DropDown temps={temps} setInputString={setInputString} />    
                </div>
            </div>
        </>
    )
}

export default TempInput;