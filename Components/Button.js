import React from 'react';
import {
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
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
        margin: 1,
        padding: 1,
        maxHeight: 50,
        borderRadius: BORDER_RADIUS,
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: SECONDARY
    },
    buttonLabel: {
        flex: 1,
        textAlign: 'center',
        textAlignVertical: 'center'
    }
});

export default Button;