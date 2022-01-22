import React from 'react'
import './Operand.css'

export default function Operand(props){
    return(
        <div className='operand-container' draggable onDragStart={props.operandDragStarted}>
            <div className='operand-div'>
                {props.value}
            </div>
        </div>
    )
}