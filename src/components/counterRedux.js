import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementAction } from '../redux/actions/counterActions';
import { DECREMENT, INCREMENT, INCREMENT_BY_VALUE } from '../redux/actions/type';

export default function CounterRedux() {
    const {count} = useSelector(state => state.counter);
    const dispatch = useDispatch();

    const incrementCount = () =>{

        dispatch(incrementAction())
    }
    const decrementCount = () =>{

        dispatch({
            type : DECREMENT
        })
    }
    const INCREMENTBYVALUE = (vl) => {

        dispatch({
            type : INCREMENT_BY_VALUE,
            value : vl
        })
    }

  return (
    <div>

        <h2>COUNTER REDUX</h2>
            <p>{count}</p>
            <button onClick={incrementCount}>increment</button><br></br>
            <button onClick={decrementCount}>decrement</button>
            <button onClick={()=>INCREMENTBYVALUE(15)}>INCREMENT BY VALUE 15</button>
    </div>
  )
}
