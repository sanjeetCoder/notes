import Increment from "../reducer/Increment";
import Decrement from "../reducer/Decrement";
import { combineReducers } from "redux";

const CombineReducers = combineReducers({
  increment: Increment,
  decrement: Decrement,
});

export default CombineReducers;
