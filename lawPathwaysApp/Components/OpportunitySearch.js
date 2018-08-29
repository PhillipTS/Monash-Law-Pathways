import React from 'react';
import {
    StyleSheet
} from 'react-native';
import {
    SearchBar
} from 'react-native-elements';
import GlobalStyles from '../Styles';
import {
    TETIARY, SECONDARY
} from '../Constants';

class OpportunitySearch extends React.Component {
    render() {
        const { placeholder } = this.props;

        return (
            <SearchBar
                containerStyle={{backgroundColor: TETIARY}}
                inputStyle={[{backgroundColor: SECONDARY}, styles.text]}
                placeholder={placeholder}
            />
        )
    }
}

const styles = StyleSheet.create(Object.assign(GlobalStyles, {

}));

export default OpportunitySearch;