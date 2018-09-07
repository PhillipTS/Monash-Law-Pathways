import React from 'react';
import {
    View,
    Image,
    StyleSheet,
    Dimensions
} from 'react-native';
import GlobalStyles from '../Styles';

const light = require('../images/background_light.png');
const dark = require('../images/background_dark.png');

class Background extends React.Component {
    render() {
        const { height } = Dimensions.get('window');
        const { darkTheme } = this.props

        return (
            <View style={styles.backgrounContainer}>
                <Image
                    style={[styles.image, {height: height}]}
                    source={darkTheme ? dark : light}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({...GlobalStyles,
    backgrounContainer: {
        position: 'absolute',
        flex: 1
    },
    image: {
        flex: 1,
        resizeMode: 'contain'
    }
})

export default Background;