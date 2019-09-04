import React, {useReducer} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ColorCounter from '../components/ColorCounter';

// Reducer: hook like useState. Not used with useState. Takes two arguments
// Argument #1: object that has all of our state in it, must never be changed
// Argument #2: object that describes the update we want to make
// Must return value to be used as Argument #1

const COLOR_INCREMENT = 25;

const reducer = (state, action) => {
  // state === {red: number, green: number, blue: number}
  // action: how to change the state object
  // action === {colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15}
  // by convention action === {type: 'change_red or anything', payload: 15 critical data for changing}

  switch(action.type){
    case 'change_red':
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : {...state, red: state.red + action.payload};
      // copied the state and modified that instead.
      // returned argument is the new state
    case 'change_green':
      return state.green + action.payload > 225 || state.green + action.payload < 0
        ? state
        : {...state, green: state.green + action.payload};
    case 'change_blue':
      return state.blue + action.payload > 225 || state.blue + action.payload < 0
        ? state
        :{...state, blue: state.blue + action.payload};
    default:
      return state;
  }

};

const SquareScreen = () => {
  const[state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});
  const {red, green, blue} = state; //destructure
    // reducer: function defined by programmer
    // dispatch: runs the reducer, passes an action object(argument #2)
    // {red: 0, green: 0, blue: 0}: initialState object
    // state === {red: 0, green: 0, blue: 0} initially

  return (
    <View>
      <ColorCounter
        color="Red"
        onIncrease={() => dispatch({type: 'change_red', payload: COLOR_INCREMENT})}
        onDecrease={() => dispatch({type: 'change_red', payload: -1 * COLOR_INCREMENT})}
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => dispatch({type: 'change_blue', payload: COLOR_INCREMENT})}
        onDecrease={() => dispatch({type: 'change_blue', payload: -1 * COLOR_INCREMENT})}
      />
      <ColorCounter
        color="Green"
        onIncrease={() => dispatch({type: 'change_green', payload: COLOR_INCREMENT})}
        onDecrease={() => dispatch({type: 'change_green', payload: -1 * COLOR_INCREMENT})}
      />
      <View style={{height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})`}}/>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
