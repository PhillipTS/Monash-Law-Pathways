import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { Calendar } from 'react-native-calendars';
import { SECONDARY_BACKGROUND, BORDER_RADIUS, WHITE, TITLE_FONT, PRIMARY } from '../Constants';
import GlobalStyles from '../Styles';

const toISO = date => date.toISOString().substr(0, 10);

class HomeCalendar extends React.Component {
    render() {
        const { data } = this.props;
        const today = new Date();

        return (
            <View style={styles.calendarContainer}>
                <Calendar
                    style={{flex: 1}}
                    minDate={today}
                    onDayPress={day => console.log('Selected Day: ', day)}
                    //dayComponent={({date, state}) =>
                    //    <View style={{flex: 1}}>
                    //        <Text style={{textAlign: 'center', color: state === 'disabled' ? 'grey' : PRIMARY}}>{date.day}</Text>
                    //    </View>
                    //}
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