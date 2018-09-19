import React from 'react';
import { NavigationEvents } from 'react-navigation';
import {
    View,
    Text,
    Modal,
    ScrollView,
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
import { FEEDBACK_FORM, WHITE } from '../Constants';

const toISO = date => date.toISOString().substr(0, 10);

class HomeScreen extends React.Component {
    static navigationOptions = NavigationOptions;

    constructor(props) {
        super(props);
        this.state = {
            interestedOpps: [],

            oppsPopupOpen: false,
            sectorsPopupOpen: false,
            opportunity: null,
            sectorsPopupIndex: 0
        };
    }

    handleDayClick = (day) => {
        const isoDate = day.dateString;
        let opportunity = null;
        
        Database.Opportunities.forEach(opp =>
            opp.dates ? opp.dates.forEach(date => {
                if (toISO(date.date) === isoDate) {
                    opportunity = opp;
                }
            }) : null
        );
        
        if (opportunity) {
            this.setState({ opportunity, oppsPopupOpen: true });
        }
    }

    render() {
        const { navigate } = this.props.navigation;
        const { interestedOpps, opportunity } = this.state;
        const { width } = Dimensions.get('window');

        const sectorsData = Database.Sectors;
        let dates = [];
        
        interestedOpps.forEach(opp => opp && opp.dates ? dates = [...dates, ...opp.dates] : null);

        return (
            <View style={styles.container}>

                <NavigationEvents
                    onWillFocus={() => getOpportunities().then(oppIDs => this.setState({ interestedOpps: oppIDs.map(id => Database.Opportunities[id]) }))}
                />
                <StatusBar/>
                {this.renderSectorsPopup(sectorsData)}
                {this.renderOpportunityPopup(opportunity)}
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
                                onSelect={sectorID => this.setState({ sectorsPopupIndex: sectorID, sectorsPopupOpen: true })}
                                placeholder='Select a Sector'
                            />
                        </View>
                        <View style={styles.calendarContainer}>
                            <HomeCalendar
                                data={dates}
                                onPress={this.handleDayClick}
                            />
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

    renderSectorsPopup = (sectorsData) => {
        const { sectorsPopupOpen, sectorsPopupIndex } = this.state;
        const { navigate } = this.props.navigation;
        return (
            <DetailPopup
                popupOpen={sectorsPopupOpen}
                buttonLabel='GRAD PROFILES'
                onRequestClose={() => this.setState({ sectorsPopupOpen: false })}
                onButtonPress={
                    () => {
                        this.setState({ sectorsPopupOpen: false });
                        navigate('List', {
                            headerType: 'title',
                            titleValue: sectorsData[sectorsPopupIndex].name,
                            referingValue: sectorsData[sectorsPopupIndex].id,
                            otherValues: sectorsData.map(({id, name}) => {return {label: name, value: id}}),
                            dataType: 'GradProfiles'
                        })
                    }
                }
                data={sectorsData[sectorsPopupIndex]}
            />
        )
    }

    renderOpportunityPopup = (opportunity) => {
        const { oppsPopupOpen } = this.state;
        if (!opportunity) {return <View/>}
        const { name, dates } = opportunity;

        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={oppsPopupOpen}
                onRequestClose={() => this.setState({ oppsPopupOpen: false })}
            >
                <View style={styles.opportunityPopupContainer}>
                    <Text style={[styles.title, styles.opportunityTitle]}>{name}</Text>
                        <ScrollView style={styles.datesContainer}>
                        {
                            dates.map(date =>
                                <View key={date.name} style={styles.dateContainer}>
                                    <Text style={styles.text}>{date.name}</Text>
                                    <Text style={styles.text}>{date.date.toDateString()}</Text>
                                </View>
                            )
                        }
                        </ScrollView>
                        <Button
                            style={{flex: 1}}
                            onPress={() => this.setState({ oppsPopupOpen: false })}
                            label='Close'
                        />
                </View>
            </Modal>
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
    opportunityPopupContainer: {
        flex: 1,
        backgroundColor: WHITE,
        margin: 40,
        padding: 10,
        borderColor: 'black',
        borderWidth: 2
    },
    opportunityTitle: {
        flex: 1,
        textAlign: 'center',
        fontSize: 32
    },
    datesContainer: {
        margin: 10,
        padding: 5,
        marginTop: 30
    },
    dateContainer: {
        flex: 4,
        margin: 5,
        padding: 5
    }
  });

export default HomeScreen