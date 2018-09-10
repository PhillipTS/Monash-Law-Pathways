import React from 'react';
import {
    Image,
    TouchableOpacity
} from 'react-native';

class NavBar extends React.Component {
    render() {
        const { goToHome } = this.props;

        return (
            <TouchableOpacity style={{flex: 1, alignItems: 'center'}} onPress={goToHome}>
                <Image style={{flex: 1, resizeMode: 'contain'}} source={require('../assets/images/banner_blue.png')}/>
            </TouchableOpacity>
        )
    }
}

export default NavBar;