import { createStore } from "redux";
import { Increment, Decrement } from "../action/Action";
import Reducer from "../reducer/Reducer";
// Store
const Store = createStore(Reducer);

//Subscribe

Store.subscribe(() => console.log(Store.getState()));

// Dispatch

Store.dispatch(Increment());
Store.dispatch(Increment());
Store.dispatch(Increment());
Store.dispatch(Increment());
Store.dispatch(Increment());
Store.dispatch(Increment());
Store.dispatch(Decrement());

export default Store;
