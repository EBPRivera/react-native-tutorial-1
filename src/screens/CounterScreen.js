import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
//useState for watching a variable and would rerender the screen when updates to the variable are done
//[  ] array deconstruction
//  [variableone, variabletwo] = array with two (or more?) data
//counter gets updated after the screen was rerendered, will not reinitialize counter
//a setter is responsible for modifying a variable

const CounterScreen = () => {
  const[counter, setCounter] = useState(0); //0 being the default value

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          setCounter(counter + 1); //Won't increment counter
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          setCounter(counter - 1);
        }}
      />
      <Text>Current Count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
