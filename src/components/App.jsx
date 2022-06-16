import React, { useState, useEffect } from "react";
import TempInput from "./TempInput";


const App = () => {
   
    const [temp, setTemp] = useState();

    return(
        <div className="wrapper">
            <div className="ui segment">
                <div className="header">
                    <h1>Temperature Converter</h1>
                    <TempInput 
                    temp={temp}
                    setTemp={setTemp}
                    />
                </div>
            </div>
        </div>
    )
};

export default App; 