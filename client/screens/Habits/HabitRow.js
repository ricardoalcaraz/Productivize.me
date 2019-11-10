import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

/*
    This class is intended represent a single row of data that is brought in
*/
export default class HabitRow extends React.Component {
    render() {
        const habit = this.props.habit
        return (
          <View>
            <Text style={styles.title}>{habit.description}</Text>
          </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'center'
  },
  title: {
    fontSize: 20
  }
})