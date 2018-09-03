import React from 'react';
import {
    StyleSheet
} from 'react-native';
import {
    SearchBar
} from 'react-native-elements';
import GlobalStyles from '../Styles';
import { BACKGROUND2, PRIMARY, SECONDARY, TETIARY } from '../Constants';

class OpportunitySearch extends React.Component {
    render() {
        const { data, onSelect, placeholder } = this.props;

        return (
            <SearchBar
                containerStyle={{backgroundColor: BACKGROUND2}}
                inputStyle={[{backgroundColor: SECONDARY}, styles.text]}
                placeholder={placeholder}
            />
        )
    }
}

const styles = StyleSheet.create(Object.assign(GlobalStyles, {

}));

export default OpportunitySearch;