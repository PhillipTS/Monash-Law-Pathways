import React from 'react';
import {
    View,
    ScrollView,
    StyleSheet
} from 'react-native';
import {
    Text as Title
} from 'react-native-elements';
import GlobalStyles from '../Styles';
import NavBar from '../Components/NavBar';
import OpportunitySearch from '../Components/OpportunitySearch';
import IndustrySelect from '../Components/IndustrySelect';
import DetailCard from '../Components/DetailCard';

const data = [1,2,3,4,5,6].map((value)=>{
    return {
        name: 'Company ' + value,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    }
})

class ListScreen extends React.Component {
    static navigationOptions = {
        headerTitle: <NavBar/>
    };

    render() {
        const { getParam, push } = this.props.navigation;

        const headerType = getParam('headerType', 'title');  // Enum: 'title', 'select', 'search'
        const headerValue = getParam('headerValue', null);
        const dataType = getParam('dataType', 'opportunities'); // Enum: 'opportunities', 'grad-profiles', 'sectors'

        return (
            <View style={styles.container}>
                <Header type={headerType} value={headerValue} changeScreen={push} />
                <View style={{flex: 9}}>
                    <ScrollView style={{borderColor: 'black', borderWidth: 2}}>
                        {data.map((company) => <DetailCard key={company.name} name={company.name} description={company.description}/>)}
                    </ScrollView>
                </View>
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

const SearchHeader = (props) =>
    <View style={{flex: 1, width: '80%'}}>
        <OpportunitySearch placeholder={props.value} />
    </View>

const SelectHeader = (props) => 
    <View style={{flex: 1, width: '80%', margin: 20}}>
        <IndustrySelect selectedValue={props.value} onSelect={(value) => props.changeScreen('List', {headerType: 'select', headerValue: value, dataType: 'opportunities'})} />
    </View>

const TitleHeader = (props) => <Title style={styles.title} h4>{props.value}</Title>

const styles = StyleSheet.create(Object.assign(GlobalStyles, {

}));

export default ListScreen;