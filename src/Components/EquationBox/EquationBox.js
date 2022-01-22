import React from 'react'
import './EquationBox.css'
import cross from '../../assets/images/cross.png'

export default function EquationBox(props){
    return(
        <div className='equationbox-container' onDrop={props.componentDropped} onDragOver={(e)=>{e.preventDefault()}}>
            <div className='equationbox-div' >
                {props.equationList.map((el,index)=>{
                        return(
                            <div key={index} className='element-container'>
                                <div className='element-cross' onClick={(e)=>props.removeOperand(index)}>
                                    <img src={cross} alt='cross'/>
                                </div>
                                <div className='element-div'>
                                    {el}
                                </div>
                            </div>
                        )
                    
                })}
            </div>
        </div>
    )
}
