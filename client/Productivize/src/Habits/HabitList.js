import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import HabitRow from './HabitRow.js'

export default class HabitList extends React.Component {
    render() {
      const rows = []
      this.props.habits.forEach((habit) => {
        rows.push(
          <HabitRow key={habit.identifier} habit={habit}></HabitRow>
        )
      });
        return (
          <View style={styles.container}>
            {rows}
          <Button title='Save To Database' onPress={() => alert('Pressed Button')}/>
          <Button title='Get all habits from database' onPress={() => alert('Get All habits')}/>
          </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start'
  }
})