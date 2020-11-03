import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { Increment, Decrement } from "./action/Action";

function App() {
  const Inc = useSelector((props) => props.Increment);
  const Dec = useSelector((props) => props.Decrement);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Redux Counter</h1>
      <h2>Increment is : {Inc}</h2>
      <h2>Decrement is : {Dec}</h2>
      <button onClick={() => dispatch(Increment())}>Increment</button>
      <button onClick={() => dispatch(Decrement())}>Decrement</button>
    </div>
  );
}

export default App;
