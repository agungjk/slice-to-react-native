import React from 'react';
import {View, StyleSheet} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';

const imgStar = {
  full: require('@images/star-full.png'),
  half: require('@images/star-half.png'),
  empty: require('@images/star-empty.png'),
};

export default (props) => {
  const {value = 0} = props;
  const stars = new Array(5).fill(true);

  return (
    <View style={styles.block}>
      {stars.map((_, index) => {
        const isHalf = value > index && value < index + 1;
        const imgStarNotFull = isHalf ? imgStar.half : imgStar.empty;
        const source = value >= index + 1 ? imgStar.full : imgStarNotFull;

        return (
          <AutoHeightImage
            key={index}
            source={source}
            width={10}
            height={10}
            resizeMode="contain"
            style={styles.item}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    alignSelf: 'center',
    flex: 1,
  },
  item: {
    marginRight: 3,
  },
});
