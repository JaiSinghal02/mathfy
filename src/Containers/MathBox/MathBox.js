import React,{useState} from 'react'
import './MathBox.css'

import operandData from '../../assets/data/operandData'
import operatorData from '../../assets/data/operatorData'
import comparatorData from '../../assets/data/comparatorData'

import OperandBox from '../../Components/OperandBox/OperandBox'
import EquationBox from '../../Components/EquationBox/EquationBox'
import OperatorBox from '../../Components/OperatorBox/OperatorBox'
import ComparatorBox from '../../Components/ComparatorBox/ComparatorBox'
import NumberBox from '../../Components/NumberBox/NumberBox'

import Modal from '../../Components/UI/Modal/Modal'
import InfoBar from '../../Components/UI/InfoBar/InfoBar'
import Loader from '../../Components/UI/Loader/Loader'

import validateEquation from '../../functions/validateEquation'
import axios from 'axios'

export default function MathBox(){
    const [operandList,setOperandList] = useState(operandData)
    const [equationList,setEquationList] = useState([])
    const [showModal,setShowModal] = useState(false)
    const [showError,setShowError] = useState(0)
    const [showResult,setShowResult] = useState(0)
    const [showLoader,setShowLoader] = useState(0)
    const [result,setResult] = useState(null)
    // const [info,setInfo] = useState({message:'',color:'',time:0})

    const displayError = ()=>{
        if(showError) setShowError(0)
        new Promise((resolve)=>{
            resolve()
        })
        .then((res)=>setShowError(1))
    }
    const displayResult = (result)=>{
        setShowResult(0)
        const timeout=setTimeout(()=>{
            setShowResult(1)
            setResult(result)
            clearTimeout(timeout)  
        },1)  
    }
    const componentDropped = (e)=>{
        let value=''
        let id =e.dataTransfer.getData('id')
        const type = e.dataTransfer.getData("componentType")
        if(type==="operand"){
            value=operandList[id].value
        }
        else if(type==="operator"){
            value=operatorData[id]
        }
        else{
            value=comparatorData[id]
        }
        if(!validateEquation([...equationList,value])){
            displayError()
            return
        }
        if(type==="operand"){
            operandDropped(e)
        }
        else if(type==="operator"){
            operatorDropped(e)
        }
        else{
            comparatorDropped(e)
        }
    }
    const operandDropped = (e)=>{
        const id = e.dataTransfer.getData("id")
        setOperandList((list)=>{
            list[id]={
                ...list[id],
                id: 'block-2'
            }
            return [...list]
        })
        setEquationList((prev)=> {return [...prev,operandList[id].value]})
    }
    const operatorDropped = (e)=>{
        const id = e.dataTransfer.getData("id")
        setEquationList((prev)=> {return [...prev,operatorData[id]]})

    }
    const comparatorDropped = (e)=>{
        const id = e.dataTransfer.getData("id")
        setEquationList((prev)=>{return [...prev,comparatorData[id]]})
    }
    const dragStarted = (e,index,type)=>{
        e.dataTransfer.setData("componentType",type)
        e.dataTransfer.setData("id",index)
    }
    const removeOperand = (index)=>{
        let copyEqnList = [...equationList]
        const removed = copyEqnList.splice(index,1)
        if(!validateEquation(copyEqnList)) {
            return displayError()

        }
        const ind = operandList.map(list=>list.value).indexOf(equationList[index])
        if(ind!==-1){
            setOperandList((list)=>{
                list[ind]={
                    ...list[ind],
                    id: 'block-1'
                }
                return [...list]
            })
        }
        var list = []
        equationList.forEach((el,ind)=>{
            if(ind!==index) list.push(el)
        })
        setEquationList(list)
    }
    const addNumber = (number)=>{
        setShowModal(false)
        if(!validateEquation([...equationList,number])) {
            displayError()
            return
        }
        let updatedList = [...equationList,number]
        setEquationList((list)=>{return [...list,number]})
        let equation =''
        updatedList.forEach(el=>equation+=el)
        setShowLoader(1)
        axios.post('/getresult',{
            equation
        })
        .then(res=>{
            displayResult(res.data)
            setShowLoader(0)
        })
        .catch(err=>{
            setShowLoader(0)
            console.log(err)
        })
        
    }
    return(
        <div className='mathbox-container'>
            <Modal show={showModal} cancel={()=>{setShowModal(false)}} submit={addNumber}/>
            <div className='mathbox-div'>
                <OperandBox operandList={operandList} operandDragStarted={dragStarted}/>
                <div className='mathbox-methodbox-container'>
                    <OperatorBox operatorList={operatorData} operatorDragStarted={dragStarted}/>
                    <ComparatorBox comparatorList={comparatorData} comparatorDragStarted={dragStarted}/>
                    <NumberBox openModal={(e)=>setShowModal(true)}/>
                </div>
                <EquationBox equationList={equationList} componentDropped={componentDropped} removeOperand={removeOperand}/>
            </div>
            {showLoader?<Loader message="Fetching result..."/>:null}
            {showError===1?<InfoBar message={"Invalid move"} time={2000} color={"brown"}/>:null}
            {showResult===1?<InfoBar message={`Result: ${result}`} time={3500} color={"blue"}/>:null}
        </div>
    )
}