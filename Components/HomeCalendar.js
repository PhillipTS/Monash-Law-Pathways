import React from 'react';
import { View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { SECONDARY_BACKGROUND } from '../Constants';

class HomeCalendar extends React.Component {
    render() {
        const today = new Date();
        const isoDate = today.toISOString().substr(0, 10);
        return (
            <View style={{flex: 1, borderColor: 'black', borderWidth: 2}}>
                <Calendar
                    style={{flex: 1}}
                    minDate={today}
                    onDayPress={day => console.log('Selected Day: ', day)}
                    markedDates={{
                        [isoDate]: {selected: true, selectedColor: SECONDARY_BACKGROUND},
                        '2018-09-06': {marked: true}
                    }}
                    theme={{
                        arrowColor: 'black'
                    }}
                />
            </View>
        )
    }
}

export default HomeCalendar;