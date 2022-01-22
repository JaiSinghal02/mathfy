import React from "react";
import './Button.css'

export default function Button(props){
    return(
        <div className="button-container" onClick={props.onClick} >
            <div className="button-div" style={{background: props.color}}>
                {props.name}
            </div>
        </div>
    )
}