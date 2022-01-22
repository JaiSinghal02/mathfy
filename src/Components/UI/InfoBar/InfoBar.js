import React,{useState} from "react";
import './InfoBar.css'

export default function InfoBar(props){
    const [style,setStyle] = useState('translateY(-60px)')
    setTimeout(()=>{
        setStyle('translateY(60px)')
    },props.time)
    return(
        <div className="infobar-container" style={{transform:style,background: props.color}}>
            <div className="infobar-div">
                {props.message}
            </div>
        </div>
    )
}