import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {styleColor} from '@util';
import Favorite from '@components/favorite';
import Star from '@components/star';

export default (props) => {
  const {data} = props;

  return (
    <>
      <View style={styles.block}>
        <View style={styles.img} />
        <View style={styles.info}>
          <Text style={styles.name}>
            How hard is it for humans to climb Mount Everest?
          </Text>
          <View style={styles.action}>
            <View style={[styles.item, styles.itemFirst]}>
              <Text style={styles.category}>Record</Text>
            </View>
            <View style={styles.item}>
              <View style={styles.row}>
                <Favorite type="plain" selected />
                <Text style={styles.category}>122</Text>
              </View>
            </View>
            <View style={styles.item}>
              <Text style={styles.category}>9</Text>
            </View>
            <View style={styles.item}>
              <Text style={styles.category}>icon</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.hr} />
    </>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    flexDirection: 'row',
  },
  img: {
    width: 90,
    height: 95,
    backgroundColor: '#566977',
    borderRadius: 7,
  },
  info: {
    paddingLeft: 25,
    paddingVertical: 5,
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: '500',
    height: 65,
    color: '#646465',
  },
  action: {
    flexDirection: 'row',
  },
  row: {
    width: 50,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  item: {
    flex: 1,
    alignItems: 'flex-end',
  },
  itemFirst: {
    alignItems: 'flex-start',
  },
  category: {
    flex: 1,
    fontSize: 14,
    fontWeight: '500',
    color: '#acacac',
  },
  favorite: {
    flex: 1,
    color: '#acacac',
  },
  comment: {
    flex: 1,
    color: '#acacac',
  },
  hr: {
    marginVertical: 10,
    borderColor: '#e2e1e1',
    borderWidth: 0.5,
  },
});
