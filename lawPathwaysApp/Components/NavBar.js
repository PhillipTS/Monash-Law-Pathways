import React from 'react';
import {
    View,
    Image
} from 'react-native';

class NavBar extends React.Component {
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center'}}>
                <Image source={require('../images/logo.png')}/>
                <View/>
            </View>
        )
    }
}

export default NavBar;