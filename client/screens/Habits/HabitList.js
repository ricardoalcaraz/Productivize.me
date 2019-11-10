import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import HabitRow from './HabitRow.js'

export default class HabitList extends React.Component {
    render() {
      const rows = []
      this.props.habits.forEach((habit) => {
        rows.push(
          <HabitRow habit={habit}></HabitRow>
        )
      });
        return (
          <View style={styles.container}>
            {rows}
          </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start'
  }
})