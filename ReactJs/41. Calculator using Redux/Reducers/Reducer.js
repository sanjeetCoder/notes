const initialState={
    result:0
}
const FinalResult=0;

const Reducer= (state=initialState,action) =>{
    console.log(action.first);
    console.log(action.second);
    console.log(action.type);
    console.log(action.symbol);
    
 
    //  var res=new eval(FinalResult+'+' +(action.first+''+action.symbol+''+action.second))
     console.log(action.first+action.symbol+action.second)
     

    switch(action.type){
        case "addition":
            return{...state, result:FinalResult+(parseInt(action.first)+parseInt(action.second))}
        case "subtraction":
            return{...state, result:FinalResult+(parseInt(action.first)-parseInt(action.second))}
        case "multiplication":
            return{...state, result:FinalResult+(parseInt(action.first)*parseInt(action.second))}    
        case "division":
             return{...state, result:FinalResult+(parseInt(action.first)/parseInt(action.second))}
        default:
            return state;
    }

}

export default Reducer;