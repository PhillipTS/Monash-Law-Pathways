import React from 'react';
import {
    View,
    StatusBar,
    StyleSheet
} from 'react-native';
import GlobalStyles from '../Styles';
import Database from '../Database';
import NavigationOptions from '../Components/HeaderBar';
import Background from '../Components/Background';
import OpportunitySearch from '../Components/OpportunitySearch';
import Select from '../Components/Select';
import HomeCalendar from '../Components/HomeCalendar';
import DetailPopup from '../Components/DetailPopup';

class HomeScreen extends React.Component {
    static navigationOptions = NavigationOptions;

    constructor(props) {
        super(props);
        this.state = {
            popupOpen: false,
            popupIndex: 0
        };
    }

    render() {
        const { navigate } = this.props.navigation;
        const sectorsData = Database.Sectors;

        return (
            <View style={styles.container}>

                <StatusBar/>
                {this.renderPopup(sectorsData)}
                <Background/>
                
                <View style={{flex: 1}}>
                    <View style={styles.innerContainer}>
                        <View style={{flex: 1, marginBottom: 10}}>
                            <OpportunitySearch
                                onSelect={(searchTerm) => navigate('List', {
                                    headerType: 'search',
                                    referingValue: searchTerm,
                                    dataType: 'Opportunities'
                                })}
                                placeholder='Search Opportunities'
                            />
                        </View>
                        <View style={{flex: 1, marginTop: 10, marginBottom: 50}}>
                            <Select
                                data={sectorsData.map(({id, name}) => {return {value: id, label: name}})}
                                onSelect={sectorID => this.setState({ popupIndex: sectorID, popupOpen: true })}
                                placeholder='Select a Sector'
                            />
                        </View>
                        <View style={styles.calendarContainer}>
                            <HomeCalendar/>
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
                buttonLabel='Interested'
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
    calendarContainer: {
        flex: 6,
        padding: 10
    }
  });

export default HomeScreen