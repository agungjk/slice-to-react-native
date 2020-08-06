import React from 'react';
import {View, TextInput, Platform, StyleSheet} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';

const imgSearch = require('@images/search.png');

export default () => (
  <View style={styles.block}>
    <AutoHeightImage
      source={imgSearch}
      width={25}
      height={25}
      style={styles.icon}
      resizeMode="contain"
    />
    <TextInput
      style={styles.input}
      placeholder="Search for your grade, course, training type..."
    />
  </View>
);

const styles = StyleSheet.create({
  block: {
    marginTop: 40,
    marginHorizontal: 25,
    flexDirection: 'row',
    flex: 1,
    backgroundColor: '#f7fafb',
  },
  input: {
    marginTop: 5,
    fontSize: 13,
    color: 'gray',
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
  },
  icon: {
    margin: 10,
    marginTop: Platform.select({ios: 12, android: 15}),
  },
  round: {
    backgroundColor: '#ff8080',
    borderRadius: 5,
    width: 11,
    height: 11,
    right: -3,
    top: 1.5,
    borderColor: '#fff',
    borderWidth: 2,
    position: 'absolute',
  },
});
