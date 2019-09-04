import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const ExerciseScreen = () => {
  const name = 'Mike Rotch';

  return (
    <View>
      <Text style={styles.topStyle}>Getting started with React Native!</Text>
      <Text style={styles.bottomStyle}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  topStyle: {
    fontSize: 45
  },
  bottomStyle: {
    fontSize: 20
  }
});

export default ExerciseScreen;
