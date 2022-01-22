import React from 'react'
import './OperandBox.css'
import Operands from './Operands/Operands'

export default function OperandBox(props){
    return(
        <div className='operandbox-container'>
            <div className='operandbox-div'>
                <Operands operandList={props.operandList} operandDragStarted={props.operandDragStarted}/>
            </div>
        </div>
    )
}