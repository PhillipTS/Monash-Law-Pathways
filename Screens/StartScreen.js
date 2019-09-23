import React from 'react';
import { StackActions, NavigationActions } from 'react-navigation';
import {
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { scale, moderateScale } from 'react-native-size-matters';
import GlobalStyles from '../Styles';
import Button from '../Components/Button';
import DoubleButton from '../Components/DoubleButton';
import { PRIMARY, WHITE } from '../Constants';

import Logo from '../assets/images/large_logo.png';


const styles = StyleSheet.create({
  ...GlobalStyles,
  box: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: PRIMARY,
    padding: moderateScale(10),
    paddingTop: moderateScale(30),
  },
  subTitle: {
    flex: 1,
    color: WHITE,
    fontSize: moderateScale(16),
    fontStyle: 'italic',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  buttonContainer: {
    flex: 1,
    minWidth: scale(150),
    justifyContent: 'center',
  },
});

class StartScreen extends React.Component {
  static navigationOptions() { return { header: null }; }

  render() {
    const { navigation } = this.props;
    const { dispatch } = navigation;
    const { width, height } = Dimensions.get('window');

    return (
      <View style={styles.box}>

        <View style={{ flex: 5 }}>
          <Image style={{ flex: 1, width: width - scale(20), resizeMode: 'contain' }} source={Logo} />
        </View>

        <Text style={[styles.title, styles.subTitle, { paddingTop: height > 1000 ? '15%' : 0 }]}>START YOUR PATHWAY TO SUCCESS</Text>

        {//<DoubleButton/>
        }

        <View style={styles.buttonContainer}>
          <Button
            label="START"
            onPress={() => dispatch(
              StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: 'Home' })],
              }),
            )}
          />
        </View>

      </View>
    );
  }
}

export default StartScreen;
