import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Modal,
    ScrollView,
    StyleSheet
} from 'react-native';
import GlobalStyles from '../Styles';
import { WHITE, BORDER_RADIUS } from '../Constants';

class Select extends React.Component {
    constructor(props) {
        super(props);
        this.state = { popupOpen: false };
    }

    render() {
        const { placeholder, selectedValue, data, onSelect, dropdown } = this.props;
        const { popupOpen } = this.state;

        return (
            <View style={{flex: 1}}>

                <Modal
                    visible={popupOpen}
                    transparent
                    onRequestClose={() => this.setState({ popupOpen: false })}
                >
                    <TouchableOpacity
                        style={styles.popupContainer}
                        activeOpacity={1}
                        onPress={() => this.setState({ popupOpen: false })}
                    >
                        <TouchableOpacity activeOpacity={1} onPress={() => {}}>
                            <ScrollView
                                style={styles.popup}
                                borderColor='black'
                                borderWidth={2}
                            >
                                <Text style={[styles.title, {fontSize: 32, marginBottom: 20}]}>{placeholder}</Text>
                                {
                                    data.map( ({ label, value }) =>
                                        <TouchableOpacity key={value} style={styles.item} onPress={() => onSelect(value)}>
                                            <Text style={styles.text}>{label}</Text>
                                        </TouchableOpacity>
                                    )
                                }
                            </ScrollView>
                        </TouchableOpacity>
                    </TouchableOpacity>
                </Modal>

                <TouchableOpacity style={styles.componentContainer} onPress={() => this.setState({ popupOpen: true })}>
                    <Text style={[styles.text, {flex: 9, textAlignVertical: 'center'}]}>{selectedValue || placeholder}</Text>
                    <Image style={{flex: 1}} source={require('../assets/images/dropdown_arrow.png')}/>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({...GlobalStyles,
    componentContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        maxHeight: 50,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: WHITE,
        borderRadius: BORDER_RADIUS,
        borderColor: 'black',
        borderWidth: 1
    },
    popupContainer: {
        flex: 1,
        zIndex: 5,
        alignItems: 'center'
    },
    popup: {
        flex: 1,
        zIndex: 10,
        margin: 20,
        paddingLeft: 30,
        paddingRight: 30,
        backgroundColor: WHITE,
        shadowColor: 'black',
        shadowRadius: 1
    },
    item: {
        padding: 5
    }
});

export default Select;