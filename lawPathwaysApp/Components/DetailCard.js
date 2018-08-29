import React from 'react';
import {
    View,
    Text,
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
        const { name, description } = this.props;

        return (
            <Card containerStyle={{
                flex: 1,
                flexDirection: 'row',
                height: 100,
                backgroundColor: BACKGROUND1
                }}>
                <View style={{flex: 1}}>
                    <Text style={[{padding: 5, fontSize: 12}, styles.text]}>{name}</Text>
                    <Text style={[{padding: 5, fontSize: 8}, styles.text]}>{description}</Text>
                </View>
                {//<Icon containerStyle={{flex: 1, backgroundColor: 'red'}} iconStyle={{height: 100, width: 100}} name='clear' raised/>
                }
            </Card>
        )
    }
}

const styles = StyleSheet.create(Object.assign(GlobalStyles, {
    
  }));

export default DetailCard;