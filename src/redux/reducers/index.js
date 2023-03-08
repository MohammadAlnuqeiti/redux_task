import { combineReducers } from "redux";
import CounterReducer from "./counterReducers";
import TodolistReducers from "./todolistReducers";


export default combineReducers({
    counter : CounterReducer,
    todolist : TodolistReducers
})