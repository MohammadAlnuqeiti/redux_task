import { ADDTODOLIST } from "../actions/type";

const TodolistReducers = (state = {list:[]} , action) => {
    switch(action.type){

        case ADDTODOLIST:
            console.log(action.data);
            let array = state.list;
            let data = action.data;
            array.push(data)
            return {...state , array : array}

            default :
            return state;
    
        }

    
}

export default TodolistReducers