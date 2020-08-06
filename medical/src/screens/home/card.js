import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';

const {width} = Dimensions.get('window');
const imgPeople = require('@images/people.png');

export default () => (
  <View style={styles.block}>
    <View style={styles.content}>
      <Text style={styles.title}>Healthcare</Text>
      <Text style={styles.subtitle}>
        {`Book your next online\nappointments`}
      </Text>
      <View style={styles.bottom}>
        <AutoHeightImage
          source={imgPeople}
          style={styles.img}
          width={width - 100}
        />
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  block: {
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingTop: 20,
    height: width * 1.1,
    margin: 25,
    backgroundColor: '#05a58f',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  content: {
    flex: 1,
  },
  title: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 50,
  },
  subtitle: {
    color: '#FFF',
    fontWeight: '500',
    fontSize: 16,
    marginTop: 10,
  },
  bottom: {
    flex: 1,
    flexDirection: 'row',
  },
  img: {
    alignSelf: 'flex-end',
  },
});
