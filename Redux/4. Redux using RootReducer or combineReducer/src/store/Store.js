import { createStore } from "redux";
import { Increment, Decrement } from "../action/Action";
import CombineReducers from "../CombineReducer/CombineReducer";
// Store
const Store = createStore(CombineReducers);

//Subscribe

Store.subscribe(() => console.log(Store.getState()));

// Dispatch

Store.dispatch(Increment());
Store.dispatch(Decrement());
Store.dispatch(Increment());
Store.dispatch(Decrement());
Store.dispatch(Increment());
Store.dispatch(Decrement());
Store.dispatch(Increment());

export default Store;
