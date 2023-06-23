import React from "react";
    
    
const ColorDisplay = (props) => {
    return (
        <div className="box" style={{backgroundColor: props.color}} >
            {props.color}
        </div>
    );
};
    
export default ColorDisplay;