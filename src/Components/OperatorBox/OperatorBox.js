import React from 'react'
import './OperatorBox.css'
import Operator from './Operator/Operator'

export default function OperatorBox(props){
    return(
        <div className='operatorbox-container'>
            <div className='operatorbox-div'>
                {props.operatorList.map((el,index)=>{
                    return(
                        <Operator key={index} value={el} operatorDragStarted={(e)=>props.operatorDragStarted(e,index,'operator')}/>
                    )
                })}
                
            </div>
        </div>
    )
}