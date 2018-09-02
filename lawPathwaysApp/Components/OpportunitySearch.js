import React from 'react';
import {
    TouchableOpacity,
    View,
    Text,
    StyleSheet
} from 'react-native';
import {
    SearchBar
} from 'react-native-elements';
import GlobalStyles from '../Styles';
import {
    BACKGROUND2
} from '../Constants';

class OpportunitySearch extends React.Component {
    render() {
        const { data, onSelect, placeholder } = this.props;

        return (
            <SearchBar
                inputStyle={[{backgroundColor: BACKGROUND2}, styles.text]}
                placeholder={placeholder}
            />
        )
    }
}

const styles = StyleSheet.create(Object.assign(GlobalStyles, {

}));

export default OpportunitySearch;