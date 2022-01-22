import React from "react";
import './NumberBox.css'

export default function NumberBox(props){
    return(
        <div className="numberbox-container" onClick={props.openModal}>
            <div className="numberbox-div">
                Integer
            </div>
        </div>
    )
}