import React from "react";
import './Loader.css'
import BackDrop from "../BackDrop/BackDrop";

export default function Loader(props){
    return(
        <>
        <BackDrop/>
            <div className="loader-container">
                {props.message}
            </div>
        </>
    )
}