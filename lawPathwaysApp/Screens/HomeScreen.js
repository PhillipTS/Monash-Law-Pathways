import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Picker
} from 'react-native'
import { SearchBar } from 'react-native-elements'

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Law Pathways'
    };

    constructor(props) {
        super(props);
        this.state = {
            pickerValue: 0
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Welcome to Monash Law Pathways</Text>
                <View style={{width: '80%'}}>
                    <SearchBar
                        lightTheme
                        placeholder='Search'
                    />
                    <Picker
                        selectedValue={this.state.pickerValue}
                        onValueChange={(value)=>{this.setState({pickerValue: value})}}
                    >
                    {
                        [0,1,2,3,4].map((data)=><Picker.Item key={data} label={'Test ' + data} value={data} />)
                    }
                    </Picker>
                </View>
                <View></View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default HomeScreen