import React from 'react';
import {Text, View, StyleSheet} from 'react-native'
// Box Object: padding, border, margin
// Flex: alignItems, flexDirection, justifyContent : for adjusting the children inside the parent
// Flex: flex, alignSelf : for adjusting a specific child itself (more flex more space)
// Position: default value = 'relative' other = 'absolute'
// top, left, right, bottom: distance of an element to a sibling

// Box object rules -> Position
// if relative -> flex box rules -> add element to parent -> apply top left right bottom
// else ignore siblings -> apply top left right bottom

// alignItems: 'center', // default value: stretch
// flexDirection: 'row', // default value: column
// justifyContent: 'space-around', // default value: flex-start
//...StyleSheet.absoluteFillObject // === position: 'absolute', top/right/left/bottom: 0

const BoxScreen = () => {
  return (
    <View style={styles.boxParent}>
        <View style={styles.boxStyle1}/>
        <View style={styles.boxStyle2}/>
        <View style={styles.boxStyle3}/>
    </View>
  );
};

const styles = StyleSheet.create({
  boxParent: {
    height: 350,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  boxStyle1: {
    height: 100,
    width: 100,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'red',
  },
  boxStyle2: {
    height: 100,
    width: 100,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'green',
    alignSelf: 'center'
  },
  boxStyle3: {
    height: 100,
    width: 100,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'blue',
  }
});

export default BoxScreen;
