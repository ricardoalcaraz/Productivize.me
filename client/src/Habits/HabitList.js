import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import HabitRow from './HabitRow.js'

export default class HabitList extends React.Component {
    //TODO: Make this part of the middleware
    //TODO: Only fetch data that doesn't exist within the list
    //TODO: Make the function only return data that the user has active
    async retrieveFromServer() {
      try{
        let response = await fetch('https://localhost:37101/api/habits/', {
          method: 'GET',
          headers: {
            accessToken: 'Hello'
          }
        })
        let json = await response.json()
        this.props.setHabits(json.db)
      } catch(ex){
        console.log(ex)
      }
    }

    //TODO: Sync only habits without a uuid to the server
    //TODO: Make this part of the middleware
    async syncToServer(habits) {
      try{
        const request = {
          user_id: 'ralcaraz',
          habits: habits
        }
        let response = await fetch('https://localhost:37101/api/habits/sync', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
            accessToken: 'Let Me In',
          },
          body: JSON.stringify(request)
        })
        return await response.json()
      } catch(ex){
        console.log(ex)
      }
    }

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
          <Button title='Save To Database' onPress={() => this.syncToServer(this.props.habits)}/>
          <Button title='Get all habits from database' onPress={() => this.retrieveFromServer()}/>
          </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start'
  }
})