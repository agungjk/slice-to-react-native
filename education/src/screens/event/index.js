import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import _chunk from 'lodash/chunk';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {menus, posts} from '@data';
import Heading from '@components/heading';
import Event from '@components/event';
import Tabbar from '@components/tabbar';

const {width} = Dimensions.get('screen');

const slides = [
  {
    title:"Item 2",
    text: "Text 2",
  },
  {
    title:"Item 3",
    text: "Text 3",
  },
  {
    title:"Item 4",
    text: "Text 4",
  },
  {
    title:"Item 5",
    text: "Text 5",
  }
];

export default () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const grouped = _chunk(menus, 3);

  const renderSubtitle = <Text style={styles.highlight}>Join now</Text>;

  const renderItem = ({item, index}) => {
    return <View style={styles.slide} />;
  };

  const renderDots = (activeIndex, total) => slides.map(
    (item, index) => (
      <View
        key={index}
        style={[styles.dot, activeSlide == index && styles.dotActive]}>

      </View>
    )
  );

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView style={styles.scroll}>
        <View style={styles.header}>
          <Heading
            large
            title="Today's event"
            subtitle={renderSubtitle}
            action="view all >"
          />
        </View>

        <View>
          <Carousel
            data={slides}
            renderItem={renderItem}
            sliderWidth={width}
            itemWidth={width}
            onSnapToItem={(index) => setActiveSlide(index)}
          />
          <Pagination
            dotsLength={slides.length}
            activeDotIndex={activeSlide}
            containerStyle={styles.pagination}
            renderDots={renderDots}
          />
        </View>

        <View style={styles.lists}>
          <View style={styles.nav}>
            <TouchableOpacity style={styles.item}>
              <Text style={[styles.itemLabel, styles.itemActive]}>
                Popular
              </Text>
              <View style={styles.itemIndicator} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
              <Text style={styles.itemLabel}>Lecture</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
              <Text style={styles.itemLabel}>Taste</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
              <Text style={styles.itemLabel}>Task</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
              <Text style={styles.itemLabel}>Radio</Text>
            </TouchableOpacity>
          </View>
          {posts.map((item, index) => (
            <Event data={item} key={index} />
          ))}
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
    marginBottom: 10,
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
    margin: 25,
  },
  nav: {
    flexDirection: 'row',
    flex: 1,
    paddingBottom: 30,
  },
  item: {
    flex: 1,
  },
  itemLabel: {
    flex: 1,
    fontSize: 16,
    color: '#b2b2b2',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  itemActive: {
    fontSize: 18,
    color: '#000',
    fontWeight: '500',
  },
  itemIndicator: {
    backgroundColor: '#2cac7f',
    width: 15,
    height: 2,
    borderRadius: 3,
    marginTop: 5,
    alignSelf: 'center',
    flex: 1,
  },

  slide: {
    backgroundColor: '#34b085',
    borderRadius: 10,
    height: width * 0.4,
    padding: 10,
    marginLeft: 25,
    marginRight: 25,
  },
  pagination: {
    paddingVertical: 20,
  },
  dot: {
    marginRight: 5,
    height: 5,
    width: 10,
    backgroundColor: '#dedede',
    borderRadius: 5,
  },
  dotActive: {
    width: 30,
    backgroundColor: '#2cac7f',
  }
});
