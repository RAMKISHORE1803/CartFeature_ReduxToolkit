// App.js
import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, add } from "./store/counterSlice.js";
import { multiply } from "./store/multiplySlice.js";

function App() {
  const counter = useSelector((state) => state.counter.count);
  const runner = useSelector((state) => state.multiply.var);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <h2>{runner}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(add(10))}>Add Value</button>
      <button onClick={() => dispatch(multiply(10))}>Multiply Value</button>
    </div>
  );
}

export default App;
