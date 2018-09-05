import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import { Card } from 'react-native-elements';
import GlobalStyles from '../Styles';
import { SECONDARY_BACKGROUND, PRIMARY } from '../Constants';

class DetailCard extends React.Component {
    render() {
        const { data, onPress } = this.props;
        const { name } = data;

        return (
            <TouchableOpacity onPress={onPress}>
                <Card containerStyle={styles.cardContainer} >
                        <View style={{flex: 1}}>
                            <Text style={[styles.title, {color: PRIMARY, textAlign: 'center', textAlignVertical: 'center'}]}>{name.toUpperCase()}</Text>
                        </View>
                    <Image
                        style={{flex: 1, width: 50, height: 50, backgroundColor: 'red', resizeMode: 'contain'}}
                        source={require('../images/logo.png')}
                    />
                </Card>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({...GlobalStyles,
    cardContainer: {
        flex: 1,
        flexDirection: 'row',
        height: 100,
        backgroundColor: SECONDARY_BACKGROUND
    }
});

export default DetailCard;