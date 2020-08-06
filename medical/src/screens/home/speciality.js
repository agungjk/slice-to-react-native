import React from 'react';
import {
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const icons = [
  require('@images/speciality-1.png'),
  require('@images/speciality-2.png'),
  require('@images/speciality-3.png'),
];

export default () => (
  <>
    <Text style={styles.title}>Speciality</Text>
    <ScrollView horizontal style={styles.wrapper}>
      {new Array(10).fill(true).map((_, index) => (
        <TouchableOpacity style={styles.block} key={index}>
          <Image source={icons[index % 3]} style={styles.img} />
          <Text style={styles.name}>Neurology</Text>
          <Text style={styles.number}>2,029 Doctors</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  </>
);

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 20,
  },
  block: {
    marginLeft: 25,
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: '#f8f8fa',
    borderColor: '#e5eaf9',
    borderWidth: 1,
    borderRadius: 15,
    alignItems: 'center',
  },
  info: {
    flex: 1,
  },
  title: {
    marginTop: 30,
    marginBottom: 15,
    marginHorizontal: 25,
    fontWeight: '500',
    fontSize: 24,
  },
  name: {
    marginTop: 10,
    fontWeight: '500',
    fontSize: 18,
  },
  number: {
    color: '#6b7899',
    fontWeight: '400',
    fontSize: 14,
    marginTop: 10,
  },
  img: {
    alignItems: 'center',
    marginBottom: 10,
    height: 70,
    width: 70,
    flex: 1,
  },
});
