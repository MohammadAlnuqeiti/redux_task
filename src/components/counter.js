import React, { useState } from 'react';
import CounterRedux from './counterRedux';

export default function Counter() {


    const [count , setCount] = useState(0);

    const incrementCount = () =>{
        setCount(count + 1)
    }
    const decrementCount = () =>{
        setCount(count - 1)
    }
  return (
    <div>
        <h2>COUNTER REACT</h2>

        <p>{count}</p>
        <button onClick={incrementCount}>increment</button><br></br>
        <button onClick={decrementCount}>decrement</button>

        <CounterRedux/>
        
    </div>
  )
}
