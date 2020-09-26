import {createStore} from 'redux';
import CombineReducer from '../Reducers/CombineReducer';

const Store=createStore(CombineReducer);

export default  Store;