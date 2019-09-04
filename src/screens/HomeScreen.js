import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
//Button
//  title prop: displays the string
//  onPress prop: runs a function on press
//TouchableOpacity
//  the button before Button, because people back then were scrubs
//  more configuration option
//'props' parameter passed in the HomeScreen function
//  props object offered by the stackNavigator passed to the components
//  components can send props to other components as objects
// {navigation} destructed props.navigation

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>Lopsided Knee Poll</Text>
      <Button
        onPress={() => navigation.navigate('Components')}
        title="ring ring (To components)"
      />
      <Button
        onPress={() => navigation.navigate('List')}
        title="Boring ol' list"
      />
      <Button
        onPress={() => navigation.navigate('Image')}
        title="Sapnu Puas"
      />
      <Button
        onPress={() => navigation.navigate('Counter')}
        title="Parry This (Counter)"
      />
      <Button
        onPress={() => navigation.navigate('Color')}
        title="Uhhh Color"
      />
      <Button
        onPress={() => navigation.navigate('Square')}
        title="Square"
      />
      <Button
        onPress={() => navigation.navigate('ReducerExercise')}
        title="Something you've definitely seen but unnecessary"
      />
      <Button
        onPress={() => navigation.navigate('Text')}
        title="Things that you can't say"
      />
      <Button
        onPress={() => navigation.navigate('Box')}
        title="Imagination"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
