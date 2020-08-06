import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import LinearGradient from 'react-native-linear-gradient';

const imgArrow = require('@images/arrow.png');

export default () => (
  <TouchableOpacity onPress={() => {}}>
    <LinearGradient colors={['#e5eaf9', '#f7f7fa', '#f5f5f7']} style={styles.block}>
      <View style={styles.info}>
        <Text style={styles.title}>STI Problems ?</Text>
        <Text style={styles.subtitle}>Find suitable specialistshere</Text>
      </View>
      <View style={styles.button}>
        <AutoHeightImage
          source={imgArrow}
          style={styles.img}
          width={30}
        />
      </View>
    </LinearGradient>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  block: {
    marginHorizontal: 25,
    padding: 20,
    flexDirection: 'row',
    borderRadius: 15,
    borderColor: '#e5eaf9',
    borderWidth: 1,
  },
  info: {
    flex: 1,
  },
  button: {
    padding: 10,
    borderRadius: 15,
    backgroundColor: '#FFF'
  },
  title: {
    fontWeight: '500',
    fontSize: 16,
  },
  subtitle: {
    color: '#6b7899',
    fontWeight: '400',
    fontSize: 14,
    marginTop: 10,
  },
  img: {
    alignItems: 'center',
  },
});
