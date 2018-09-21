import React from 'react';
import { NavigationEvents } from 'react-navigation';
import {
    View,
    Text,
    Image,
    Modal,
    TouchableOpacity,
    StatusBar,
    StyleSheet,
    Linking,
    Dimensions
} from 'react-native';
import GlobalStyles from '../Styles';
import Database from '../Database';
import Background from '../Components/Background';
import OpportunitySearch from '../Components/OpportunitySearch';
import Select from '../Components/Select';
import HomeCalendar from '../Components/HomeCalendar';
import Button from '../Components/Button';
import { getOpportunities, setOpportunity } from '../LocalStorage';
import { FEEDBACK_FORM_URL } from '../Constants';

class HomeScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            interestedOpps: [],

            helpPopup: false
        };
    }

    render() {
        const { navigate } = this.props.navigation;
        const { interestedOpps, helpPopup } = this.state;
        const { width } = Dimensions.get('window');

        const sectorsData = Database.Sectors;
        let dates = [];
        
        interestedOpps.forEach(opp => opp && opp.dates ? dates = [...dates, ...opp.dates] : null);

        return (
            <View style={styles.container}>

                <NavigationEvents
                    onWillFocus={() => getOpportunities().then(oppIDs => this.setState({ interestedOpps: oppIDs.map(id => Database.Opportunities[id])}))}
                />
                <StatusBar/>
                <Background/>

                <Modal visible={helpPopup} transparent onRequestClose={() => this.setState({ helpPopup: false })}>
                    <TouchableOpacity style={{flex: 1}} activeOpacity={1} onPress={() => this.setState({ helpPopup: false })}>
                        <TouchableOpacity style={styles.popup} activeOpacity={1} onPress={() => {}}>
                            <Text style={[styles.title, {fontSize: 32}]}>How to use this App</Text>
                        </TouchableOpacity>
                    </TouchableOpacity>
                </Modal>
                
                <View style={{flex: 1}}>
                    <View style={[styles.innerContainer, {width: width - 60, padding: 5}]}>
                        <View style={styles.searchContainer}>
                            <OpportunitySearch
                                onSelect={searchTerm => navigate('List', {
                                    headerType: 'search',
                                    referingValue: searchTerm,
                                    dataType: 'Opportunities'
                                })}
                                placeholder='Search Opportunities'
                            />
                        </View>
                        <View style={styles.selectContainer}>
                            <Select data={sectorsData} placeholder='Select a Sector' navigate={navigate} />
                        </View>
                        <View style={styles.calendarContainer}>
                            <HomeCalendar data={dates}/>
                        </View>
                        <View style={styles.buttonContainer}>
                            <Button
                                containerStyle={{padding: 0, margin: 0}}
                                labelStyle={{fontSize: 12, margin: 1, padding: 1}}
                                label='Leave Feedback'
                                onPress={() => Linking.openURL(FEEDBACK_FORM_URL)}
                            />
                        </View>
                    </View>

                    <TouchableOpacity onPress={() => this.setState({ helpPopup: true })} style={styles.helpButton}>
                        <Image source={require('../assets/images/help_filled.png')}/>
                    </TouchableOpacity>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({...GlobalStyles,
    searchContainer: {
        flex: 2,
        marginBottom: 5
    },
    selectContainer: {
        flex: 2,
        marginBottom: 5
    },
    calendarContainer: {
        flex: 13,
        padding: 3,
        paddingBottom: 2
    },
    buttonContainer: {
        flex: 1,
        alignSelf: 'center',
        maxWidth: 150
    },
    helpButton: {
        position: 'absolute',
        right: 2.5,
        bottom: 2.5
    }
  });

export default HomeScreen