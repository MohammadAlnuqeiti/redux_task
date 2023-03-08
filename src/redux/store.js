import { createStore } from "redux";
import CounterReducer from "./reducers/counterReducers";
import reducers from "./reducers";

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

const store = createStore(reducers,enhancer);



export default store;