import React from 'react'
import Operand from './Operand/Operand'

export default function Operands(props){
    return(
        <>{props.operandList.map((el,index)=>{
            if(el.id==='block-1'){
                return(
                    <Operand key={index} value={el.value} operandDragStarted={(e)=>props.operandDragStarted(e,index,'operand')}/>
                )
            }
            return null
        })}
        </>
    )
}