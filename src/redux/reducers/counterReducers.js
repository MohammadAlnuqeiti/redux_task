import { DECREMENT, INCREMENT, INCREMENT_BY_VALUE } from "../actions/type";

const CounterReducer = (state = {count : 0} , action) => {

    switch(action.type){

    case INCREMENT :
        return {...state , count : state.count+1}

    case DECREMENT :
        return {...state , count : state.count-1}
        
    case INCREMENT_BY_VALUE :
        return {...state , count : state.count + action.value}

    default :
        return state;

    
    }
}


export default CounterReducer;