import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default (props) => {
  const {title, subtitle} = props;

  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    fontWeight: '500',
  },
  subtitle: {
    marginTop: 5,
    fontSize: 10,
    fontWeight: '500',
    color: 'gray',
  },
});
