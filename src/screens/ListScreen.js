import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
//FlatList needs two props: data and renderItem
//Data needs 'key'
//keyExtractor prop: a function written to generate the key of the data
//horizontal prop: left to right instead 'horizontal === horizontal={true}'
//showsHorizontalScrollIndicator: true or false, just shows/hide the scroll bar. Default value is true

const ListScreen = () => {
  const friends = [
    {name: 'Friend #1', age: 20},
    {name: 'Friend #2', age: 45},
    {name: 'Friend #3', age: 32},
    {name: 'Friend #4', age: 19},
    {name: 'Friend #5', age: 22},
    {name: 'Friend #6', age: 25},
    {name: 'Friend #7', age: 21},
    {name: 'Friend #8', age: 23},
    {name: 'Friend #9', age: 22}
  ];

  return (
    <FlatList
      keyExtractor={friend => friend.name}
      data={friends}
      //renderItem={(element) => {
        // element === {item: {name: 'Friend #1'}, index: 0}
      renderItem = {({ item }) => {
        return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50
  }
});

export default ListScreen;
