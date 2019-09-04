import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

// TextInput starts with no style at all
// Two props to stop autocorrect and auto capitalization: autoCapitalize autoCorrect
// TextScreen would pass two values for TextInput: value and onChangeText(), for communicating the data between child and parent

const TextScreen = () => {
  const[text, setText] = useState('');

  return (
    <View>
      <Text>Enter Password:</Text>
      <TextInput
        style={styles.inputStyle}
        autoCapitalize="none" // other values are "characters", "sentences", "words"
        autoCorrect={false}
        value={text}
        onChangeText={(newText) => setText(newText)} // newText === the text typed by the user
      />
      {text.lenth < 4
        ? <Text>Password must be at least 4 characters</Text>
        : null}
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1
  }
});

export default TextScreen;
