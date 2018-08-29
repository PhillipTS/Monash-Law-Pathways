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
        const { includeDefault, selectedValue, onSelect } = this.props;

        return (
            <View style={{flex: 1, maxHeight: 50, borderColor: 'black', borderWidth: 1}}>
                <Picker
                    style={styles.text}
                    backgroundColor={BACKGROUND1}
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

const styles = StyleSheet.create(Object.assign(GlobalStyles, {

}));

export default IndustrySelect;