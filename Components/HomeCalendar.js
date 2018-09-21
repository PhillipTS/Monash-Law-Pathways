import React from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import { Calendar } from 'react-native-calendars';
import { BORDER_RADIUS, WHITE, TITLE_FONT, PRIMARY } from '../Constants';
import GlobalStyles from '../Styles';

const toISO = date => date.toISOString().substr(0, 10);

class HomeCalendar extends React.Component {
    render() {
        const { data, onPress } = this.props;
        const today = new Date();

        return (
            <View style={styles.calendarContainer}>
                <Calendar
                    style={{flex: 1}}
                    minDate={today}
                    onDayPress={onPress}
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
    }
});

export default HomeCalendar;