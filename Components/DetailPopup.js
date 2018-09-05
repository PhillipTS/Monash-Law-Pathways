import React from 'react';
import {
    View,
    Image,
    Modal,
    ScrollView,
    StyleSheet,
    Dimensions
} from 'react-native';
import GlobalStyles from '../Styles';
import Button from '../Components/Button';
import { WHITE } from '../Constants';

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
                <View style={{flex: 19}}>
                    <ScrollView contentContainerStyle={{alignItems: 'center'}}>
                        <Image style={{width: width, height: 1000}} source={data.file}/>
                    </ScrollView>
                    { onButtonPress &&
                        <View style={styles.linksContainer}>
                            <Button
                                label={buttonLabel}
                                onPress={onButtonPress}
                            />
                        </View>
                    }
                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({...GlobalStyles,
    linksContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: WHITE,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        borderColor: 'black',
        borderWidth: 4
    }
});

export default DetailPopup;