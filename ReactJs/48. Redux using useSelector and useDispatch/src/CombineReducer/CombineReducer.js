import Increment from "../reducer/Increment";
import Decrement from "../reducer/Decrement";
import { combineReducers } from "redux";

const CombineReducers = combineReducers({
  Increment,
  Decrement,
});

export default CombineReducers;
