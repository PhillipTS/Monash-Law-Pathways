import React from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import { Calendar } from 'react-native-calendars';
import { SECONDARY_BACKGROUND, BORDER_RADIUS } from '../Constants';
import GlobalStyles from '../Styles';

class HomeCalendar extends React.Component {
    render() {
        const today = new Date();
        const isoDate = today.toISOString().substr(0, 10);
        return (
            <View style={styles.calendarContainer}>
                <Calendar
                    style={{flex: 1}}
                    minDate={today}
                    onDayPress={day => console.log('Selected Day: ', day)}
                    markedDates={{
                        [isoDate]: {selected: true, selectedColor: SECONDARY_BACKGROUND},
                        '2018-09-26': {marked: true}
                    }}
                    theme={{
                        arrowColor: 'black'
                    }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({...GlobalStyles,
    calendarContainer: {
        flex: 1,
        borderRadius: BORDER_RADIUS,
        borderColor: 'black',
        borderWidth: 2
    }
});

export default HomeCalendar;