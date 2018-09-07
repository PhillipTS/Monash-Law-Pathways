import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import GlobalStyles from '../Styles';
import { SECONDARY_BACKGROUND, PRIMARY } from '../Constants';

const defaultIcon = require('../images/default_icon.png');

class DetailCard extends React.Component {
    render() {
        const { data, onPress } = this.props;
        const { name } = data;

        return (
            <TouchableOpacity onPress={onPress}>
                <View style={styles.cardContainer} >
                    <Text style={[styles.title, styles.text, {marginLeft: 10}]}>
                        {name.toUpperCase()}
                    </Text>
                    <Image
                        style={styles.icon}
                        source={data.icon || defaultIcon}
                    />
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({...GlobalStyles,
    cardContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 80,
        backgroundColor: SECONDARY_BACKGROUND,
        margin: 10
    },
    icon: {
        flex: 1,
        height: 50,
        width: 50,
        resizeMode: 'contain'
    }
});

export default DetailCard;