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
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import DetailPopup from '../Components/DetailPopup';
import Button from '../Components/Button';
import GlobalStyles from '../Styles';
import { WHITE, BORDER_RADIUS } from '../Constants';

class Select extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listPopupOpen: false,
            detailPopupOpen: false,
            selectedValueIndex: 0
        };
    }

    render() {
        const { placeholder, selectedValue, data, navigate } = this.props;
        const { listPopupOpen, detailPopupOpen, selectedValueIndex } = this.state;

        const selectValues = data.map(({id, name}) => {return {label: name, value: id}});

        return (
            <View style={{flex: 1}}>

                <Modal visible={listPopupOpen} transparent onRequestClose={() => this.setState({ listPopupOpen: false })}>
                    <TouchableOpacity style={{flex: 1}} activeOpacity={1} onPress={() => this.setState({ listPopupOpen: false })}>
                        <TouchableOpacity style={styles.popup} activeOpacity={1} onPress={() => {}}>
                            <ScrollView contentContainerStyle={{alignItems: 'center'}}>
                                <Text style={[styles.title, {fontSize: moderateScale(32), marginBottom: verticalScale(20)}]}>{placeholder}</Text>
                                {
                                    selectValues.map( ({ label, value }) =>
                                        <TouchableOpacity key={value} style={styles.item} onPress={() =>
                                            this.setState({detailPopupOpen: true, selectedValueIndex: value})
                                        }>
                                            <Text style={styles.text}>{label}</Text>
                                        </TouchableOpacity>
                                    )
                                }
                            </ScrollView>
                            <Button label='CLOSE' onPress={() => this.setState({ listPopupOpen: false })}/>
                        </TouchableOpacity>
                    </TouchableOpacity>
                </Modal>

                <DetailPopup
                    popupOpen={detailPopupOpen}
                    buttonLabel='GRAD PROFILES'
                    onRequestClose={() => this.setState({ detailPopupOpen: false })}
                    onButtonPress={ () => {
                        this.setState({ detailPopupOpen: false, listPopupOpen: false });
                        navigate('List', {
                            headerType: 'title',
                            titleValue: data[selectedValueIndex].name,
                            referingValue: data[selectedValueIndex].id,
                            otherValues: selectValues,
                            dataType: 'GradProfiles'
                        })
                    }}
                    data={data[selectedValueIndex]}
                />

                <TouchableOpacity style={styles.componentContainer} onPress={() => this.setState({ listPopupOpen: true })}>
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
        maxHeight: verticalScale(60),
        paddingLeft: scale(20),
        paddingRight: scale(10),
        backgroundColor: WHITE,
        borderRadius: BORDER_RADIUS,
        borderColor: 'black',
        borderWidth: scale(1)
    },
    item: {
        padding: moderateScale(5)
    }
});

export default Select;