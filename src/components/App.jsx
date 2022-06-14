import React, { useState } from "react";
import TempInput from "./TempInput";

const App = () => {
    const [ temp, updateTemp ] = useState({ f: 0, c: 0 });

    return(
        <div className="wrapper">
            <div className="ui segment">
                <div className="header">
                    <h1>Temperature Converter</h1>
                    <TempInput updateTemp={updateTemp} />
                </div>
            </div>
        </div>
    )
};

export default App; 