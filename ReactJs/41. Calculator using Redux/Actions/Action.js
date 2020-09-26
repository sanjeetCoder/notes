const Action=(operation,symbol,firstNumber,secondNumber)=>{
    console.log('***************',firstNumber+secondNumber);
    return{
        type:operation,
        symbol:symbol,
        first:firstNumber,
        second:secondNumber

    }
}

export default Action;