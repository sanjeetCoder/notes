// Decrement Reducer

const Decrement=(state=20,action)=>{
    switch(action.type){
        case 'Decrement':
            return state-action.payload;

        default:
            return state;
    }
}

export default Decrement;