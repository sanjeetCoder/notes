import React, {useState,useEffect} from 'react';
import './App.css';
import { render } from 'react-dom';

const App=()=>{

const [count,setCount]=useState(0);
useEffect(()=>{
  console.log(count);
// },[]
// },[count==2]
},[count==4]

)
  return (
    <div className="App">
        <h1>Hook Count useEffect : {count} </h1>
        <p>It is a Component that is used to handle the life cycle in Hook Component</p>
        <p>Note:- It is handle all life cycle like :- componentDidMount,componentDidUpdate,componentWillUnmount and it accepts function only </p>

        <button onClick={()=>{setCount(count+1)}}>Click here to update</button>

    </div>
  );
}



export default App;
