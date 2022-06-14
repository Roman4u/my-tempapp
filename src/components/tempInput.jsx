import React from "react";

const TempInput = (props) => {
    const { updateTemp } = props; 

    const updateCelcius = (event) => {
        const inputValue = event.target.value; 
        updateTemp(
            { 
                c: inputValue,
                f: (inputValue * 9) / 5 + 32
            }
        );
    };

    const updateFarenheight = (event) => {
        const inputValue = event.target.value;
        updateTemp(
            {
                c: (inputValue - 32) * 5 / 9,
                f: inputValue
            }
        )
    }

    return(
        <div></div>
    )
}

export default TempInput;