import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {styleColor} from '@util';
import Favorite from '@components/favorite';
import Star from '@components/star';

export default (props) => {
  const {data} = props;

  return (
    <View style={styles.block}>
      <View style={styles.info}>
        <Text style={styles.name}>{data.title}</Text>
        <Text style={styles.rate}>{data.rating}</Text>
        <View style={styles.action}>
          <Star value={data.rating / 2} />
          <Favorite selected={data.favorite} />
        </View>
      </View>
      <View style={[styles.img, styleColor(data.color)]} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    width: 150,
    marginRight: 25,
    marginBottom: 15,
  },
  img: {
    backgroundColor: 'red',
    borderRadius: 5,
    height: 80,
    width: 140,
    position: 'absolute',
    left: 5,
    right: 5,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 5,
  },
  info: {
    backgroundColor: '#fdfdfe',
    borderWidth: 0.5,
    borderColor: 'silver',
    borderRadius: 5,
    flex: 1,
    marginTop: 50,
    paddingTop: 45,
    paddingHorizontal: 10,
  },
  name: {
    fontSize: 14,
    fontWeight: '500',
    color: '#646465',
  },
  rate: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  action: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 10,
  },
});
