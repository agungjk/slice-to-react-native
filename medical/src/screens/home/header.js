import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const imgCalendar = require('@images/calendar.png');
const imgMenu = require('@images/menu.png');

export default () => (
  <View style={styles.header}>
    <Text style={styles.welcome}>Welcome, John</Text>
    <View style={styles.actions}>
      <View style={styles.icons}>
        <TouchableOpacity style={styles.left}>
          <Image
            source={imgCalendar}
            style={styles.calendar}
            width={25}
            height={25}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.right}>
          <Image
            source={imgMenu}
            style={styles.calendar}
            width={25}
            height={25}
          />
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  right: {
    borderRadius: 15,
    paddingVertical: 10,
    paddingLeft: 10,
  },
  left: {
    borderRadius: 15,
    padding: 10,
    borderWidth: 0.5,
    borderColor: '#0E0E0E',
    marginRight: 5,
  },
  header: {
    marginTop: 25,
    marginHorizontal: 25,
    flexDirection: 'row',
  },
  icons: {
    flexDirection: 'row',
  },
  actions: {
    alignItems: 'flex-end',
    flex: 1,
  },
  welcome: {
    fontSize: 21,
    fontWeight: '500',
    alignSelf: 'center',
  },
});
