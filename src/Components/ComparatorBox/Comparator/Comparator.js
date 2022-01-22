import React from 'react'
import './Comparator.css'

export default function Comparator(props){
    return(
        <div className='comparator-container' draggable onDragStart={props.comparatorDragStarted}>
            <div className='comparator-div'>
                {props.value}
            </div>
        </div>
    )
}