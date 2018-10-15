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
        const { width, height } = Dimensions.get('window');

        return (
            <View style={styles.backgroundContainer}>
                <Image
                    style={[styles.image, height < 1000 && {width}, {height}]}
                    source={require('../assets/images/background_space.png')}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({...GlobalStyles,
    backgroundContainer: {
        position: 'absolute',
        flex: 1
    },
    image: {
        flex: 1,
        resizeMode: 'stretch'
    }
})

export default Background;