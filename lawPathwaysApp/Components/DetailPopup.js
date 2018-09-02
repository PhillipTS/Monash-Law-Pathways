import React from 'react';
import {
    View,
    Text,
    Button,
    Image,
    Modal,
    ScrollView,
    StyleSheet,
    Dimensions
} from 'react-native';
import GlobalStyles from '../Styles';
import { BACKGROUND1, PRIMARY, SECONDARY, TETIARY, BACKGROUND2 } from '../Constants';

class DetailPopup extends React.Component {
    render() {
        const { popupOpen, onRequestClose, data } = this.props;
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
                    <View style={styles.linksContainer}>
                        <Text style={{flex: 1}}>Test</Text>
                        <Button
                            style={{flex: 1}}
                            title='Grad Profiles'
                            color={PRIMARY}
                            onPress={onRequestClose}
                        />
                    </View>
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