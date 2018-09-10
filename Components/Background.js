import React from 'react';
import {
    View,
    Image,
    StyleSheet,
    Dimensions
} from 'react-native';
import GlobalStyles from '../Styles';

class Background extends React.Component {
    render() {
        const { height } = Dimensions.get('window');

        return (
            <View style={styles.backgrounContainer}>
                <Image
                    style={[styles.image, {height: height}]}
                    source={require('../assets/images/background_space.png')}
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