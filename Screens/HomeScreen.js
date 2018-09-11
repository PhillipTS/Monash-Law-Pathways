import React from 'react';
import {
    View,
    StatusBar,
    StyleSheet,
    Linking,
    Dimensions
} from 'react-native';
import GlobalStyles from '../Styles';
import Database from '../Database';
import NavigationOptions from '../Components/NavigationOptions';
import Background from '../Components/Background';
import OpportunitySearch from '../Components/OpportunitySearch';
import Select from '../Components/Select';
import HomeCalendar from '../Components/HomeCalendar';
import DetailPopup from '../Components/DetailPopup';
import Button from '../Components/Button';
import { getOpportunities, setOpportunity } from '../LocalStorage';
import { FEEDBACK_FORM } from '../Constants';

class HomeScreen extends React.Component {
    static navigationOptions = NavigationOptions;

    constructor(props) {
        super(props);
        this.state = {
            interestedOpps: [],

            popupOpen: false,
            popupIndex: 0
        };
    }

    componentDidMount() {
        //setOpportunity(null);
        getOpportunities().then(oppIDs => this.setState({ interestedOpps: oppIDs.map(id => Database.Opportunities[id]) }));
    }

    render() {
        const { navigate } = this.props.navigation;
        const { interestedOpps } = this.state;
        const { width } = Dimensions.get('window');

        const sectorsData = Database.Sectors;
        let dates = [];
        interestedOpps.forEach(opp => dates = [...dates, ...opp.dates]);

        return (
            <View style={styles.container}>

                <StatusBar/>
                {this.renderPopup(sectorsData)}
                <Background/>
                
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
                            <Select
                                data={sectorsData.map(({id, name}) => {return {value: id, label: name}})}
                                onSelect={sectorID => this.setState({ popupIndex: sectorID, popupOpen: true })}
                                placeholder='Select a Sector'
                            />
                        </View>
                        <View style={styles.calendarContainer}>
                            <HomeCalendar data={dates}/>
                        </View>
                        <View style={styles.buttonContainer}>
                            <Button
                                containerStyle={{padding: 0, margin: 0}}
                                labelStyle={{fontSize: 12, margin: 1, padding: 1}}
                                label='Leave Feedback'
                                onPress={() => Linking.openURL(FEEDBACK_FORM)}
                            />
                        </View>
                    </View>
                </View>
            
            </View>
        )
    }

    renderPopup = (sectorsData) => {
        const { popupOpen, popupIndex } = this.state;
        const { navigate } = this.props.navigation;
        return (
            <DetailPopup
                popupOpen={popupOpen}
                buttonLabel='GRAD PROFILES'
                onRequestClose={() => this.setState({ popupOpen: false })}
                onButtonPress={
                    () => {
                        this.setState({ popupOpen: false });
                        navigate('List', {
                            headerType: 'title',
                            titleValue: sectorsData[popupIndex].name,
                            referingValue: sectorsData[popupIndex].id,
                            otherValues: sectorsData.map(({id, name}) => {return {label: name, value: id}}),
                            dataType: 'GradProfiles'
                        })
                    }
                }
                data={sectorsData[popupIndex]}
            />
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
    }
  });

export default HomeScreen