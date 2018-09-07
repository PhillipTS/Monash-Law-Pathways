import React from 'react';
import {
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import GlobalStyles from '../Styles';
import { PRIMARY, SECONDARY } from '../Constants';

class Button extends React.Component {
    render() {
        const { onPress, label } = this.props;
        return (
            <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
                <Text style={[styles.text, styles.buttonLabel]}>{label}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({...GlobalStyles,
    buttonContainer: {
        flex: 1,
        margin: 1,
        padding: 5,
        maxHeight: 50,
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