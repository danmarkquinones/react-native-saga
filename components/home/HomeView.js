import React , {useEffect} from 'react'
import { View , Text, Button} from 'react-native'
import { connect } from 'react-redux'
import { DECREMENT_REQ, GET_COUNTER_REQ, INCREMENT_REQ  } from '../models/counter-reducers/counterActions';

const mapStateToProps = (state, props) => {
    const {counter} = state.counter;
  
    return {counter};
  };
  
const mapDispatchToProps = (dispatch, props) => ({

    onFetchCounter : () => {
        dispatch({
            type:GET_COUNTER_REQ,
            payload:{}
        })
    },

    onIncrement : () => {
        dispatch({
            type : INCREMENT_REQ,
            payload:{}
        })
    },
    onDecrement : () => {
        dispatch({
            type : DECREMENT_REQ,
            payload:{}
        })
    }
});

const HomeView = (props) => {

    const {counter , onIncrement , onDecrement} = props


    return (
        <View>
            <Text>{counter}</Text>
            <Button title="Increment by 1" onPress={onIncrement}/>
            <Button title="Decrement by 1" onPress={onDecrement}/>
        </View>
    )
}

const Home = connect(
    mapStateToProps,
    mapDispatchToProps,
)(HomeView);

export default Home
