import React from 'react';
import {
    View,
    Image,
    TouchableOpacity
} from 'react-native';

class NavBar extends React.Component {
    render() {
        const { goToHome } = this.props;
        return (
            <TouchableOpacity
                style={{flex: 1, alignItems: 'center'}}
                onPress={goToHome}
            >
                <Image source={require('../images/banner_blue_background.png')}/>
                <View/>
            </TouchableOpacity>
        )
    }
}

export default NavBar;