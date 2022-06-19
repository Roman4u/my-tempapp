import React from "react";

const RefreshButton = () => {
    return (
        <div style={{display: 'flex'}}>
            <button className="refresh-button" onClick={() => {return window.location.reload(false)}} style={{marginLeft: 'auto'}}>refresh</button>
        </div>
    )
}

export default RefreshButton;