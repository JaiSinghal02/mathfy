import React from 'react'
import './ComparatorBox.css'
import Comparator from './Comparator/Comparator'

export default function ComparatorBox(props){
    return(
        <div className='comparatorbox-container'>
            <div className='comparatorbox-div'>
                {props.comparatorList.map((el,index)=>{
                    return(
                        <Comparator key={index} value={el} comparatorDragStarted={(e)=>props.comparatorDragStarted(e,index,'comparator')}/>
                    )
                })}
                
            </div>
        </div>
    )
}