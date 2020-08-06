import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';

const imgLove = {
  dark: require('@images/love-dark.png'),
  light: require('@images/love-light.png'),
};

export default (props) => {
  const {selected} = props;

  return (
    <TouchableOpacity style={[styles.block, selected && styles.selected]}>
      <AutoHeightImage
        source={selected ? imgLove.light : imgLove.dark}
        width={15}
        height={15}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  block: {
    width: 30,
    height: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    alignSelf: 'flex-end',
    borderColor: '#dde0e2',
    borderWidth: 1,
  },
  selected: {
    backgroundColor: '#fe6969',
    borderColor: '#fe6969',
    shadowColor: '#fe6969',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
});
