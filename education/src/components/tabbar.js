import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';

const imgTabs = [
  {
    text: 'Home',
    img: require('@images/tab-1.png'),
  },
  {
    text: 'Subject',
    img: require('@images/tab-2.png'),
  },
  {
    text: 'Growing',
    img: require('@images/tab-3.png'),
  },
  {
    text: 'My',
    img: require('@images/tab-4.png'),
  },
];

export default (props) => {
  const {selected = 0} = props;

  return (
    <View style={styles.block}>
      {imgTabs.map((tab, index) => {
        return (
          <TouchableOpacity key={index} style={styles.tab}>
            <AutoHeightImage
              source={tab.img}
              width={25}
              height={25}
              resizeMode="contain"
              style={styles.icon}
            />
            <Text style={[styles.text, selected == index && styles.selected]}>
              {tab.text}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    paddingTop: 15,
    paddingBottom: 10,
    backgroundColor: '#fff',
  },
  tab: {
    flex: 1,
  },
  icon: {
    alignSelf: 'center',
  },
  text: {
    paddingTop: 5,
    textAlign: 'center',
    color: '#c3c3c3',
    fontWeight: 'bold',
  },
  selected: {
    color: '#34b085',
  },
});
