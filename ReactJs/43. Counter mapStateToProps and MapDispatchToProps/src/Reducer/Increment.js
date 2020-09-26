// Increment Reducer

var finalValue=0;
const Increment=(state=0,action)=>{
    switch(action.type){
        case 'Increment':
            return finalValue=state+action.payload;

        default:
            return finalValue;
    }
}

export default Increment;