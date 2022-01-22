import React,{useState,useEffect} from 'react'
import './Modal.css'
import BackDrop from '../BackDrop/BackDrop'
import Button from '../Button/Button'


export default function Modal(props){
    const [value,setValue] = useState('')
    return(
        <React.Fragment>
            {props.show?
            <>
                <BackDrop/>
                    <div className='modal-container'>
                        <div className='modal-div'>
                            <div className='modal-field-container'>
                                <div className='modal-field-tag-container'>Enter Number</div>
                                <div className='modal-field-input-container'>
                                    <input type='number' value={value} onChange={(e)=>setValue(e.target.value)}></input>
                                </div>
                            </div>
                            <div className='modal-button-container'>
                                <div className='modal-button-div'>
                                    <Button name="Submit" color="green" onClick={(e)=>{
                                        props.submit(value)
                                        setValue('')}}/>
                                    <Button name="Cancel" color="red" onClick={(e)=>{
                                        props.cancel()
                                        setValue('')
                                        }}/>
                                </div>
                            </div>
                        </div>
                    </div>
            </>:null}
        </React.Fragment>
    )
}