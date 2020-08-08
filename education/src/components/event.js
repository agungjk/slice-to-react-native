import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import Favorite from '@components/favorite';

const icons = {
  dark: require('@images/love-dark.png'),
  red: require('@images/love-red.png'),
  more: require('@images/more.png'),
  comment: require('@images/comment.png'),
  commentActive: require('@images/comment-active.png'),
};

export default (props) => (
  <>
    <View style={styles.block}>
      <View style={styles.img} />
      <View style={styles.info}>
        <Text style={styles.name}>
          How hard is it for humans to climb Mount Everest?
        </Text>
        <View style={styles.action}>
          <View style={[styles.item, styles.itemFirst]}>
            <Text style={styles.text}>Record</Text>
          </View>
          <View style={styles.item}>
            <View style={styles.row}>
              <AutoHeightImage
                source={icons.dark}
                width={15}
                height={15}
                resizeMode="contain"
              />
              <Text style={styles.text}>122</Text>
            </View>
          </View>
          <View style={styles.item}>
            <View style={styles.row}>
              <AutoHeightImage
                source={icons.commentActive}
                width={15}
                height={15}
                resizeMode="contain"
              />
              <Text style={styles.text}>9</Text>
            </View>
          </View>
          <View style={styles.item}>
            <AutoHeightImage
              source={icons.more}
              width={15}
              height={15}
              resizeMode="contain"
            />
          </View>
        </View>
      </View>
    </View>
    <View style={styles.hr} />
  </>
);

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
    alignContent: 'flex-end',
    alignSelf: 'flex-end',
  },
  item: {
    flex: 0.3,
    alignItems: 'flex-end',
  },
  itemFirst: {
    alignItems: 'flex-start',
  },
  text: {
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
