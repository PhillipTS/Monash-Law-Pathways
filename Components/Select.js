import React from 'react';
import {
    View,
    Picker,
    StyleSheet
} from 'react-native';
import GlobalStyles from '../Styles';
import { WHITE, BORDER_RADIUS } from '../Constants';

class Select extends React.Component {
    render() {
        const { placeholder, selectedValue, data, onSelect, dropdown } = this.props;

        return (
            <View style={styles.componentContainer}>
                <Picker
                    style={styles.text}
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
    componentContainer: {
        flex: 1,
        maxHeight: 50,
        backgroundColor: WHITE,
        borderRadius: BORDER_RADIUS,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default Select;