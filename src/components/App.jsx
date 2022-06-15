import React, { useState, useEffect } from "react";
import TempInput from "./TempInput";


const App = () => {
   


    return(
        <div className="wrapper">
            <div className="ui segment">
                <div className="header">
                    <h1>Temperature Converter</h1>
                    <TempInput />
                </div>
            </div>
        </div>
    )
};

export default App; 