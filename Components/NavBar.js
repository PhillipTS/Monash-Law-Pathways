import React from 'react';
import {
    Image,
    TouchableOpacity,
    SafeAreaView
} from 'react-native';

class NavBar extends React.Component {
    render() {
        const { goToHome } = this.props;

        return (
            <SafeAreaView style={{flex: 1}}>
                <TouchableOpacity style={{flex: 1, alignItems: 'center'}} onPress={goToHome}>
                    <Image style={{flex: 1, resizeMode: 'contain'}} source={require('../assets/images/banner_blue.png')}/>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}

export default NavBar;