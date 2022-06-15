import React, { useState } from "react";
import TempInput from "./TempInput";


const App = () => {
    const [ tempObject, updateTempObject ] = useState({ f: 0, c: 0 });
    //values for the input form
    const [inputString, setInputString] = useState("");
    //values for the drop down form
    const [dropDownValue, setDropDownValue ] = useState("");

    const temps = {
        c: "celcius", 
        f: "fahrenheit"
    };

    // const updateCelcius = (event) => {
    //     const inputValue = event.target.value; 
    //     updateTemp(
    //         { 
    //             c: inputValue,
    //             f: (inputValue * 9) / 5 + 32
    //         }
    //     );
    // };

    // const updateFarenheight = (event) => {
    //     const inputValue = event.target.value;
    //     updateTemp(
    //         {
    //             c: (inputValue - 32) * 5 / 9,
    //             f: inputValue
    //         }
    //     )
    // };

    const onDropDownSubmit = () => {
        console.log("hello");
    }


    return(
        <div className="wrapper">
            <div className="ui segment">
                <div className="header">
                    <h1>Temperature Converter</h1>
                    <TempInput
                    tempObject={tempObject}
                    updateTemp={updateTempObject} 
                    temps={temps} 
                    onDropDownSubmit={onDropDownSubmit} 
                    inputString={inputString}
                    setInputString={setInputString}
                    dropDownValue={dropDownValue}
                    setDropDownValue={setDropDownValue}
                    />
                </div>
            </div>
        </div>
    )
};

export default App; 