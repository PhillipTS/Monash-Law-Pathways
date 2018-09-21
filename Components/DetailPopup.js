import React from 'react';
import {
    View,
    Image,
    Modal,
    Linking,
    ScrollView,
    StyleSheet,
    Dimensions
} from 'react-native';
import GlobalStyles from '../Styles';
import Button from '../Components/Button';

class DetailPopup extends React.Component {
    render() {
        const { popupOpen, buttonLabel, onRequestClose, onButtonPress, data, buttonDisabled } = this.props;
        const { width } = Dimensions.get('window');
        
        return (
            <Modal
                animationType="slide"
                transparent={false}
                visible={popupOpen}
                onRequestClose={onRequestClose}
            >
                <ScrollView>
                    <Image style={{width, height: 1000}} source={data.file}/>
                </ScrollView>
                { data.link &&
                    <View style={styles.buttonContainer}>
                        <Button
                            label='MORE INFO'
                            onPress={() => Linking.openURL(data.link)}
                            containerStyle={{margin: 0, borderRadius: 0, borderBottomWidth: 0}}
                        />
                    </View>
                }
                { onButtonPress &&
                    <View style={styles.buttonContainer}>
                        <Button
                            label={buttonLabel}
                            onPress={onButtonPress}
                            containerStyle={{margin: 0, borderRadius: 0}}
                            disabled={buttonDisabled}
                        />
                    </View>
                }
            </Modal>
        )
    }
}

const styles = StyleSheet.create({...GlobalStyles,
    buttonContainer: {
        borderColor: 'black',
        borderWidth: 4,
        height: 50
    }
});

export default DetailPopup;