import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import GlobalStyles from '../Styles';
import IndustrySelect from '../Components/IndustrySelect';

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Law Pathways'
    };

    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>
                <View style={{flex: 1}}>
                    <Text style={styles.title} >Welcome to Monash Law Pathways</Text>
                    <View style={styles.searchAndSelect}>
                        <SearchBar
                            style={{flex: 3}}
                            lightTheme
                            placeholder='Search'
                        />
                        <Text style={{flex: 1, textAlignVertical: 'center', textAlign: 'center'}}>OR</Text>
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
                <View style={{flex: 1}}><Text style={{flex: 1, textAlignVertical: 'center', textAlign: 'center'}}>CALENDAR</Text></View>
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
        borderWidth: 2
    }
  }));

export default HomeScreen