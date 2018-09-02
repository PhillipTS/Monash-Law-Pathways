import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import {
    Card,
    Icon
} from 'react-native-elements';
import GlobalStyles from '../Styles';
import { BACKGROUND1 } from '../Constants';

class DetailCard extends React.Component {
    render() {
        const { name, description, onPress } = this.props;

        return (
            <TouchableOpacity onPress={onPress}>
                <Card containerStyle={styles.cardContainer} >
                        <View style={{flex: 1}}>
                            <Text style={[{padding: 5, fontSize: 12}, styles.text]}>{name}</Text>
                            <Text style={[{padding: 5, fontSize: 8}, styles.text]}>{description}</Text>
                        </View>
                    {//<Icon containerStyle={{flex: 1, backgroundColor: 'red'}} iconStyle={{height: 100, width: 100}} name='clear' raised/>
                    }
                </Card>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create(Object.assign(GlobalStyles, {
    cardContainer: {
        flex: 1,
        flexDirection: 'row',
        height: 100,
        backgroundColor: BACKGROUND1
    }
  }));

export default DetailCard;