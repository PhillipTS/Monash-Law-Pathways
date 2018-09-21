import React from 'react';
import { NavigationEvents } from 'react-navigation';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    Alert
} from 'react-native';
import Database from '../Database';
import GlobalStyles from '../Styles';
import Background from '../Components/Background';
import OpportunitySearch from '../Components/OpportunitySearch';
import Select from '../Components/Select';
import DetailCard from '../Components/DetailCard';
import DetailPopup from '../Components/DetailPopup';
import { WHITE, SECONDARY_BACKGROUND, BORDER_RADIUS, PRIMARY } from '../Constants';
import { addOpportunity, getOpportunities as getInterestedOpportunities } from '../LocalStorage';

const getData = (dataType, value) => {
    switch(dataType) {
        case 'Sectors':
            return getSectors(value);
        case 'GradProfiles':
            return getGradProfiles(value);
        case 'Opportunities':
            return getOpportunities(value);
        default:
            return [];
    }
};

const getSectors = (industryID) => Database.Sectors.filter(sector => sector.industry === industryID);

const getGradProfiles = (sectorID) => Database.GradProfiles.filter(profile => profile.sector === sectorID);

const getOpportunities = (searchTerm) => Database.Opportunities.filter(({ name }) => name.toUpperCase().includes(searchTerm.toUpperCase()));

class ListScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            interestedOpportunities: [],

            popupOpen: false,
            popupIndex: 0
        };
    }

    markInterested = (opportunity) =>
        addOpportunity(opportunity.id).then(() => {
            Alert.alert('Success', 'Now interested in\n' + opportunity.name,
            [
                {text: 'Back to Home', onPress: () => this.props.navigation.popToTop()},
                {text: 'Close'}
            ]);

            this.setState({ interestedOpportunities: Object.assign([], this.state.interestedOpportunities, [opportunity.id]) });
        }, () => Alert.alert('Error', 'An error occoured'));

    render() {
        const { getParam, push } = this.props.navigation;

        const headerType = getParam('headerType', null);  // 'title', 'select', 'search'
        const titleValue = getParam('titleValue', '')
        const referingValue = getParam('referingValue', 0)
        const otherValues = getParam('otherValues', [])    // [{label, value}]

        const dataType = getParam('dataType', null);   // 'Sectors', 'GradProfiles', 'Oppportunities'
        
        const data = getData(dataType, referingValue);

        let headerComponent;
        switch (headerType) {
            case 'title':
                headerComponent = <Text style={[styles.title, {fontSize: 22, color: WHITE}]}>{titleValue.toUpperCase()}</Text>
                break;
            case 'select':
                headerComponent = 
                    <Select
                        selectedValue={referingValue}
                        onSelect={(value) => push('List', {
                            headerType: 'select',
                            referingValue: value,
                            otherValues: otherValues,
                            dataType: dataType,
                        })}
                        data={otherValues}
                        dropdown
                    />
                break;
            case 'search':
                headerComponent = 
                    <OpportunitySearch
                        placeholder={referingValue}
                        onSelect={(searchTerm) => push('List', {
                            headerType: 'search',
                            referingValue: searchTerm,
                            dataType: 'Opportunities'
                        })}
                    />
                break;
            default:
                headerComponent = <View/>
        }

        return (
            <View style={styles.container}>

                { data.length !== 0 && this.renderPopup(dataType, data) }
                <Background/>
                <NavigationEvents onWillFocus={() => getInterestedOpportunities().then(opps => this.setState({ interestedOpportunities: opps }))} />

                <View style={styles.headerContainer}>{headerComponent}</View>

                <View style={{flex: 9, width: '100%'}}>
                    {
                        data.length !== 0 ?
                        <ScrollView contentContainerStyle={styles.scrollContainer}>
                            {data.map((obj, index) => 
                                <DetailCard 
                                    key={obj.id}
                                    data={obj}
                                    onPress={() => this.setState({ popupOpen: true, popupIndex: index })}
                                />
                            )}
                        </ScrollView>
                        :
                        <View style={[styles.scrollContainer, {flex: 1, backgroundColor: SECONDARY_BACKGROUND}]}>
                            <Text style={styles.noDataLabel}>
                                No {dataType === 'GradProfiles' ? 'Grad Profiles' : dataType} Found
                            </Text>
                        </View>
                    }
                </View>
            </View>
        )
    }

    renderPopup = (dataType, data) => {
        const { popupOpen, popupIndex, interestedOpportunities } = this.state;
        const { push } = this.props.navigation;
        const interested = interestedOpportunities.includes(data[popupIndex].id);
        
         return (
            <DetailPopup
                popupOpen={popupOpen}
                buttonLabel={
                    dataType === 'Sectors' ? 'GRAD PROFILES' : 
                    dataType === 'GradProfiles' ? 'OPPORTUNITIES' :
                    interested ? 'ALREADY INTERESTED' : 'INTERESTED'
                }
                buttonDisabled={interested}
                onRequestClose={() => this.setState({ popupOpen: false })}
                onButtonPress={
                    dataType === 'Sectors' ? () => {
                        this.setState({ popupOpen: false });
                        push('List', {
                            headerType: 'title',
                            titleValue: data[popupIndex].name,
                            referingValue: data[popupIndex].id,
                            otherValues: data.map(({id, name}) => {return {label: name, value: id}}),
                            dataType: 'GradProfiles'
                        })
                    }
                    : dataType === 'GradProfiles' ? () => {
                            this.setState({ popupOpen: false });
                            push('List', {
                            headerType: 'search',
                            referingValue: '',
                            dataType: 'Opportunities'
                        })
                    }
                    : () => this.markInterested(data[popupIndex])
                }
                data={data[popupIndex]}
            />
        )
    }
}

const styles = StyleSheet.create({...GlobalStyles,
    headerContainer: {
        flex: 1,
        width: '80%',
        marginBottom: 20
    },
    scrollContainer: {
        borderColor: 'black',
        borderRadius: BORDER_RADIUS,
        borderWidth: 2,
        backgroundColor: PRIMARY
    },
    noDataLabel: {
        top: 100,
        fontSize: 18,
        textAlign: 'center',
        textAlignVertical: 'center'
    }
});

export default ListScreen;