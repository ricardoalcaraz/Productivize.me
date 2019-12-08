import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, Button, TextInput } from 'react-native'
import HabitList from './HabitList.js'
import { connect } from 'react-redux'
import { setHabits } from './Store/HabitActions'
import { log } from '../Utility/logger'

class Habits extends React.Component {
  constructor(props){
    super(props)
    this.state = {text: ''}
  }

  render() {
    const { navigation } = this.props
    return (
      <View>
        <Text>
          Hello From Habits!
        </Text>
        <HabitList habits={this.props.habits} setHabits={this.props.setHabits}></HabitList>
        <Button title='Add Habits' onPress={() => {navigation.push('AddHabit')}}/>
      </View>
    )
  }
}

Habits.propTypes = {
  habits: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
  log("Setting habits to the habits screen")
  return {
    habits: state.habits.habits
  }
}

export default connect(mapStateToProps, { setHabits })(Habits)