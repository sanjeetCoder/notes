import React, { useState } from 'react';
import './App.css';
import User from './User'

const App = () => {

   const [count,setCount]=useState(0);
   const [data,useData]=useState(100);
  return (
    <div className="App">
      <h1>Memo Counter {count}</h1>
      <p>Sometimes when we want to update a state then it also reload the other component again and again. So we avoid by using memo</p>
      
     
     <User data={data}/>
     <button onClick={()=>setCount(count+1)}>Add</button>

    </div>
  )
}

 

export default App;
