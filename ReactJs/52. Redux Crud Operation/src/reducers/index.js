import { combineReducers } from "redux";
import contactReducer from "./contactReducer";

const CombineReducers = combineReducers({
  contact: contactReducer,
});

export default CombineReducers;
