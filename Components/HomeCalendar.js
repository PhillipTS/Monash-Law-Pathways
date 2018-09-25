import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Modal,
    ScrollView,
    StyleSheet
} from 'react-native';
import { Calendar } from 'react-native-calendars';
import Database from '../Database';
import GlobalStyles from '../Styles';
import Button from '../Components/Button';
import { BORDER_RADIUS, WHITE, TITLE_FONT, PRIMARY } from '../Constants';

const toISO = date => date.toISOString().substr(0, 10);

class HomeCalendar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            oppsPopupOpen: false,
            opportunity: {}
        };
    }

    handleDayClick = (day) => {
        const isoDate = day.dateString;
        let opportunity = null;
        
        Database.Opportunities.forEach(opp =>
            opp.dates ? opp.dates.forEach(date => {
                if (toISO(date.date) === isoDate) {
                    opportunity = opp;
                }
            }) : null
        );
        
        if (opportunity) {
            this.setState({ opportunity, oppsPopupOpen: true });
        }
    }

    render() {
        const { data } = this.props;
        const { oppsPopupOpen, opportunity } = this.state
        const { name, dates } = opportunity;

        const today = new Date();

        return (
            <View style={styles.calendarContainer}>

                <Modal animationType="slide" transparent visible={oppsPopupOpen} onRequestClose={() => this.setState({ oppsPopupOpen: false })}>
                    <TouchableOpacity style={{flex: 1}} activeOpacity={1} onPress={() => this.setState({ oppsPopupOpen: false })}>
                        <TouchableOpacity style={styles.popup} activeOpacity={1} onPress={() => {}}>
                            <Text style={[styles.title, styles.opportunityTitle]}>{name}</Text>
                                <ScrollView style={styles.datesContainer}>
                                {
                                    dates ? dates.map(date =>
                                        <View key={date.name} style={styles.dateContainer}>
                                            <Text style={[styles.text, {fontWeight: 'bold', textAlign: 'center'}]}>{date.name}</Text>
                                            <Text style={[styles.text, {textAlign: 'center'}]}>{date.date.toDateString()}</Text>
                                        </View>
                                    ) : null
                                }
                                </ScrollView>
                                <Button style={{flex: 1}} onPress={() => this.setState({ oppsPopupOpen: false })} label='CLOSE'/>
                        </TouchableOpacity>
                    </TouchableOpacity>
                </Modal>

                <Calendar
                    style={{flex: 1}}
                    minDate={today}
                    onDayPress={this.handleDayClick}
                    markedDates={{
                        //[toISO(today)]: {selected: true, selectedColor: SECONDARY_BACKGROUND},
                        ...Object.assign({}, ...(data && data.map(date => {return {[toISO(date.date)]: {marked: true}}})))
                    }}
                    theme={{
                        arrowColor: 'black',
                        backgroundColor: WHITE,
                        calendarBackground: WHITE,
                        textMonthFontFamily: TITLE_FONT,
                        textDayFontFamily: TITLE_FONT,
                        textDayFontSize: 14,
                        dayTextColor: PRIMARY,
                        monthTextColor: PRIMARY
                    }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({...GlobalStyles,
    calendarContainer: {
        flex: 1,
        padding: 1,
        borderRadius: BORDER_RADIUS,
        borderColor: 'black',
        borderWidth: 2
    },
    opportunityTitle: {
        flex: 1,
        textAlign: 'center',
        fontSize: 32
    },
    datesContainer: {
        margin: 10,
        padding: 5,
        marginTop: 30
    },
    dateContainer: {
        flex: 4,
        margin: 5,
        padding: 5
    }
});

export default HomeCalendar;