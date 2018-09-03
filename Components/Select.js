import React from 'react';
import {
    View,
    Picker,
    StyleSheet
} from 'react-native';
import GlobalStyles from '../Styles';
import { BACKGROUND1 } from '../Constants';

class Select extends React.Component {
    render() {
        const { placeholder, selectedValue, data, onSelect, dropdown } = this.props;

        return (
            <View style={{flex: 1, maxHeight: 50, borderColor: 'black', borderWidth: 1}}>
                <Picker
                    style={styles.text}
                    backgroundColor={BACKGROUND1}
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

const styles = StyleSheet.create(Object.assign(GlobalStyles, {

}));

export default Select;