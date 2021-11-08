import {combineReducers} from 'redux';
import { counterReducer } from './counter-reducers/counterReducers';

const reducer = combineReducers({
  counter: counterReducer,
});

export {reducer};
