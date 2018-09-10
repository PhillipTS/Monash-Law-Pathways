import React from 'react';
import { StackActions, NavigationActions } from 'react-navigation';
import NavBar from './NavBar';
import { BACKGROUND } from '../Constants';

export default ({ navigation }) => {
    return {
        headerTitle: <NavBar goToHome={() => navigation.dispatch(
            StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: 'Home' })],
            })
        )}/>,
        headerStyle: {
            backgroundColor: BACKGROUND
        }
    }
}