import React from 'react'
import { Calendar } from 'react-native-calendars'

class HomeCalendar extends React.Component {
    render() {
        return (
            <Calendar
                style={{borderColor: 'black', borderWidth: 1}}
                onDayPress={(day) => {console.log('selected day', day)}}
                onDayLongPress={(day) => {console.log('selected day', day)}}
                monthFormat={'yyyy MM'}
                onMonthChange={(month) => {console.log('month changed', month)}}
            />
        )
    }
}

export default HomeCalendar;