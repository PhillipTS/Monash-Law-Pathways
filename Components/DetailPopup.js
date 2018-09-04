import React from 'react';
import {
    View,
    Button,
    Image,
    Modal,
    ScrollView,
    StyleSheet,
    Dimensions
} from 'react-native';
import GlobalStyles from '../Styles';
import { PRIMARY, BACKGROUND2 } from '../Constants';

class DetailPopup extends React.Component {
    render() {
        const { popupOpen, buttonLabel, onRequestClose, onButtonPress, data } = this.props;
        const { width } = Dimensions.get('window');
    
        return (
            <Modal
                animationType="slide"
                transparent={false}
                visible={popupOpen}
                onRequestClose={onRequestClose}
            >
                <View style={{flex: 1}}>
                    <ScrollView contentContainerStyle={{alignItems: 'center'}}>
                        <Image style={{width: width, height: 1000}} source={data.file}/>
                    </ScrollView>
                    { onButtonPress &&
                        <View style={styles.linksContainer}>
                            <Button
                                style={{flex: 1}}
                                title={buttonLabel}
                                color={PRIMARY}
                                onPress={onButtonPress}
                            />
                        </View>
                    }
                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create(Object.assign(GlobalStyles, {
    linksContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: BACKGROUND2,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        height: 100,
        borderColor: 'black',
        borderWidth: 4
    }
}));

export default DetailPopup;