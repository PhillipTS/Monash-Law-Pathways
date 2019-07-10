import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import GlobalStyles from '../Styles';
import { SECONDARY_BACKGROUND, BORDER_RADIUS } from '../Constants';

import DefaultIcon from '../assets/images/compass_icon.png';


const styles = StyleSheet.create({
  ...GlobalStyles,
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: moderateScale(10),
    height: verticalScale(80),
    borderColor: 'black',
    borderWidth: scale(1),
    borderRadius: BORDER_RADIUS,
    backgroundColor: SECONDARY_BACKGROUND,
  },
  icon: {
    flex: 1,
    height: verticalScale(100),
    width: scale(100),
    resizeMode: 'contain',
  },
});

const DetailCard = ({ data, onPress }) => {
  const { name, icon } = data;

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.cardContainer}>
        <Text style={[styles.title, styles.text, { flex: 1, marginLeft: moderateScale(10) }]}>
          {name.toUpperCase()}
        </Text>
        <View>
          <Image style={styles.icon} source={icon || DefaultIcon} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DetailCard;
