const componentsOfEquation = function(equation){
    const positionOfComparator = equation.search('>|<|=')
    let lhs,comparator,rhs
    if(positionOfComparator===-1){
        lhs = equation;
        comparator = rhs = ''
    }
    else{
        lhs = equation.slice(0,positionOfComparator)
        comparator = equation[positionOfComparator]
        rhs = (equation.slice(positionOfComparator+1))
    }
    
    return {lhs,comparator,rhs}
}
const isLengthCorrect = function(equation,lhs,comparator){
    if(lhs.length%2===0) return false // equation length is correct if length is operandDragStarted
    if((equation.length-1)!==equation.indexOf(comparator)) return false
    return true
}
const checkLHS = function(lhs){
    const lhsArr = lhs.split("")
    const operands = lhsArr.filter((element,index)=> {return index%2===0})
    const operators = lhsArr.filter((element,index)=> {return index%2!==0})
    for(let i in operands){
        let operand = operands[i]
        let result = ((operand>='A'&&operand<='Z') ||( operand>='0' && operand<='9'))
        if(!result) return result
    }
    for(let i in operators){
        let operator = operators[i]
        let result = (['+','-'].includes(operator))
        if(!result) return result
    }
    return true
}
const validateEquation = function(equationArray){
    let equation=''
    equationArray.forEach(element=>equation+=element)
    const {lhs,comparator,rhs} = componentsOfEquation(equation)
    if(comparator===''){
        return checkLHS(lhs)
    }
    else{
        return (checkLHS(lhs) && isLengthCorrect(equation,lhs,comparator))
    }
}
export default validateEquation