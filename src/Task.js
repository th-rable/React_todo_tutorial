import React from "react";
import './Task.css';

const Task=(props)=>{
    return(
        <div className="item">
            <div className="itemLeft">
                <div className="square"></div>
                <div className="itemText">{props.text}</div>
            </div>
            <div className="circular"></div>
        </div>
    )
}

export default Task;