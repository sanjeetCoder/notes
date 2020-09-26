import React, {useState} from 'react';
import './App.css';
import { render } from 'react-dom';

const App=()=>{

const [count,setCount]=useState(0);

  return (
    <div className="App">
        <h1>Hook Count : {count} </h1>
        <p>It is a methodlogy to manage the state in function Component</p>

        <button onClick={()=>{setCount(count+1)}}>Click here to update</button>

    </div>
  );
}



export default App;
