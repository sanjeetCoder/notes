import React, {useState, useEffect} from 'react';
import './App.css';
import UseTitle from './UseTitle';
const App = () => {
  const [count,setCount]=useState(0);
  UseTitle(count)

return (
    <div>
      <h1>Custome hook : Sometimes we need to make common functionality based on hook but react does not provide such compatibilty.
        so we use custom</h1>
        <button onClick={()=>setCount(count+1)}>Click</button>
      
    </div>
  );
};


export default App;
