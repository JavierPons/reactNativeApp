import React, { Component  } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Calendar } from 'react-native-calendars';
class MyCalendar extends Component {


      render() {
      let myDate = Date.now()
        return (
          <View>
            <Calendar
              // Initially visible month. Default = Date()
              current={myDate}
              // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
              minDate={'2012-05-10'}
              // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
              maxDate={'2012-05-30'}
              // Handler which gets executed on day press. Default = undefined
              onDayPress={day => {
                console.log('selected day', day);
              }}
              // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
              monthFormat={'yyyy MM'}
              // Handler which gets executed when visible month changes in calendar. Default = undefined
              onMonthChange={month => {
                console.log('month changed', month);
              }}
              // Hide month navigation arrows. Default = false
              hideArrows={false}
              // Do not show days of other months in month page. Default = false

              showWeekNumbers={true}
              markedDates={{
                  current: {selected: true, marked: true, selectedColor: 'blue'}
                }}
              hideExtraDays={true}
              // If hideArrows=false and hideExtraDays=false do not swich month when tapping on greyed out
              // day from another month that is visible in calendar page. Default = false
              disableMonthChange={true}
              // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
              firstDay={1}
            />
          </View>
        );
      }
}

export default MyCalendar;