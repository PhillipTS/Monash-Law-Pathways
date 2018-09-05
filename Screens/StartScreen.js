import React from 'react';
import {
    View,
    Image,
    StyleSheet,
    Dimensions
} from 'react-native';
import GlobalStyles from '../Styles';
import NavBar from '../Components/NavBar';
import Button from '../Components/Button';
import { PRIMARY } from '../Constants';

class StartScreen extends React.Component {
    static navigationOptions = {
        headerTitle: <NavBar/>
    };

    render() {
        const { navigate } = this.props.navigation;
        const { width } = Dimensions.get('window');

        return (
            <View style={styles.box}>
                    <View style={{flex: 5}}>
                        <Image style={{flex: 1, width: width - 20, resizeMode: 'contain'}} source={require('../images/large_logo.png')}/>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button
                            onPress={() => navigate('Home')}
                            label='     START     '
                        />
                    </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({...GlobalStyles,
    box: {
        flex: 1,
        backgroundColor: PRIMARY,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonContainer: {
        flex: 1,
        shadowColor: 'black',
        shadowOffset: {
            width: 100,
            height: 100
        },
        shadowOpacity: 0.5,
        marginBottom: 20
    }
})

export default StartScreen;