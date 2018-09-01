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
    BACKGROUND1,
    PRIMARY
} from '../Constants';
import NavBar from '../Components/NavBar';
import OpportunitySearch from '../Components/OpportunitySearch';
import IndustrySelect from '../Components/IndustrySelect';

class HomeScreen extends React.Component {
    static navigationOptions = {
        headerTitle: <NavBar/>
    };

    render() {
        const { navigate } = this.props.navigation;

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
                            <OpportunitySearch placeholder='Search Opportunities'/>
                        </View>
                        <Text style={[{flex: 1, textAlignVertical: 'center', textAlign: 'center'}, styles.text]}>OR</Text>
                        <View style={{flex: 3}}>
                            <IndustrySelect
                                onSelect={(value)=> navigate('List', {headerType: 'select', headerValue: value, dataType: 'opportunities'})}
                                includeDefault
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