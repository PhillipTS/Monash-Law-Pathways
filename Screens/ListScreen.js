import React from 'react';
import {
    View,
    ScrollView,
    StyleSheet
} from 'react-native';
import {Text as Title } from 'react-native-elements';
import Database from '../Database';
import GlobalStyles from '../Styles';
import NavBar from '../Components/NavBar';
import OpportunitySearch from '../Components/OpportunitySearch';
import Select from '../Components/Select';
import DetailCard from '../Components/DetailCard';
import DetailPopup from '../Components/DetailPopup';
import { BACKGROUND, WHITE, PRIMARY, SECONDARY_BACKGROUND } from '../Constants';

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

const getOpportunities = (searchTerm) => Database.Opportunities.filter(({ name, description }) => name.includes(searchTerm) || description.includes(searchTerm));

class ListScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            popupOpen: false,
            popupIndex: 0
        };
    }

    static navigationOptions = {
        headerTitle: <NavBar/>
    };

    render() {
        const { getParam, push } = this.props.navigation;
        const { popupOpen, popupIndex } = this.state;

        const headerType = getParam('headerType', null);  // 'title', 'select', 'search'
        const titleValue = getParam('titleValue', '')
        const referingValue = getParam('referingValue', 0)
        const otherValues = getParam('otherValues', [])    // [{label, value}]

        const dataType = getParam('dataType', null);   // 'Sectors', 'GradProfiles', 'Oppportunities'
        
        const data = getData(dataType, referingValue);

        let headerComponent;
        switch (headerType) {
            case 'title':
                headerComponent = <Title style={styles.title} h4>{titleValue}</Title>
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
                {
                    data.length !== 0 &&
                    <DetailPopup
                        popupOpen={popupOpen}
                        buttonLabel={dataType === 'Sectors' ? 'GradProfiles' : dataType === 'GradProfiles' ? 'Opportunities' : 'Interested'}
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
                            : () => console.log('Interested')
                        }
                        data={data[popupIndex]}
                    />
                }

                <View style={{flex: 1, width: '80%', marginBottom: 20, backgroundColor: BACKGROUND}}>{headerComponent}</View>

                <View style={{flex: 9, width: '100%', backgroundColor: BACKGROUND}}>
                    {
                        data.length !== 0 ?
                        <ScrollView contentContainerStyle={{borderColor: 'black', borderWidth: 2, paddingBottom: 20, backgroundColor: WHITE}}>
                            {data.map((obj, index) => 
                                <DetailCard 
                                    key={obj.id}
                                    data={obj}
                                    onPress={() => this.setState({ popupOpen: true, popupIndex: index })}
                                />
                            )}
                        </ScrollView>
                        :
                        <View style={{flex: 1, borderColor: 'black', borderWidth: 2, backgroundColor: SECONDARY_BACKGROUND}}>
                            <Title style={{top: 100, textAlign: 'center', textAlignVertical: 'center'}} h4>
                                No {dataType === 'GradProfiles' ? 'Grad Profiles' : dataType} Found
                            </Title>
                        </View>
                    }
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({...GlobalStyles,
    
});

export default ListScreen;