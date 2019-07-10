import { scale, moderateScale } from 'react-native-size-matters';
import {
  PRIMARY, BACKGROUND, WHITE, BORDER_RADIUS, TITLE_FONT, TEXT_FONT,
} from './Constants';

export default {
  container: {
    flex: 1,
    backgroundColor: BACKGROUND,
    alignItems: 'center',
    justifyContent: 'center',
    padding: moderateScale(20),
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: moderateScale(10),
    borderColor: 'black',
    borderWidth: scale(2),
    backgroundColor: PRIMARY,
    borderRadius: BORDER_RADIUS,
  },
  popup: {
    flex: 1,
    backgroundColor: WHITE,
    margin: moderateScale(40),
    padding: moderateScale(10),
    borderColor: 'black',
    borderWidth: scale(2),
  },
  title: {
    margin: moderateScale(5),
    textAlign: 'center',
    textAlignVertical: 'center',
    fontFamily: TITLE_FONT,
    fontSize: moderateScale(14),
  },
  text: {
    color: PRIMARY,
    fontFamily: TEXT_FONT,
    fontSize: moderateScale(14),
  },
};
