import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { TextInput, ScrollView } from 'react-native-gesture-handler'
import HabitList from './Habits/HabitList.js'

export default class MainScreen extends React.Component {
    render() {
        return (
          <View style={styles.container}>
            <Text>Your Habits</Text>
            <ScrollView>
              <HabitList habits={HABITS}></HabitList>
            </ScrollView>
          </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center', 
    justifyContent: 'center'
  },
  title: {
    fontSize: 20
  }
})

const HABITS = [
  {
      identifier: 1,
      user_id: 'Ricardo',
      description: 'Brush Teeth',
      created_on: Date.now(),
      start_date: Date.now(),
      end_date: null,
      frequency_description: 'Daily' 
  },
  {
      identifier: 2,
      user_id: 'Ricardo',
      description: 'Program Productivize',
      created_on: Date.now(),
      start_date: Date.now(),
      end_date: null,
      frequency_description: 'Daily' 
  }
]