import React from 'react';
import {
    View,
    Text,
    StatusBar,
    StyleSheet
} from 'react-native';
import { Text as Title } from 'react-native-elements';
import GlobalStyles from '../Styles';
import { APP_NAME, PRIMARY } from '../Constants';
import Database from '../Database';
import NavBar from '../Components/NavBar';
import OpportunitySearch from '../Components/OpportunitySearch';
import Select from '../Components/Select';
import HomeCalendar from '../Components/HomeCalendar'

class HomeScreen extends React.Component {
    static navigationOptions = {
        headerTitle: <NavBar/>
    };

    render() {
        const { navigate } = this.props.navigation;

        const industriesData = Database.Industries.map(({id, name}) => {return {value: id, label: name}});

        return (
            <View style={styles.container}>
                <StatusBar/>
                <View style={{flex: 4}}>
                    <Title style={[styles.title, styles.text]} h4>Welcome to {APP_NAME}</Title>
                    <View style={styles.searchAndSelect}>
                        <View style={{flex: 3}}>
                            <OpportunitySearch
                                onSelect={(searchTerm) => navigate('List', {
                                    headerType: 'search',
                                    referingValue: searchTerm,
                                    dataType: 'Opportunities'
                                })}
                                placeholder='Search Opportunities'
                            />
                        </View>
                        <Text style={[{flex: 1, textAlignVertical: 'center', textAlign: 'center'}, styles.text]}>OR</Text>
                        <View style={{flex: 3}}>
                            <Select
                                data={industriesData}
                                onSelect={(industryID) => navigate('List', {
                                    headerType: 'select',
                                    referingValue: industryID,
                                    otherValues: industriesData,
                                    dataType: 'Sectors'
                                })}
                                placeholder='Select an Industry'
                            />
                        </View>
                    </View>
                </View>

                <View style={styles.calendarContainer}>
                    <HomeCalendar/>
                </View>
            
            </View>
        )
    }
}

const styles = StyleSheet.create({...GlobalStyles,
    searchAndSelect: {
        flex: 3,
        justifyContent: 'center',
        padding: 10,
        borderColor: 'black',
        borderWidth: 2,
        backgroundColor: PRIMARY
    },
    calendarContainer: {
        flex: 6,
        padding: 10
    }
  });

export default HomeScreen