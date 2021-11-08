import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { counterSaga} from './components/models/counter-reducers/counterSaga';
import { reducer } from './components/models/rootReducer';


const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(counterSaga)

export {store};
