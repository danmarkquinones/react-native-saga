import { DECREMENT_SUCCESS, GET_COUNTER_SUCCESS, INCREMENT_SUCCESS } from "./counterActions";


const initialState = {
    counter : 0
}

const counterReducer = (state = initialState , action) => {
    console.log('action reducer',action.type , state.counter)
    switch(action.type){
        case GET_COUNTER_SUCCESS:{
            return state.counter
        }
        case INCREMENT_SUCCESS : {
            state.counter = state.counter + 1;
            return state;
        }
        case DECREMENT_SUCCESS:{
            state.counter = state.counter - 1;
            return state;
        }
        default:
            return state
    }
;} 

export {counterReducer};