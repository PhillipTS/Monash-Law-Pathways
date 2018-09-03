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
import { PRIMARY } from '../Constants';

const getData = (dataType, id) => {
    switch(dataType) {
        case 'Sectors':
            return getSectors(id);
        case 'GradProfiles':
            return getGradProfiles(id);
        case 'Opportunities':
            return getOpportunities(id);
        default:
            return [];
    }
};

const getSectors = (industryID) => Database.Sectors.filter(sector => sector.industry === industryID);

const getGradProfiles = (sectorID) => Database.GradProfiles.filter(profile => profile.sector === sectorID);

const getOpportunities = () => {};

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
        const referingID = getParam('referingID', 0)
        const otherValues = getParam('otherValues', [])    // [{label, value}]

        const dataType = getParam('dataType', null);   // 'Sectors', 'GradProfiles', 'Oppportunities'
        
        const data = getData(dataType, referingID);

        let headerComponent;
        switch (headerType) {
            case 'title':
                headerComponent = <Title style={styles.title} h4>{titleValue}</Title>
                break;
            case 'select':
                headerComponent = 
                <Select
                    selectedValue={referingID}
                    onSelect={(value) => push('List', {
                        headerType: 'select',
                        referingID: value,
                        otherValues: otherValues,
                        dataType: dataType,
                    })}
                    data={otherValues}
                    dropdown
                />
                break;
            case 'search':
                headerComponent = <OpportunitySearch placeholder={referingID} />
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
                        buttonLabel={dataType === 'Sectors' ? 'GradProfiles' : 'Interested'}
                        onRequestClose={() => this.setState({ popupOpen: false })}
                        onButtonPress={dataType === 'Sectors' ?
                            () => push('List', {
                                headerType: 'title',
                                titleValue: data[popupIndex].name,
                                referingID: data[popupIndex].id,
                                otherValues: data.map(({id, name}) => {return {label: name, value: id}}),
                                dataType: 'GradProfiles'
                            })
                            : dataType === 'Opportunities' ? () => console.log('Interested') : null
                        }
                        data={data[popupIndex]}
                    />
                }

                <View style={{flex: 1, width: '80%', marginBottom: 20, backgroundColor: PRIMARY}}>{headerComponent}</View>

                <View style={{flex: 9, width: '100%', backgroundColor: PRIMARY}}>
                    {
                        data.length !== 0 ?
                        <ScrollView contentContainerStyle={{borderColor: 'black', borderWidth: 2, paddingBottom: 20}}>
                            {data.map(({ id, name, description }, index) => 
                                <DetailCard 
                                    key={id}
                                    name={name}
                                    description={description}
                                    onPress={() => this.setState({ popupOpen: true, popupIndex: index })}
                                />
                            )}
                        </ScrollView>
                        :
                        <Title style={{top: 100, textAlign: 'center', textAlignVertical: 'center'}} h4>
                            No {dataType === 'GradProfiles' ? 'Grad Profiles' : dataType} Found
                        </Title>
                    }
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create(Object.assign(GlobalStyles, {
    
}));

export default ListScreen;