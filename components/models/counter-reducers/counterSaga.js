import {takeEvery, put} from 'redux-saga/effects';
import {DECREMENT_REQ, DECREMENT_SUCCESS, GET_COUNTER_REQ, GET_COUNTER_SUCCESS, INCREMENT_REQ , INCREMENT_SUCCESS} from './counterActions';

function* counterSaga() {
    yield takeEvery(GET_COUNTER_REQ , onFetchCounter);
    yield takeEvery(INCREMENT_REQ, onIncrement);
    yield takeEvery(DECREMENT_REQ, onDecrement);
}

function* onFetchCounter(action){
    try{
        yield put({type:GET_COUNTER_SUCCESS})
    }catch(err){
        console.log(err)
    }
}

function* onIncrement(action) {
    console.log('action saga' , action)
    try {
        // API call
        yield put({type: INCREMENT_SUCCESS});
    } catch (err) {
        console.log(err)
    }
}

function* onDecrement(action) {
    console.log('action saga' , action)
    try {
        // API call
        yield put({type: DECREMENT_SUCCESS});
    } catch (err) {
        console.log(err)
    }
}

export {counterSaga};
