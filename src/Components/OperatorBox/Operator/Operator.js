import React from 'react'
import './Operator.css'

export default function Operator(props){
    return(
        <div className='operator-container' draggable onDragStart={props.operatorDragStarted}>
            <div className='operator-div'>
                {props.value}
            </div>
        </div>
    )
}