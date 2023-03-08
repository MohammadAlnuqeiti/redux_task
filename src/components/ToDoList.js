import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ADDTODOLIST } from '../redux/actions/type';

export default function ToDoList() {

    const {list} = useSelector(state => state.todolist);

    const [data , setData] = useState();
    const dispatch = useDispatch();

    const AddToDoList = (e) =>{

        e.preventDefault()

        dispatch({
            type : ADDTODOLIST,
            data : data
        })
    }
  return (
    <div>
        <h1>ToDoList</h1>

        <form onSubmit={AddToDoList}>
            <input type="text" name="data" onChange={(e)=>{setData(e.target.value)}}></input>
            <button>save</button>
        </form>

        <ul>
        {list.map((ele,index)=>{
            return (

            <li key={index}>{ele}</li>
            )
        })}
        </ul>


    </div>
  )
}
