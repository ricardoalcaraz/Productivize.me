import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

/*
    This class is intended represent a single row of data that is brought in
*/
export default class HabitRow extends React.Component {
    render() {
        const habit = this.props.habit
        return (
          <View style={styles.container}>
            <Text style={styles.title}>{habit.description}</Text>
            <Text>{habit.frequency_description}</Text>
          </View>
        )
    }
}

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  description: {
    flex: 0.8, 
    fontSize: 12
  },
  frequency: {
    flex: 0.2, 
  }
})