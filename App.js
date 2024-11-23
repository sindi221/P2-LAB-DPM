import React from "react";
import {View, Text, Dimensions, StyleSheet, ViewComponent} from 'react-native'

const DimensionExample = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> SINDI MAHARANI</Text>

      <View style={styles.row}>
        <View style={styles.box1}></View>
        <View style={styles.box2}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d3d3d3',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  box1: {
    backgroundColor: 'red',
    width: 100,
    height: 100,
  },
  box2: {
    backgroundColor: 'yellow',
    width: 100,
    height: 100
  }

});




export default DimensionExample;