import React from 'react';
import {
    View,
    Picker
} from 'react-native';

const industries = ['Commercial Law', 'IP Law', 'Criminal Law'];

const pickerItems = industries.map((data)=><Picker.Item key={data} label={data} value={data} />)

class IndustrySelect extends React.Component {
    render() {
        const { includeDefault, selectedValue, onSelect } = this.props;

        return (
            <View style={{flex: 1, maxHeight: 50, borderColor: 'black', borderWidth: 1}}>
                <Picker
                    selectedValue={selectedValue || 'default'}
                    onValueChange={onSelect}
                >
                    {includeDefault ? defaultItem : []}
                    {pickerItems}
                </Picker>
            </View>
        )
    }
}

const defaultItem = <Picker.Item style={{fontColor: 'grey'}} key='default' label='Select an Industry' value='default'/>;

export default IndustrySelect;