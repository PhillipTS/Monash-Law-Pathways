import React from 'react';
import {
    View,
    Text,
    StatusBar,
    StyleSheet
} from 'react-native';
import {
    Text as Title
} from 'react-native-elements';
import GlobalStyles from '../Styles';
import {
    APP_NAME,
    PRIMARY
} from '../Constants';
import Database from '../Database';
import NavBar from '../Components/NavBar';
import OpportunitySearch from '../Components/OpportunitySearch';
import Select from '../Components/Select';

class HomeScreen extends React.Component {
    static navigationOptions = {
        headerTitle: <NavBar/>
    };

    render() {
        const { navigate } = this.props.navigation;

        const industriesData = Database.Industries.map(({id, name}) => {return {value: id, label: name}});

        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="blue"
                    barStyle="light-content"
                />
                <View style={{flex: 1}}>
                    <Title style={[styles.title, styles.text]} h4>Welcome to {APP_NAME}</Title>
                    <View style={styles.searchAndSelect}>
                        <View style={{flex: 3}}>
                            <OpportunitySearch
                                data={Database.Opportunities.map(opp => opp.name)}
                                onSelect={(value)=> navigate('List', {headerType: 'search', headerValue: value, dataType: 'opportunities'})}
                                placeholder='Search Opportunities'
                            />
                        </View>
                        <Text style={[{flex: 1, textAlignVertical: 'center', textAlign: 'center'}, styles.text]}>OR</Text>
                        <View style={{flex: 3}}>
                            <Select
                                data={industriesData}
                                onSelect={(industry) => navigate('List', {
                                    headerType: 'select',
                                    headerValue: industry,
                                    headerValues: industriesData
                                })}
                                placeholder='Select an Industry'
                            />
                        </View>
                    </View>
                </View>
                {// TODO: Calendar Component
                }
                <View style={{flex: 1}}><Text style={[{flex: 1, textAlignVertical: 'center', textAlign: 'center'}, styles.text]}>CALENDAR</Text></View>
            </View>
        )
    }
}

const styles = StyleSheet.create(Object.assign(GlobalStyles, {
    searchAndSelect: {
        flex: 3,
        justifyContent: 'center',
        padding: 20,
        borderColor: 'black',
        borderWidth: 2,
        backgroundColor: PRIMARY
    }
  }));

export default HomeScreen