import React from 'react';
import {
  View,
  Image,
  Modal,
  Linking,
  ScrollView,
  StyleSheet,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
import GlobalStyles from '../Styles';
import Button from './Button';
import { PRIMARY } from '../Constants';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  ...GlobalStyles,
  buttonContainer: {
    borderColor: 'black',
    borderWidth: scale(3),
    height: verticalScale(50),
  },
  floatingLogo: {
    position: 'absolute',
    zIndex: 10,
    width: scale(50),
    height: verticalScale(50),
    top: verticalScale(10),
    right: scale(10),
  },
});

const DetailPopup = ({
  popupOpen, buttonLabel, onRequestClose, onButtonPress, data, buttonDisabled,
}) => {
  const { file, link } = data;
  return (
    <Modal animationType="slide" visible={popupOpen} onRequestClose={onRequestClose}>
      {/** <Image style={styles.floatingLogo} source={require('../assets/images/logo.png')}/> */}
      <SafeAreaView style={{ flex: 1, backgroundColor: PRIMARY }}>
        <ScrollView>
          <Image
            style={{ width, height: verticalScale(height < 1000 ? 1000 : 1300) }}
            source={file}
          />
        </ScrollView>
        { link && (
          <View style={styles.buttonContainer}>
            <Button
              label="MORE INFO"
              onPress={() => Linking.openURL(link)}
              containerStyle={{ margin: 0, borderRadius: 0, borderBottomWidth: 0 }}
            />
          </View>
        )}
        { onButtonPress && (
          <View style={styles.buttonContainer}>
            <Button
              label={buttonLabel}
              onPress={onButtonPress}
              containerStyle={{ margin: 0, borderRadius: 0 }}
              disabled={buttonDisabled}
            />
          </View>
        )}
        <View style={styles.buttonContainer}>
          <Button
            label="CLOSE"
            onPress={onRequestClose}
            containerStyle={{ margin: 0, borderRadius: 0 }}
          />
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default DetailPopup;
