import React from 'react';
import { StackActions, NavigationActions } from 'react-navigation';
import {
    View,
    Image,
    Text,
    StyleSheet,
    Dimensions
} from 'react-native';
import { Font } from 'expo';
import GlobalStyles from '../Styles';
import Button from '../Components/Button';
import { PRIMARY, WHITE } from '../Constants';

class StartScreen extends React.Component {
    static navigationOptions = { header: null };

    constructor(props) {
        super(props);
        this.state = { fontsLoaded: false };
    }

    async componentDidMount() {
        await Font.loadAsync({
            'open-sans': require('../assets/fonts/OpenSans-Regular.ttf'),
            'oswald': require('../assets/fonts/Oswald-Regular.ttf')
        });

        this.setState({ fontsLoaded: true });
    }

    render() {
        const { dispatch } = this.props.navigation;
        const { fontsLoaded } = this.state;
        const { width } = Dimensions.get('window');

        if (!fontsLoaded) {return <View/>}

        return (
            <View style={styles.box}>

                <View style={{flex: 5}}>
                    <Image style={{flex: 1, width: width - 20, resizeMode: 'contain'}} source={require('../assets/images/large_logo.png')}/>
                </View>

                <Text style={[styles.title, styles.subTitle]}>START YOUR PATHWAY TO SUCCESS</Text>

                <View style={styles.buttonContainer}>
                    <Button
                        onPress={() => dispatch(
                            StackActions.reset({
                                index: 0,
                                actions: [NavigationActions.navigate({ routeName: 'Home' })],
                            })
                        )}
                        label='START'
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
    subTitle: {
        color: WHITE,
        fontSize: 16,
        fontStyle: 'italic',
        paddingBottom: 50
    },
    buttonContainer: {
        flex: 1,
        minWidth: 150
    }
})

export default StartScreen;