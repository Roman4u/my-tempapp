import React, { useState } from "react";
import TempInput from "./tempInput";

const App = () => {
    const [ temp, updateTemp ] = useState({ f: 0, c: 0 });

    return(
        <div>Hello
            <TempInput updateTemp={updateTemp} />
        </div>
    )
};

export default App; 