import React from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    Modal,
    StyleSheet,
    Dimensions
} from 'react-native';
import {Text as Title } from 'react-native-elements';
import Database from '../Database';
import GlobalStyles from '../Styles';
import NavBar from '../Components/NavBar';
import OpportunitySearch from '../Components/OpportunitySearch';
import Select from '../Components/Select';
import DetailCard from '../Components/DetailCard';
import { PRIMARY, BACKGROUND1 } from '../Constants';

const getSectors = (industryID) => Database.Sectors.filter(sector => sector.industry === industryID);

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

        const headerType = getParam('headerType', 'title');  // Enum: 'title', 'select', 'search'
        const headerValue = getParam('headerValue', {});
        const headerValues = getParam('headerValues', []);
        const dataType = getParam('getParam', 'sectors');
        
        const data = getSectors(headerValue);

        return (
            <View style={styles.container}>
                <Popup
                    popupOpen={popupOpen}
                    onRequestClose={() => this.setState({ popupOpen: false })}
                    data={data[popupIndex]}
                />
                <Header
                    data={headerValues}
                    type={headerType}
                    value={headerValue}
                    values={headerValues}
                    dataType={dataType}
                    changeScreen={push} />
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
                        <Title style={{top: 100, textAlign: 'center', textAlignVertical: 'center'}} h4>No Sectors Found</Title>
                    }
                </View>
            </View>
        )
    }
}

const Popup = ({ popupOpen, onRequestClose, data }) => {
    const { width } = Dimensions.get('window');

    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={popupOpen}
            onRequestClose={onRequestClose}
        >
            <View style={{flex: 1}}>
                <ScrollView stickyHeaderIndices={[1]} contentContainerStyle={{alignItems: 'center'}}>
                    <Image style={{width: width, height: 1000}} source={data.file}/>
                </ScrollView>
                <View style={styles.linksContainer}>
                    <Text>Test</Text>
                </View>
            </View>
        </Modal>
    )
}

const Header = (props) => {
    const { data, type, value, values, changeScreen, dataType } = props;
    let headerComponent;
    switch (type) {
        case 'title':
            headerComponent = <TitleHeader value={value}/>
            break;
        case 'select':
            headerComponent = <SelectHeader data={data} value={value} values={values} changeScreen={changeScreen} dataType={dataType}/>
            break;
        case 'search':
            headerComponent = <SearchHeader value={value}/>
            break;
        default:
            headerComponent = <View/>
    }

    return <View style={{flex: 1, width: '80%', marginBottom: 20, backgroundColor: PRIMARY}}>{headerComponent}</View>
};

const SearchHeader = ({ value }) => <OpportunitySearch placeholder={value} />

const SelectHeader = ({ value, values, changeScreen, data, dataType }) => 
    <Select
        selectedValue={value}
        onSelect={(value) => changeScreen('List', {
            headerType: 'select',
            headerValue: value,
            headerValues: values,
            dataType: dataType
        })}
        data={data}
    />

const TitleHeader = ({ value }) => <Title style={styles.title} h4>{value}</Title>

const styles = StyleSheet.create(Object.assign(GlobalStyles, {
    linksContainer: {
        flex: 1,
        backgroundColor: BACKGROUND1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        height: 50
    }
}));

export default ListScreen;