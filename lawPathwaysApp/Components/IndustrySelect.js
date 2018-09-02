import React from 'react';
import {
    View,
    Picker,
    StyleSheet
} from 'react-native';
import GlobalStyles from '../Styles';
import { BACKGROUND1 } from '../Constants';

const industries = ['Commercial Law', 'IP Law', 'Criminal Law'];

const pickerItems = industries.map((data)=><Picker.Item key={data} label={data} value={data} />)

class IndustrySelect extends React.Component {
    render() {
        const { placeholder, selectedValue, onSelect } = this.props;

        return (
            <View style={{flex: 1, maxHeight: 50, borderColor: 'black', borderWidth: 1}}>
                <Picker
                    style={styles.text}
                    backgroundColor={BACKGROUND1}
                    selectedValue={selectedValue || 'default'}
                    onValueChange={onSelect}
                >
                    {
                        placeholder ?
                        <Picker.Item style={{fontColor: 'grey'}} key='default' label={placeholder} value='default'/>
                        : []
                    }
                    {pickerItems}
                </Picker>
            </View>
        )
    }
}

const styles = StyleSheet.create(Object.assign(GlobalStyles, {

}));

export default IndustrySelect;