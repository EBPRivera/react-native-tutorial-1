import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ComponentScreen = () => { //or "function() {" it k
  const topText = 'WAAAAAZZZZZZAAAAAAAP (Component)';
  const bottomText = <Text>tiny text</Text>;

  return (
  <View>
    <Text style={styles.textStyle}>{topText}</Text>
    {bottomText}
  </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45
  }
});

export default ComponentScreen;
