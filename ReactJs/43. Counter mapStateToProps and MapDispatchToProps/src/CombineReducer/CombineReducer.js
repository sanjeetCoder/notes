import Increment from '../Reducer/Increment';
import Decrement from '../Reducer/Decrement';
import {combineReducers} from 'redux';

const CombineReducer=combineReducers({
    increment:Increment,
    decrement:Decrement
})

export default CombineReducer;