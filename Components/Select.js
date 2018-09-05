import React from 'react';
import {
    View,
    Picker,
    StyleSheet
} from 'react-native';
import GlobalStyles from '../Styles';
import { WHITE } from '../Constants';

class Select extends React.Component {
    render() {
        const { placeholder, selectedValue, data, onSelect, dropdown } = this.props;

        return (
            <View style={{flex: 1, maxHeight: 50, borderColor: 'black', borderWidth: 1}}>
                <Picker
                    style={[styles.text, {backgroundColor: WHITE}]}
                    backgroundColor={WHITE}
                    selectedValue={selectedValue || 'default'}
                    onValueChange={onSelect}
                    mode={dropdown ? 'dropdown' : 'dialog'}
                >
                    {
                        placeholder ?
                        <Picker.Item key='default' label={placeholder} value='default'/>
                        : []
                    }
                    {
                        data.map(({value, label})=><Picker.Item key={value} label={label} value={value}/>)
                    }
                </Picker>
            </View>
        )
    }
}

const styles = StyleSheet.create({...GlobalStyles,

});

export default Select;