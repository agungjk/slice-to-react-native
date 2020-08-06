import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import Header from './header';
import Card from './card';
import Ask from './ask';
import Speciality from './speciality';

export default () => (
  <SafeAreaView>
    <ScrollView>
      <Header />
      <Card />
      <Ask />
      <Speciality />
    </ScrollView>
  </SafeAreaView>
);
