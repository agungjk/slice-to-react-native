import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import {styleColor} from '@util';

export default (props) => {
  const {data} = props;

  return (
    <View style={styles.block}>
      <View style={[styles.icon, styleColor(data.color)]}>
        <AutoHeightImage source={data.img} width={data.imgWidth} />
      </View>
      <Text style={styles.name}>{data.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 0.3,
    height: 115,
  },
  icon: {
    backgroundColor: 'red',
    height: 80,
    width: 80,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 15,
  },
  name: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '500',
    marginTop: 15,
  },
});
