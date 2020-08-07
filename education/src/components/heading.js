import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default (props) => {
  const {title, subtitle, action = 'More', large} = props;

  return (
    <View style={styles.header}>
      <View>
        <Text style={[styles.title, large && styles.large]}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <TouchableOpacity style={styles.action}>
        <Text style={styles.text}>{action}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    flex: 1,
    marginBottom: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
  },
  large: {
    fontSize: 24,
  },
  subtitle: {
    marginTop: 5,
    fontSize: 12,
    fontWeight: '500',
    color: 'gray',
  },
  action: {
    flex: 1,
  },
  text: {
    alignSelf: 'flex-end',
    color: 'gray',
    fontSize: 12,
  },
});
