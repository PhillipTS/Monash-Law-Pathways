import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import GlobalStyles from '../Styles';
import IndustrySelect from '../Components/IndustrySelect';

class ListScreen extends React.Component {
    render() {
        const { getParam, push } = this.props.navigation;

        const headerType = getParam('headerType', 'title');  // Enum: 'title', 'select', 'search'
        const headerValue = getParam('headerValue', null);
        const dataType = getParam('dataType', 'opportunities'); // Enum: 'opportunities', 'grad-profiles'

        return (
            <View style={styles.container}>
                <Header type={headerType} value={headerValue} changeScreen={push} />
            </View>
        )
    }
}

const Header = (props) => {
    const { type, value, changeScreen } = props;
    switch (type) {
        case 'title':
            return <TitleHeader value={value} />
        case 'select':
            return <SelectHeader value={value} changeScreen={changeScreen} />
        case 'search':
            return <SearchHeader value={value} />
        default:
            return <View/>
    }
};

const SearchHeader = (props) => <View/>

const SelectHeader = (props) => 
    <View style={{flex: 1, width: '80%'}}>
        <IndustrySelect selectedValue={props.value} onSelect={(value) => props.changeScreen('List', {headerType: 'select', headerValue: value, dataType: 'opportunities'})} />
    </View>

const TitleHeader = (props) => <Text style={styles.title}>{props.value}</Text>

const styles = StyleSheet.create(Object.assign(GlobalStyles, {
    
}));

export default ListScreen;