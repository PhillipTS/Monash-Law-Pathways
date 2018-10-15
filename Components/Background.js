import React from 'react';
import {
    View,
    Image,
    StyleSheet
} from 'react-native';
import GlobalStyles from '../Styles';

class Background extends React.Component {
    render() {
        return (
            <View style={styles.backgroundContainer}>
                <Image
                    style={styles.image}
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
        resizeMode: 'contain'
    }
})

export default Background;