import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';

const imgBell = require('@images/bell.png');

export default () => (
  <View style={styles.block}>
    <TouchableOpacity style={styles.button}>
      <AutoHeightImage
        source={imgBell}
        width={30}
        height={30}
        resizeMode="contain"
      />
      <View style={styles.round} />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    width: 25,
    height: 25,
    marginTop: 10,
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
