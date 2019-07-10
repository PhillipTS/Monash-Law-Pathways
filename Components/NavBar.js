import React from 'react';
import {
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import Banner from '../assets/images/banner_blue.png';


const NavBar = ({ goToHome }) => (
  <SafeAreaView style={{ flex: 1 }}>
    <TouchableOpacity style={{ flex: 1, alignItems: 'center' }} onPress={goToHome}>
      <Image style={{ flex: 1, resizeMode: 'contain' }} source={Banner} />
    </TouchableOpacity>
  </SafeAreaView>
);

export default NavBar;
