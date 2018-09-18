import React from 'react';
import NavBar from './NavBar';
import { BACKGROUND } from '../Constants';

export default ({ navigation }) => {
    return {
        headerTitle: <NavBar goToHome={() => navigation.popToTop()}/>,
        headerStyle: {
            backgroundColor: BACKGROUND
        }
    }
}