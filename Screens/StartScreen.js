import React from 'react';
import { StackActions, NavigationActions } from 'react-navigation';
import {
    View,
    Image,
    Text,
    StyleSheet,
    Dimensions
} from 'react-native';
import GlobalStyles from '../Styles';
import Button from '../Components/Button';
import { PRIMARY, WHITE } from '../Constants';

class StartScreen extends React.Component {
    static navigationOptions = {
        header: null
    };

    render() {
        const { dispatch } = this.props.navigation;
        const { width } = Dimensions.get('window');

        return (
            <View style={styles.box}>

                <View style={{flex: 5}}>
                    <Image style={{flex: 1, width: width - 20, resizeMode: 'contain'}} source={require('../images/large_logo.png')}/>
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
    subTitle: {
        color: WHITE,
        fontSize: 16,
        fontStyle: 'italic',
        paddingBottom: 50
    },
    buttonContainer: {
        flex: 1,
        /*  Failed attempt at shadow
        shadowColor: 'black',
        shadowOffset: {
            width: 100,
            height: 100
        },
        shadowOpacity: 0.5,*/
    }
})

export default StartScreen;