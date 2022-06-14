import React from "react";

import "./tempapp.css"

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
        <div className="container ui segment">
            <div className="row">
                <form className="ui form column">
                    <div className="field">
                        {/* <label>Temperature Converter</label> */}
                        <input type="text" />
                    </div>
                </form>
            

                <form className="ui form column">
                    <div className="field">
                        {/* <label>Temperature Converter</label> */}
                        <input type="text" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default TempInput;