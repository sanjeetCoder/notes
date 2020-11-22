import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducers from "./reducers";
const Store = createStore(rootReducers, composeWithDevTools());

export default Store;
