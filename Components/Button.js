import React from 'react';
import {
    Text,
    TouchableOpacity,
    StyleSheet,
    Platform
} from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import GlobalStyles from '../Styles';
import { SECONDARY, BORDER_RADIUS } from '../Constants';

class Button extends React.Component {
    render() {
        const { onPress, label, containerStyle, labelStyle, disabled } = this.props;
        return (
            <TouchableOpacity
                style={[styles.buttonContainer, disabled ? {backgroundColor: 'grey'} : null, containerStyle]}
                onPress={disabled ? () => {} : onPress}
                activeOpacity={disabled ? 1 : 0.2}
            >
                <Text style={[styles.title, styles.buttonLabel, labelStyle]}>{label}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({...GlobalStyles,
    buttonContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: moderateScale(1),
        padding: moderateScale(1),
        ...Platform.select({ios: {paddingTop: 5}, android: {}}),
        maxHeight: verticalScale(50),
        borderRadius: BORDER_RADIUS,
        borderColor: 'black',
        borderWidth: scale(1),
        backgroundColor: SECONDARY
    },
    buttonLabel: {
        flex: 1,
        textAlign: 'center',
        textAlignVertical: 'center',
    }
});

export default Button;