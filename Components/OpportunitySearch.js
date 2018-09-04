import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import {
    SearchBar
} from 'react-native-elements';
import GlobalStyles from '../Styles';
import { BACKGROUND2, SECONDARY } from '../Constants';

class OpportunitySearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ''
        };
    }

    render() {
        const { onSelect, placeholder } = this.props;
        const { searchTerm } = this.state;
        return (
            <View style={styles.componentContainer}>
                <SearchBar
                    style={{flex: 3}}
                    containerStyle={styles.searchContainer}
                    inputStyle={[{backgroundColor: SECONDARY}, styles.text]}
                    placeholder={placeholder}
                    onChangeText={(searchTerm) => this.setState({ searchTerm })}
                />
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => onSelect(searchTerm)}
                >
                    <Text style={styles.buttonLabel}>Search</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create(Object.assign(GlobalStyles, {
    componentContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: BACKGROUND2
    },
    searchContainer: {
        backgroundColor: BACKGROUND2,
        width: '75%'
    },
    buttonContainer: {
        flex: 1,
        margin: 5,
        padding: 5,
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: SECONDARY
    },
    buttonLabel: {
        flex: 1,
        textAlignVertical: 'center'
    }
}));

export default OpportunitySearch;