
// Action

const Increment=()=>{
    return ({
        type:'Increment',
        payload:5
    })
}

const Decrement=()=>{
    return ({
        type:'Decrement',
        payload:5
    })
}

export {Increment,Decrement};