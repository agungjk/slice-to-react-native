import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import _chunk from 'lodash/chunk';
import {menus, posts} from '@data';
import Header from '@components/header';
import Bell from '@components/bell';
import Search from '@components/search';
import Menu from '@components/menu';
import Heading from '@components/heading';
import Post from '@components/post';
import Tabbar from '@components/tabbar';


export default () => {
  const grouped = _chunk(menus, 3);

  const renderSubtitle = (
    <>
      Choose your course <Text style={styles.highlight}>right away</Text>
    </>
  );

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView style={styles.scroll}>
        <View style={styles.header}>
          <Header title="Home Page" subtitle={renderSubtitle} />
          <Bell />
        </View>

        <Search />

        {grouped.map((items, index) => (
          <View style={styles.menu} key={index}>
            {items.map((value, key) => (
              <Menu data={value} key={key} />
            ))}
          </View>
        ))}

        <View style={styles.lists}>
          <Heading title="Recomended course" subtitle="You may also like" />
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {posts.map((item, index) => (
              <Post data={item} key={index} />
            ))}
          </ScrollView>
        </View>
      </ScrollView>
      <Tabbar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#fff',
    flex: 1,
  },
  scroll: {
    backgroundColor: '#f4f4f7',
  },
  header: {
    marginTop: 25,
    marginHorizontal: 25,
    flexDirection: 'row',
    flex: 1,
  },
  highlight: {
    color: '#34b085',
  },
  menu: {
    marginTop: 40,
    marginHorizontal: 25,
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  lists: {
    marginTop: 40,
    marginBottom: 25,
    marginHorizontal: 25,
  },
});
